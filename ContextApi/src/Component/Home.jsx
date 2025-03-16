import React, { useContext } from "react";
import { MyContext } from "./ContextApi/store";

const Home = () => {
  const { myName, handleClick } = useContext(MyContext);
  return (
    <>
      <h1>Hello My name is {myName} </h1>;
      <button onClick={() => handleClick()}>Hello</button>
    </>
  );
};

export default Home;
