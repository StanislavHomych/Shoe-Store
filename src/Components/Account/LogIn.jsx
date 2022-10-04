import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
    Container,
    WrapperFlex,
    HeadingFirstLvl,
    HeadingSecondLvl
} from '../../styledComponentsCommon/CommonStyled';
import {
    AuthSection,
    InputElement,
    InputElementPassword,
    AuthButton,
    GoToAnotherAuthOption
} from "./AccountComonStyles";
import { useNavigate } from 'react-router-dom';




const LogIn = () => {

    const [nav, setNav] = useState(false);
    const [passwordlInputValue, setPasswordInputValue] = useState('');
    const [emailInputValue, setEmailInputValue] = useState('');

    const navigate = useNavigate();

    console.log("Login Rendered")

    useEffect(() => {
        if (nav) {
            navigate('registration');
        }
    }, [nav])

    return (
        <>
            <Container>
                <WrapperFlex justify="center" padding="2rem 0">
                    <form>
                        <AuthSection fd="column" padding="1.5rem 1rem">
                            <HeadingFirstLvl>Вхід</HeadingFirstLvl>
                            <InputElement   
                                value={emailInputValue} 
                                onChange={(e) => { setEmailInputValue(e.target.value) }} />
                            <InputElementPassword 
                                value={passwordlInputValue} 
                                onChange={(e) => { setPasswordInputValue(e.target.value) }} />
                            <AuthButton>Вхід</AuthButton>
                            <HeadingSecondLvl>АБО</HeadingSecondLvl>
                            <GoToAnotherAuthOption 
                                onClick={() => { setNav(true) }}>Реєстрація</GoToAnotherAuthOption>
                        </AuthSection>

                    </form>

                </WrapperFlex>
            </Container>
        </>
    )
}

export default LogIn
