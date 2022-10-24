import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { Container } from '../../styledComponentsCommon/CommonStyled';
import { WrapperGrid, WrapperFlex, HeadingFirstLvl, HeadingSecondLvl, HeadingThirdLvl } from '../../styledComponentsCommon/CommonStyled';
import styled from 'styled-components';
import { MainItemImage, ClickableElement, ItemGrid } from './ItemPageStyles';
import { checkElBeforeAddToBasket, checkElBeforeAddToFavourites } from '../../data/itemPageAdditionals';
import { useItemActions } from "./../../Hooks/useDispatch";

let Warning = styled(WrapperFlex)`
    background-color: #f1f1a0;
    border: 3px solid #d2d28a;
    padding: 5px;
`;

const ItemPage = () => {
    const { itemId } = useParams();
    const state = useSelector(state => state.getItems);
    const stateLogin = useSelector(state => state.logIn);
    const { addItemToFavourites, addItemToBasket, chooseSize } = useItemActions();
    const [changeAddToFavouritesBtnText, setChangeAddToFavouritesBtnText] = useState(false);
    const [changeAddToBasketBtnText, setChangeAddToBasketBtnText] = useState(false);



    const trueSizes = useRef([])
    const [showWarning, setShowWarning] = useState(false)

    let updatedElement = (element, rightSizes) => {
        let newElement = { ...element }
        newElement.size = [...rightSizes.current]
        return newElement;

    }

    return (

        <Container minHeight="100vh">
            {
                state.items.filter((element) => { return element.id == itemId }).map((element, index) => {
                    return <Container key={index}>
                        <ItemGrid gap="40px" gtc='repeat(2, 1fr)'>
                            <WrapperFlex align="start" margin="20px 0 0 0" padding="2rem 2rem" fd="column">
                                <MainItemImage src={element.img} alt="item picture" />
                            </WrapperFlex>
                            <WrapperFlex fd="column" justify="flex-start" align="start" padding="2rem 0">
                                <HeadingFirstLvl margin="2rem 0 0.5rem 0">{`${element.brand} ${element.model}`}</HeadingFirstLvl>
                                <HeadingFirstLvl margin="0.5rem 0">{`${element.price} грн`}</HeadingFirstLvl>
                                <HeadingThirdLvl margin="0.5rem 0">{`Артикул: ${element.article}`}</HeadingThirdLvl>
                                <HeadingThirdLvl margin="0.5rem 0">{`Для: ${element.for === "men" ? "чоловіків" : "жінок"}`}</HeadingThirdLvl>
                                <WrapperFlex fd="column" align="start">



                                    {showWarning === true ? <Warning>Виберіть розмір! Перед тим як добавляти в корзину</Warning> : null}



                                    <HeadingSecondLvl margin="1rem 0 1rem 0">Розміри:</HeadingSecondLvl>
                                    <WrapperFlex padding="0.5rem 0">
                                        {
                                            element.size.map((sizeElement) => {
                                                return <ClickableElement onClick={() => {
                                                    if (sizeElement.isChoosen === true) {
                                                        let filteredArray = trueSizes.current.filter(element => element.id !== sizeElement.id);
                                                        trueSizes.current = [...filteredArray]
                                                        chooseSize(element.id, sizeElement.id, false);
                                                    }
                                                    else if (sizeElement.isChoosen === false) {

                                                        chooseSize(element.id, sizeElement.id, true)
                                                        trueSizes.current.push(sizeElement)
                                                    }
                                                }}
                                                    background={sizeElement.isChoosen && "#8AFF8A"}
                                                    key={sizeElement.id}>
                                                    {sizeElement.sizeNumber}
                                                </ClickableElement>
                                            })
                                        }
                                    </WrapperFlex>
                                    <WrapperFlex margin="1rem 0">
                                        <ClickableElement onClick={() => {
                                            checkElBeforeAddToFavourites(element, stateLogin.favourites, addItemToFavourites);
                                            setChangeAddToFavouritesBtnText(true)
                                        }}>{changeAddToFavouritesBtnText ? 'Додано до обраного' : 'Додати до обраного'}</ClickableElement>
                                        <ClickableElement disabled onClick={() => {
                                            if (trueSizes.current.length == 0) {
                                                setShowWarning(true)
                                            }
                                            else {
                                                checkElBeforeAddToBasket(updatedElement(element, trueSizes), stateLogin.basket, addItemToBasket);
                                                setChangeAddToBasketBtnText(true)
                                                setShowWarning(false)
                                            }
                                        }}>{changeAddToBasketBtnText ? "Додано в корзину" : 'Додати в корзину'}</ClickableElement>
                                    </WrapperFlex>
                                </WrapperFlex>
                            </WrapperFlex>
                        </ItemGrid>
                    </Container>
                })
            }
        </Container>
    )
}

export default ItemPage
