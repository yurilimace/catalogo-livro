import React from "react";

import "./App.css";

import { CustomRouter } from "./routes/router";
import { PageContainer } from "./components/PageContainer";

function App() {
  return (
    <div className="App">
      <CustomRouter />
    </div>
  );
}

export default App;
