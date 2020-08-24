import { createContext } from "react";

interface navLayoutContext {
  viewPort: string;
}

export const navLayoutContext = createContext<Partial<navLayoutContext>>({});
