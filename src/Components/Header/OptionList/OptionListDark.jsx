import React from 'react';
import { IoPersonSharp, IoBasketOutline } from 'react-icons/io5'
import { ModeToggleDarkStyled } from '../HeaderStyledComponents/HeaderStyledComponents';


const OptionListDark = () => {
    return (<>
        <ModeToggleDarkStyled>
            <IoBasketOutline />
        </ModeToggleDarkStyled>
        <ModeToggleDarkStyled>
            <IoPersonSharp />
        </ModeToggleDarkStyled>
    </>
    )
}

export default OptionListDark;
