import React from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { CustomRouter } from "./routes/router";

import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <CustomRouter />
    </RecoilRoot>
  );
}

export default App;
