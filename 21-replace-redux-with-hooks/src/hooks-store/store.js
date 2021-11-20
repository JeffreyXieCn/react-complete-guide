import { useEffect, useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

// custom "Redux" global store
export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1]; // different components will share the global state, but each has its own setState function.

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState); // call setState with globalState in each component, causing the component to re-render
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    // clean up: unregister this listen when the component using this hook unmounts
    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};
