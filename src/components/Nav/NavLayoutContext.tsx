import { createContext } from "react";
import { navLayoutState, navLayoutAction } from "../../App";

interface navLayoutContext {
  viewPort: string;
  navLayoutState: navLayoutState;
  navLayoutDispatch: React.Dispatch<navLayoutAction>;
}

export const navLayoutContext = createContext<Partial<navLayoutContext>>({});
