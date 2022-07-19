import React from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { CustomRouter } from "./routes/router";

import { RecoilRoot } from "recoil";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <RecoilRoot>
      <ToastContainer theme="colored" />
      <CustomRouter />
    </RecoilRoot>
  );
}

export default App;
