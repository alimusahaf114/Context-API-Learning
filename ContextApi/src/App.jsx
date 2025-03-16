import React from "react";
import { MyProvider } from "./Component/ContextApi/store";
import Home from "./Component/Home";

const App = () => {
  return (
    <MyProvider>
      <Home />
    </MyProvider>
  );
};

export default App;
