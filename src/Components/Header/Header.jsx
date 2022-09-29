import React, { useEffect, useState } from 'react';

import { Container, Wrapper } from '../../styledComponentsCommon/CommonStyled';
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
                <Wrapper padding={"0.5rem 0"}>
                    <Title>Shoes Store</Title>
                    <Wrapper>
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
                    </Wrapper>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}

export default Header
