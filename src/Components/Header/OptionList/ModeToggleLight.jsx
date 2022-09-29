import React from 'react';
import { IoMoonOutline } from "react-icons/io5";
import { ModeToggleStyled } from "./../HeaderStyledComponents/HeaderStyledComponents"


const ModeToggleLight = (props) => {
  return <>
    <ModeToggleStyled onClick={props.changeTheme}>
      <IoMoonOutline />
    </ModeToggleStyled>
  </>
}

export default ModeToggleLight
