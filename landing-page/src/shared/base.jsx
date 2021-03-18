import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout(props) {
  return (
    <div>
      <div className='mt-5'></div>
      <Navbar />
      <div style={{ height: "200px" }} />
      <div style={{ minHeight: "45vh" }}>{props.children}</div>
      <Footer></Footer>
    </div>
  );
}
