import React, { useEffect, useRef, useState } from 'react';
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
    GoToAnotherAuthOption,
    ErrorRegInfo
} from "./AccountComonStyles";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useItemActions } from "./../../Hooks/useDispatch";
import { IoAlertCircle } from "react-icons/io5";




const LogIn = () => {

    const state = useSelector((state) => state.logIn);
    const { logIn, deleteUser } = useItemActions()


    const [nav, setNav] = useState(false);
    const [passwordlInputValue, setPasswordInputValue] = useState('');
    const [emailInputValue, setEmailInputValue] = useState('');

    const [wrongLogIn, setWrongLogin] = useState(false);

    const navigate = useNavigate();
    const goToUserAccount = useNavigate();

    let isUserActive = useRef(false);


    useEffect(() => {
        if (nav) {
            navigate('/registration');
        }
    }, [nav])

    const makeLogin = async (password, name) => {
        await logIn(password, name)
        if (state.user === "404") {
            setWrongLogin(true);
            setPasswordInputValue("")
            setEmailInputValue("")
        }
        if (state.user != '404' || false || "exited") {
            goToUserAccount("/userAccount");
            console.log("made ")
        }
    }






    return (
        <>
            <Container minHeight="100vh">
                <WrapperFlex justify="center" padding="2rem 0">
                    <form>
                        <AuthSection fd="column" padding="1.5rem 1rem">
                            <HeadingFirstLvl>Вхід</HeadingFirstLvl>

                            {
                                wrongLogIn && passwordlInputValue.length == 0 && emailInputValue.length == 0 ?
                                    <ErrorRegInfo justify="start"><IoAlertCircle />Помилка при вході, спробуйте ще раз!</ErrorRegInfo> :
                                    null
                            }

                            <InputElement
                                value={emailInputValue}
                                onChange={(e) => { setEmailInputValue(e.target.value) }} />
                            <InputElementPassword
                                value={passwordlInputValue}
                                onChange={(e) => { setPasswordInputValue(e.target.value) }} />
                            <AuthButton onClick={() => { makeLogin(passwordlInputValue, emailInputValue) }}>Увійти</AuthButton>
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
