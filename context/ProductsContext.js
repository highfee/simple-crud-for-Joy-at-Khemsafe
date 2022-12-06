import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  products: [],
};

export const ProductContext = createContext(INITIAL_STATE);

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS":
      return action.payload;
    case "SEARCHED_PRODUCTS":
      return action.payload;

    default:
      return state;
  }
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch2] = useReducer(ProductReducer, INITIAL_STATE);

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        dispatch2,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
