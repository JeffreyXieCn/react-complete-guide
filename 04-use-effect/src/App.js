import React, {useEffect, useState} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("useEffect called!");
    if (localStorage.getItem("isUserLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, []); // when app starts, it's considered a dependency change


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isUserLoggedIn", "true");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isUserLoggedIn");
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler}/>}
        {isLoggedIn && <Home onLogout={logoutHandler}/>}
      </main>
    </React.Fragment>
  );
}

export default App;
