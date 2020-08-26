import React, { useReducer } from "react";
import { Nav } from "./components/Nav/Nav";
import { navLayoutContext } from "./components/Nav/NavLayoutContext";
import { useWindowWidth } from "./useWindowWidth";

export interface navLayoutState {
  fullSizeSearchIsActive: boolean;
  mobileSizeSearchIsActive: boolean;
  dropdownIsVisible: boolean;
}

export interface navLayoutAction {
  type: string;
  payload?: any;
}

const navLayoutReducer = (state: navLayoutState, action: navLayoutAction) => {
  switch (action.type) {
    case "TOGGLE_MOBILE_SEARCH":
      return {
        ...state,
        mobileSizeSearchIsActive: !state.mobileSizeSearchIsActive,
      };
    case "TOGGLE_FULLSIZE_SEARCH":
      return {
        ...state,
        fullSizeSearchIsActive: !state.fullSizeSearchIsActive,
      };
    case "TOGGLE_DROPDOWN":
      return { ...state, dropdownIsVisible: !state.dropdownIsVisible };
    default:
      return state;
  }
};

const initialState: navLayoutState = {
  fullSizeSearchIsActive: false,
  mobileSizeSearchIsActive: false,
  dropdownIsVisible: false,
};

function App() {
  const [navLayoutState, navLayoutDispatch] = useReducer(
    navLayoutReducer,
    initialState
  );
  const viewPort = useWindowWidth();
  return (
    <div className="App">
      <navLayoutContext.Provider
        value={{ viewPort, navLayoutState, navLayoutDispatch }}
      >
        <Nav />
      </navLayoutContext.Provider>
    </div>
  );
}

export default App;
