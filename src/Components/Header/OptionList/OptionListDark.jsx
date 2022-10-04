import React from 'react';
import { IoPersonSharp, IoBasketOutline } from 'react-icons/io5'
import { ModeToggleDarkStyled } from '../HeaderStyledComponents/HeaderStyledComponents';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OptionListDark = () => {

    const [nav, setNav] = useState(false)
    const navig = useNavigate();

    console.log("OptionListDrark Rendered")

    useEffect(()=>{
        if(nav){
            navig("profile");
        }
        
    },[nav])


    return (<>
        <ModeToggleDarkStyled>
            <IoBasketOutline />
        </ModeToggleDarkStyled>
        <ModeToggleDarkStyled>
            <IoPersonSharp onClick={()=>{setNav(true)}} />
        </ModeToggleDarkStyled>
    </>
    )
}

export default OptionListDark;
