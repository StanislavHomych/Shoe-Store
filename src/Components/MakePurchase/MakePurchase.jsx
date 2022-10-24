import React from 'react';
import {
    Container,
    HeadingFirstLvl,
    HeadingSecondLvl,
    HeadingThirdLvl,
    WrapperFlex,
} from '../../styledComponentsCommon/CommonStyled';
import { useSelector } from 'react-redux';
import { useItemActions } from '../../Hooks/useDispatch';
import { useEffect, useRef, useState } from 'react';
import {
    PurchaseConfirmation,
    NameInput,
    SecondNameInput,
    TownName,
    PostDepartment,
    PhoneNumber,
    AuthenticationSection,
    AuthenticationFlex,
    MakePurchaseImg,
    BasketSizeElement,
    PurchaseIsSuccessfull,
    MakePurchaseGrid
} from "./MakePurchaseStyled"







const MakePurchase = () => {

    const state = useSelector((state) => state.logIn);
    const { makeOrder, clearBasket } = useItemActions();
    const arrayOfPrices = useRef([]);
    const [total, setTotal] = useState(0);


    const [nameInputValue, setNameInputValue] = useState("");
    const [secondNameInputValue, setSecondNameInputValue] = useState("");
    const [townNameInputValue, setTownNameInputValue] = useState("");
    const [postDepartmentInputValue, setPostDepartmentInputValue] = useState("");
    const [phoneNumberInputValue, setPhoneNumberInputValue] = useState("");

    useEffect(() => {
        state.basket.forEach(element => {
            arrayOfPrices.current.push(element.price)
        })

        setTotal(arrayOfPrices.current.reduce((previousPrice, price) => {
            return previousPrice + price
        }, 0))


    }, []);

    let handleNameInput = (e) => {
        setNameInputValue(e);
    }

    let handleSecondNameInput = (e) => {
        setSecondNameInputValue(e);
    }

    let handleTownNameInput = (e) => {
        setTownNameInputValue(e);
    }

    let handlePostDepartmentInput = (e) => {
        setPostDepartmentInputValue(e);
    }

    let handlePhoneNumberInput = (e) => {
        setPhoneNumberInputValue(e);
    }

    let makePurchase = () => {
        let userOrderInfo = {
            name: nameInputValue,
            secondName: secondNameInputValue,
            townName: townNameInputValue,
            postDepartment: postDepartmentInputValue,
            phoneNumber: phoneNumberInputValue
        }

        makeOrder(userOrderInfo);
        clearBasket()
        setTotal(0)
        setNameInputValue("");
        setSecondNameInputValue("");
        setTownNameInputValue("");
        setPostDepartmentInputValue("");
        setPhoneNumberInputValue("");



    }


    return (
        <Container minHeight="100vh">
            <MakePurchaseGrid gtc="repeat(2, 1fr)">
                <AuthenticationSection fd="column" >
                    <HeadingFirstLvl margin="0 0 10px 0">Оформлення замовлення</HeadingFirstLvl>
                    <AuthenticationFlex >
                        <HeadingSecondLvl>Ім'я: </HeadingSecondLvl>
                        <NameInput value={nameInputValue} onChange={(e) => { handleNameInput(e.target.value) }}></NameInput>
                    </AuthenticationFlex>
                    <AuthenticationFlex>
                        <HeadingSecondLvl>Фамілія: </HeadingSecondLvl>
                        <SecondNameInput value={secondNameInputValue} onChange={(e) => { handleSecondNameInput(e.target.value) }}></SecondNameInput>
                    </AuthenticationFlex>
                    <AuthenticationFlex>
                        <HeadingSecondLvl>Місто доставки: </HeadingSecondLvl>
                        <TownName value={townNameInputValue} onChange={(e) => { handleTownNameInput(e.target.value) }}></TownName>
                    </AuthenticationFlex>
                    <AuthenticationFlex>
                        <HeadingSecondLvl>Відділення Нової Пошти: </HeadingSecondLvl>
                        <PostDepartment value={postDepartmentInputValue} onChange={(e) => { handlePostDepartmentInput(e.target.value) }}></PostDepartment>
                    </AuthenticationFlex>
                    <AuthenticationFlex>
                        <HeadingSecondLvl>Номер телефону: </HeadingSecondLvl>
                        <PhoneNumber value={phoneNumberInputValue} onChange={(e) => { handlePhoneNumberInput(e.target.value) }}></PhoneNumber>
                    </AuthenticationFlex>
                    <PurchaseConfirmation onClick={() => { makePurchase() }}>{"Оформити покупку"}</PurchaseConfirmation>
                </AuthenticationSection>
                <AuthenticationSection fd="column" justify="start" >
                    <HeadingFirstLvl>Список ваших покупок</HeadingFirstLvl>
                    {

                        state.user !== false && "exited" && 404 && state.basket != false ?
                            state.basket.map((item, itemIndex) => {
                                return <WrapperFlex padding="20px" key={item.id}>
                                    <MakePurchaseImg src={item.img}></MakePurchaseImg>
                                    <HeadingThirdLvl margin="0  20px 0 0">{item.brand}</HeadingThirdLvl>
                                    <HeadingThirdLvl fw="300" color="red">{item.size.length !== 0 ? null : 'Розмір не вибрано'}</HeadingThirdLvl>

                                    {
                                        item.size.map((element, sizeIndex) => {
                                            return <BasketSizeElement margin="0 5px 0 0" key={element.id}>
                                                {element.sizeNumber}
                                            </BasketSizeElement>
                                        })
                                    }

                                    <HeadingSecondLvl margin="0 0 0 20px">{`${item.price} грн`}</HeadingSecondLvl>



                                </WrapperFlex>
                            }) : "Ваша корзина пуста"



                    }


                    <HeadingFirstLvl>{`Загальна сума: ${total} грн`}</HeadingFirstLvl>
                    {
                        state.status == 201 && <PurchaseIsSuccessfull>Ваша замовлення оформлене, дякуємо!</PurchaseIsSuccessfull>
                    }


                </AuthenticationSection>
            </MakePurchaseGrid>
        </Container>
    )
}

export default MakePurchase
