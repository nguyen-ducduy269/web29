import { createContext, useEffect, useReducer, useState } from "react";

export const ShoppingContext = createContext();

export const todoShoppingCart = (state, action) => {
  switch (action.type) {
    case "LOAD_DATA_SUCCESS": {
      return { ...state, products: action.payload, loading: false };
    }
    case "LOAD_DATA_FAIL": {
      return { ...state, loading: false, error: action.payload };
    }
    case "ADD_TO_CART": {
      return { ...state, count: state.count + 1 };
    }
    default:
      return state;
  }
};

const initialState = {
  products: [],
  loading: true,
  error: null,
  count: 0,
};

export const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoShoppingCart, initialState);

  useEffect(() => {
    let ignored = false;
    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Lỗi tải dữ liệu");

        const items = await res.json();

        if (!ignored) dispatch({ type: "LOAD_DATA_SUCCESS", payload: items });
      } catch (error) {
        if (!ignored) dispatch({ type: "LOAD_DATA_FAIL", payload: error });
      }
    };
    getProducts();

    return () => {
      ignored = true;
    };
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TO_CART" });
    console.log("aaaaa");
  };

  return (
    <ShoppingContext.Provider
      value={{
        ...state,
        addTask,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
