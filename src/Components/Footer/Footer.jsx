import React from 'react';
import styled from 'styled-components';
import { HeadingFirstLvl, HeadingThirdLvl, WrapperFlex, WrapperGrid } from '../../styledComponentsCommon/CommonStyled';
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import {FooterWrapper, FooterInput, FooterButton, HeadingThirdLvlFooter, FooterGrid, GridItem } from "./FooterStyles"




const Footer = () => {
  return (
    <FooterWrapper fd="column">
      <FooterGrid>
        <GridItem margin="0 0 0 40px" fd="column" justify="flex-start" align="start">
          <HeadingFirstLvl color='#B68D40' margin="0 0 10px 0">Shoes Store</HeadingFirstLvl>
          <HeadingThirdLvlFooter margin="0 0 10px 0">Про компанію</HeadingThirdLvlFooter>
          <HeadingThirdLvlFooter>Магазини</HeadingThirdLvlFooter>
        </GridItem>
        <GridItem margin="0 0 0 40px" fd="column" justify="flex-start" align="start">
          <HeadingFirstLvl color='#B68D40' margin="0 0 10px 0">Допомога</HeadingFirstLvl>
          <HeadingThirdLvlFooter margin="0 0 10px 0">Оплата</HeadingThirdLvlFooter>
          <HeadingThirdLvlFooter margin="0 0 10px 0">Доставка</HeadingThirdLvlFooter>
          <HeadingThirdLvlFooter margin="0 0 10px 0">Повернення</HeadingThirdLvlFooter>
          <HeadingThirdLvlFooter >Оферта</HeadingThirdLvlFooter>
        </GridItem>
        <GridItem margin="0 0 0 40px" fd="column" justify="flex-start" align="start">
          <HeadingFirstLvl color="#B68D40" margin="0 0 10px 0">Розсилка</HeadingFirstLvl>
          <FooterInput margin="0 0 10px 0" />
          <FooterButton>Підписатися</FooterButton>
        </GridItem >
        <GridItem margin="0 0 0 40px" fd="column" justify="flex-start" align="start">
          <HeadingFirstLvl color="#B68D40" margin="0 0 10px 0">Ми в мережі</HeadingFirstLvl>
          <WrapperFlex>
            <IoLogoInstagram size="45" color="#D3D3CB" />
            <IoLogoFacebook size="45" color="#D3D3CB" />
          </WrapperFlex>
        </GridItem>
      </FooterGrid>
      <HeadingThirdLvlFooter >Мультибрендовий магазин одягу - Shoes Store @ 2022</HeadingThirdLvlFooter>
    </FooterWrapper >
  )
}

export default Footer
