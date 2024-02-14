"use client";

import { createContext, useState } from "react";

export const Drawer = createContext(null);

function Context({ children }) {
  const [drawer, setDrawer] = useState(false);

  return <Drawer.Provider value={{ drawer, setDrawer }}>{children}</Drawer.Provider>;
}

export default Context;
