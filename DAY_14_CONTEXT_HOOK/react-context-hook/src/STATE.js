import { createContext,  } from "react";

export const UserContext = createContext();

export const initialState = {
  name: "Sahil",
  age: 24,
  address: "India",
  email: "sahil@gmail.com",
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

