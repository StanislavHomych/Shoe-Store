import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from "./../Footer/Footer"
import { WrapperMain } from '../../styledComponentsCommon/CommonStyled';





const Main = () => {
  return (
    <WrapperMain>
      <Header/>
      <Outlet/>
      <Footer/>
    </WrapperMain>
  )
}

export default Main
