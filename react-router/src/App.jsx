import React from "react";
import Navbar from "./components/navbar";
import MainContainer from "./components/mainContainer";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div id="container">
      <Navbar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
