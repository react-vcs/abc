const { createContext } = require("react");

let PRODUCT_CONTEXT = createContext();

let PRODUCT_PROVIDER = ({ children }) => {
  let arr = [1, 2, 3];
  return (
    <PRODUCT_CONTEXT.Provider value={{}}>{children}</PRODUCT_CONTEXT.Provider>
  );
};
