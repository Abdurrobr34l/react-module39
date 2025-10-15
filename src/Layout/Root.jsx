import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Container from '../Components/Container/Container';

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Outlet></Outlet>
      </Container>
    </div>
  );
};

export default Root;