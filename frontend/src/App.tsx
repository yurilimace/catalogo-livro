import React from "react";

import "./App.css";
import { Login } from "./pages/Login/Login";
import { StyledNavbar } from "./components/Navbar/index";
import { PageContainer } from "./components/PageContainer/index";

function App() {
  return (
    <div className="App">
      <PageContainer>
        {" "}
        <h2> Page Content </h2>{" "}
      </PageContainer>
    </div>
  );
}

export default App;
