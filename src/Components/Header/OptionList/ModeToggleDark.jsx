import React from 'react';
import { IoMoonOutline } from "react-icons/io5";
import { ModeToggleDarkStyled } from "./../HeaderStyledComponents/HeaderStyledComponents"


const ModeToggleDark = (props) => {
  return <>
    <ModeToggleDarkStyled onClick={props.changeTheme}>
      <IoMoonOutline />
    </ModeToggleDarkStyled>
  </>
}

export default ModeToggleDark
