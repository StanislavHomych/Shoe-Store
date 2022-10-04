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
import axios from 'axios';
import { IoAlertCircle } from "react-icons/io5"

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
    


    const navigate = useNavigate()

    useEffect(() => {
        if (nav) {
            navigate('/profile');
        }
    }, [nav])

    let createUser = function (email, name, password) {
        return new User(email, name, password)
    }
    let sendUser = async (e, object) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/Users',
                { ...object });

            if (response.status === 201) {
                setRegistrationIsSuccessful(true);
                setUserNameInputValue("");
                setEmailInputValue("");
                setPasswordInputValue("")
            }

        } catch (error) {
            console.log(error)
        }
    }



    console.log("registration is rendered")

    return (

        <>
            < Container >
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
                                !isPassportValid && passwordlInputValue.length > 0 ? <ErrorRegInfo justify="start"><IoAlertCircle />Пароль має містити велику букву та цифру</ErrorRegInfo> : null
                            }

                            <InputElement
                                borderColor={isEmailValid && emailInputValue.length > 0 ? "#00D100" : "black"}
                                value={emailInputValue}
                                onChange={(e) => {
                                    setEmailInputValue(e.target.value)
                                    setIsEmailValid(emailRegEx.test(emailInputValue))
                                    console.log(isEmailValid)
                                }} />
                            <InputElementUserName
                                borderColor={isUserNameValid && userNameInputValue ? "#00D100" : "black"}
                                value={userNameInputValue}
                                onChange={(e) => { 
                                    setUserNameInputValue(e.target.value) 
                                    setIsUserNameValid(userNameRegEx.test(userNameInputValue))
                                    console.log(isUserNameValid)}} />
                                    
                            <InputElementPassword
                                borderColor={isPassportValid && passwordlInputValue.length > 0 ? "#00D100" : "black"}
                                value={passwordlInputValue}
                                onChange={(e) => {
                                    setPasswordInputValue(e.target.value.trim())
                                    setIsPasporValid(passwordRegEx.test(passwordlInputValue))
                                    console.log(isPassportValid)
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
