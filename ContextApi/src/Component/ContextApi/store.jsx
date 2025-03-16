import { createContext } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const myName = "Musahaf Ali";
  const handleClick = () => {
    console.log(`Hello Musahaf Ali ,MyName is ${myName}`);
  };
  return (
    <MyContext.Provider value={{ myName, handleClick }}>
      {children}
    </MyContext.Provider>
  );
};
