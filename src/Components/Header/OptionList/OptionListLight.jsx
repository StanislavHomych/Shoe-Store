import React from 'react';
import { IoPersonSharp, IoBasketOutline } from 'react-icons/io5';
import { ModeToggleStyled } from '../HeaderStyledComponents/HeaderStyledComponents';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const OptionListLight = () => {

    const [nav, setNav] = useState(false)
    const navig = useNavigate();

    console.log("OptionListDrark Rendered")

    useEffect(() => {
        if (nav) {
            navig("profile");
        }

    }, [nav])

    return (<>
        <ModeToggleStyled>
            <IoBasketOutline />
        </ModeToggleStyled>
        <ModeToggleStyled>
            <IoPersonSharp onClick={()=>{setNav(true)}} />
        </ModeToggleStyled>
    </>
    )
}

export default OptionListLight
