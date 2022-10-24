import React from 'react';
import {
    Container,
    WrapperFlex,
    HeadingFirstLvl,
    HeadingSecondLvl,
    HeadingThirdLvl
} from '../../styledComponentsCommon/CommonStyled';
import {
    AuthSection,
    InputElement,
    InputElementPassword,
    AuthButton,
    GoToAnotherAuthOption,
    InputElementUserName,
    SuccesRegInfo,
    ErrorRegInfo
} from "./AccountComonStyles";

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from "./../../data/userClass";
import { IoAlertCircle } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useItemActions } from "./../../Hooks/useDispatch"

const Registration = () => {
    
    const [nav, setNav] = useState(false);
    const [emailInputValue, setEmailInputValue] = useState('');
    const [userNameInputValue, setUserNameInputValue] = useState('');
    const [passwordlInputValue, setPasswordInputValue] = useState('');
    const [registrationIsSuccesful, setRegistrationIsSuccessful] = useState(false);

    const [isPassportValid, setIsPasporValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isUserNameValid, setIsUserNameValid] = useState(true);

    let passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let userNameRegEx = /^[A-Z]+[a-zA-Z]*$/;

    const state = useSelector(state => state.registrateUsersReducer)
    const { postUser } = useItemActions();

    const navigate = useNavigate()



    useEffect(() => {
        if (nav) {
            navigate('/logIn');
        }
    }, [nav])

    let createUser = function (email, name, password) {
        return new User(email, name, password)
    }

    let sendUser = (e, object) => {
        e.preventDefault();
        postUser(object);
        if (state.responseStatus === 201) {
            setRegistrationIsSuccessful(true);
            setUserNameInputValue("");
            setEmailInputValue("");
            setPasswordInputValue("")
        }
    }

    return (

        <>
            < Container minHeight="100vh" >
                <WrapperFlex justify="center" padding="2rem 0">
                    <form>
                        <AuthSection fd="column" padding="1.5rem 1rem">
                            <HeadingFirstLvl>Реєстрація</HeadingFirstLvl>
                            {
                                registrationIsSuccesful && passwordlInputValue.length === 0 ?
                                    <SuccesRegInfo justify="space-around">
                                        <IoAlertCircle />
                                        <HeadingThirdLvl>Ви успішно зареєструвались</HeadingThirdLvl>
                                    </SuccesRegInfo> :
                                    null
                            }
                            {
                                !isPassportValid && passwordlInputValue.length > 0 ?
                                    <ErrorRegInfo justify="start"><IoAlertCircle />Пароль має містити велику букву та цифру</ErrorRegInfo> :
                                    null
                            }
                            {
                                !isUserNameValid && userNameInputValue.length > 0 ?
                                    <ErrorRegInfo> <IoAlertCircle />Ім'я повинне починатися з великої літери і мати довжину більше ніж один символ</ErrorRegInfo> :
                                    null
                            }

                            <InputElement
                                required
                                borderColor={isEmailValid && emailInputValue.length > 0 ? "#00D100" : "black"}
                                value={emailInputValue}
                                onChange={(e) => {
                                    setEmailInputValue(e.target.value)
                                    setIsEmailValid(emailRegEx.test(emailInputValue))
                                }} />

                            <InputElementUserName
                                required
                                borderColor={isUserNameValid && userNameInputValue ? "#00D100" : "black"}
                                value={userNameInputValue}
                                onChange={(e) => {
                                    setUserNameInputValue(e.target.value)
                                    setIsUserNameValid(userNameRegEx.test(userNameInputValue))
                                }}
                            />

                            <InputElementPassword
                                required
                                borderColor={isPassportValid && passwordlInputValue.length > 0 ? "#00D100" : "black"}
                                value={passwordlInputValue}
                                onChange={(e) => {
                                    setPasswordInputValue(e.target.value.trim())
                                    setIsPasporValid(passwordRegEx.test(passwordlInputValue))
                                }} />

                            <AuthButton onClick={(e) => {
                                isPassportValid && sendUser(e, createUser(emailInputValue, userNameInputValue, passwordlInputValue));
                            }}>Реєстрація</AuthButton>
                            <HeadingSecondLvl>АБО</HeadingSecondLvl>
                            <GoToAnotherAuthOption
                                onClick={() => { setNav(true) }}>Вхід</GoToAnotherAuthOption>
                        </AuthSection>

                    </form>

                </WrapperFlex>
            </Container>
        </>
    )

}


export default Registration
