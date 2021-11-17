import React, { useCallback, useEffect, useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,

  /**
   *
   * @param token the idToken
   * @param expirationTime expiration time in milliseconds
   */
  login: (token, expirationTime) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  //const adjustedExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = expirationTime - currentTime;
  console.log("remainingDuration (ms): " + remainingDuration);
  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationTime = localStorage.getItem("expirationTime");

  if (storedToken && storedExpirationTime) {
    const remainingTime = calculateRemainingTime(storedExpirationTime);
    if (remainingTime <= 60000) {
      // less than one minute
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
      return null;
    } else {
      return {
        token: storedToken,
        remainingTime: remainingTime,
      };
    }
  }

  return null;
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  /**
   *
   * @param token the idToken
   * @param expirationTime expiration time in milliseconds
   */
  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log("Remaining time (ms): " + tokenData.remainingTime);
      logoutTimer = setTimeout(logoutHandler, tokenData.remainingTime);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
