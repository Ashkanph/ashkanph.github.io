import React, { createContext, useReducer, useContext } from "react";

const StateContext = createContext();
const ActionContext = createContext();

const defaultTheme = () => {
    const lth = window?.localStorage.getItem("theme");
    return lth && lth !== "" ? lth : "light";
};

const initialState = {
  theme: defaultTheme(),
};

function reducer(state, action) {
  switch (action.type) {
    case "changeTheme":
      return { ...state, theme: action.data }
    default:
      return state
  }
}

function useTheme() {
  const context = useContext(StateContext)
  if (!StateContext) throw Error("useTheme must be used under StateContext")
  return context
}

function useActions() {
  const context = useContext(ActionContext)
  if (!ActionContext) throw Error("useActions must be used under ActionContext")
  return context
}

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const actions = {
    changeTheme: selectedTheme => {
        localStorage.setItem("theme", selectedTheme);
        dispatch({ type: "changeTheme", data: selectedTheme });
    } 
  };

  return (
    <StateContext.Provider value={state}>
      <ActionContext.Provider value={actions}>
        {children}
      </ActionContext.Provider>
    </StateContext.Provider>
  )
}

export { useActions, useTheme };
export default StateProvider;