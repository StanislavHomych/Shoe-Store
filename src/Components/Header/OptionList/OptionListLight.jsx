import React from 'react';
import { IoPersonSharp, IoBasketOutline } from 'react-icons/io5';
import { ModeToggleStyled } from '../HeaderStyledComponents/HeaderStyledComponents';




const OptionListLight = () => {
    return (<>
        <ModeToggleStyled>
            <IoBasketOutline />
        </ModeToggleStyled>
        <ModeToggleStyled>
            <IoPersonSharp />
        </ModeToggleStyled>
    </>
    )
}

export default OptionListLight
