import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";

const root=ReactDOM.createRoot(document.getElementById("root"));

const FoodApp = ()=>(
  <>
    <Navbar />
    <Body />
    <Footer />
  </>
);
root.render(<FoodApp/>);