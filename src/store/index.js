import React, { createContext, useReducer } from "react";

const StateContext = createContext();
const ActionContext = createContext();

const defaultTheme = () => {
    let lth = "";
    if (typeof window !== `undefined`) {
        // code that references a browser global
        lth = window?.localStorage.getItem("theme");
    }
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

// function useTheme() {
//   const context = React.useContext(StateContext)
//   if (!StateContext) throw Error("useTheme must be used under StateContext")
//   return context
// }

// function useActions() {
//   const context = React.useContext(ActionContext)
//   if (!ActionContext) throw Error("useActions must be used under ActionContext")
//   return context
// }

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

//   const actions = {
//     changeTheme: selectedTheme => {
//         localStorage.setItem("theme", selectedTheme);
//         dispatch({ type: "changeTheme", data: selectedTheme });
//     } 
//   };

  return (
    <StateContext.Provider value={state}>
      {/* <ActionContext.Provider value={actions}> */}
      <ActionContext.Provider value={dispatch}>
        {children}
      </ActionContext.Provider>
    </StateContext.Provider>
  )
}

export { StateContext, ActionContext };
export default StateProvider;