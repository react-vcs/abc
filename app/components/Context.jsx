"use client";
const { createContext } = require("react");

export const PRODUCT_CONTEXT = createContext();

export const PRODUCT_PROVIDER = ({ children }) => {
  let arr = [1, 2, 3];
  return (
    <PRODUCT_CONTEXT.Provider value={{ arr }}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};
// export default PRODUCT_PROVIDER;
