import React from 'react';
import { IoPersonSharp, IoBasketOutline } from 'react-icons/io5';
import { ModeToggleStyled } from '../HeaderStyledComponents/HeaderStyledComponents';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const OptionListLight = () => {
    const state = useSelector((state) => state.logIn);

    const [nav, setNav] = useState(false)
    const navig = useNavigate();

    console.log("OptionListDrark Rendered")

    useEffect(() => {
        if (nav) {
            if(state.user != false && "exited" && "404" ){
                
                navig("userAccount")

            }else{
                navig("LogIn");
            }
            
        }

    }, [nav])

    return (<>
        <ModeToggleStyled>
            <IoPersonSharp onClick={()=>{setNav(!nav)}} />
        </ModeToggleStyled>
    </>
    )
}

export default OptionListLight
