import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useItemActions } from '../../Hooks/useDispatch';
import { useSelector } from 'react-redux';
import {
  Container,
  HeadingFirstLvl,
  WrapperFlex,
  HeadingSecondLvl,
  HeadingThirdLvl,
  WrapperGrid
} from '../../styledComponentsCommon/CommonStyled';
import { SingleItemImage, SingleItem } from '../NewArivals/NewArrivalsStyled/NewArrivalsStyled';
import { AuthButton } from './AccountComonStyles';
import {
  BasketSizeElement,
  EmptyHeading,
  StyledLinkUser,
  ExitButton,
  UserAccountHeadingSecond
} from "./AccountComonStyles"





const UserAccount = () => {

  let goOutOfPage = useNavigate();
  const { deleteUser, setNewAccountFavourites, setNewAccountBasket, deleteElementsInFavourites, deleteElementsInBasket, deleteBasketSizeElement } = useItemActions();
  const state = useSelector((state) => state.logIn);
  const [deletedElement, setDeletedElement] = useState(false)



  useEffect(() => {
    if (state.user === "exited") {
      goOutOfPage("/logIn")
    }
  })

  useEffect(() => {
    deleteElementsInFavourites(deletedElement)
  }, [deletedElement])


  return (
    <Container minHeight="100vh">

      <WrapperFlex margin="20px 0 0 0" padding="1rem 0 2rem 0 ">
        <HeadingFirstLvl>{state.user.name}</HeadingFirstLvl>
        <ExitButton onClick={async () => {
          await setNewAccountFavourites(state.user.id, state.favourites);
          await setNewAccountBasket(state.user.id, state.basket);
          deleteUser();
        }}>вийти</ExitButton>
      </WrapperFlex>
      <WrapperFlex fd="column">
        <HeadingSecondLvl alignSelf="start" >Ваші обрані товари</HeadingSecondLvl>

        <WrapperGrid gtc="repeat(6, 1fr)" gap="20px" padding="1rem 0">

          {

            state.user !== false && "exited" && "404" && state.favourites != false ?
              state.favourites.map((item) => {
                return <SingleItem key={item.id}>
                  <SingleItemImage src={item.img} />
                  <HeadingThirdLvl fw="200">{item.brand}</HeadingThirdLvl>
                  <HeadingThirdLvl fw="200" margin="0.2rem 0 ">{item.model}</HeadingThirdLvl>
                  <WrapperFlex>
                    <HeadingThirdLvl fw="600">{`${item.price} грн`}</HeadingThirdLvl>
                    <AuthButton onClick={() => { setDeletedElement(item) }} height="20px" width="60%">Видалити</AuthButton>
                  </WrapperFlex>
                </SingleItem>

              })

              : <EmptyHeading>Увас немає обраних товарів </EmptyHeading>
          }
        </WrapperGrid>
        <UserAccountHeadingSecond alignSelf="start" >Ваша корзина</UserAccountHeadingSecond>
        {
          state.user !== false && "exited" && "404" && state.basket != false ?
            <StyledLinkUser to="/makePurchase" alignSelf="start">Перейти до оформлення покупок</StyledLinkUser> : null

        }
        <WrapperGrid gtc="repeat(6, 1fr)" gap="20px" padding="1rem 0">

          {

            state.user !== false && "exited" && "404" && state.basket != false ?
              state.basket.map((item, itemIndex) => {
                return <SingleItem key={item.id}>
                  <SingleItemImage src={item.img} />
                  <HeadingThirdLvl fw="200">{item.brand}</HeadingThirdLvl>
                  <HeadingThirdLvl fw="200" margin="0.2rem 0 ">{item.model}</HeadingThirdLvl>
                  <WrapperFlex fd="column" align="flex-start">
                    <HeadingThirdLvl>Ваші обрані розміри: </HeadingThirdLvl>
                    <HeadingThirdLvl fw="300" color="red">{item.size.length !== 0 ? null : 'Розмір не вибрано'}</HeadingThirdLvl>
                    <WrapperGrid gtc="repeat(3, 1fr)" gap="3px" padding="0.5rem 0">
                      {
                        item.size.map((element, sizeIndex) => {
                          return <BasketSizeElement onClick={() => { deleteBasketSizeElement(itemIndex, sizeIndex) }} key={element.id}>
                            {element.sizeNumber}
                          </BasketSizeElement>
                        })
                      }
                    </WrapperGrid>
                  </WrapperFlex>
                  <WrapperFlex>
                    <HeadingThirdLvl fw="600">{`${item.price} грн`}</HeadingThirdLvl>
                    <AuthButton onClick={() => { deleteElementsInBasket(item) }} height="20px" width="60%">Видалити</AuthButton>
                  </WrapperFlex>
                </SingleItem>
              })

              : <EmptyHeading>Ваша корзина пуста </EmptyHeading>
          }
        </WrapperGrid>

      </WrapperFlex>

    </Container>

  )
}

export default UserAccount
