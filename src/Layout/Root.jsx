import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Container from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>

      <div className="flex-1">
        <Container>
          <Outlet></Outlet>
        </Container>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default Root;
