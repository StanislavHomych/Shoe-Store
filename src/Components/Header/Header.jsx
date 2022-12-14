import React, { useEffect, useState } from 'react';

import { Container, WrapperFlex,StyledLink } from '../../styledComponentsCommon/CommonStyled';
import { HeaderEl, Title, ListOfOptions } from './HeaderStyledComponents/HeaderStyledComponents';

import OptionListLight from './OptionList/OptionListLight';
import OptionListDark from './OptionList/OptionListDark'
import ModeToggleLight from './OptionList/ModeToggleLight';
import ModeToggleDark from './OptionList/ModeToggleDark';






const Header = () => {


    const [theme, setTheme] = useState('light')

    const toggleTheme = () => setTheme(
        theme === 'light' ? 'dark' : 'light'
    )

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <HeaderEl>
            <Container>
                <WrapperFlex  padding={"0.5rem 0"}>
                    <StyledLink to="/"><Title>Shoes Store</Title></StyledLink>
                    <WrapperFlex>
                        {
                            theme === "light" ?
                                <ListOfOptions>
                                    <ModeToggleLight changeTheme={toggleTheme} />
                                    <OptionListLight />
                                </ListOfOptions> :
                                <ListOfOptions>
                                    <ModeToggleDark changeTheme={toggleTheme} />
                                    <OptionListDark />
                                </ListOfOptions>
                        }
                    </WrapperFlex>
                </WrapperFlex>
            </Container>
        </HeaderEl>
    )
}

export default Header
