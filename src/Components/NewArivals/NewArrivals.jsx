import React, { useEffect, useState } from 'react'
import {
    Container,
    WrapperFlex,
    WrapperGrid,
    HeadingFirstLvl,
    HeadingThirdLvl,
    StyledLink
} from "./../../styledComponentsCommon/CommonStyled";
import {
    LoadMoreBtn,
    SingleItem,
    SingleItemImage,
    HeadingPrice,
    NewArrivalsGrid
} from './NewArrivalsStyled/NewArrivalsStyled';
import { useItemActions } from "./../../Hooks/useDispatch";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';







const NewArrivalsComponent = () => {

    const state = useSelector(state => state.getItems)
    const { fetchItems } = useItemActions();

    const [numberOfItems, setNumbersOfItems] = useState(7)

    useEffect(() => {
        fetchItems()
    }, [])

    if (state.loading) {
        return <h1>Завантаження</h1>
    }
  

    return <Container>
        <WrapperFlex justify="center" padding="1.5rem 0">
            <HeadingFirstLvl margin="2rem 0">Нові надходження</HeadingFirstLvl>
        </WrapperFlex>
        <NewArrivalsGrid gap="40px">
            {
                state.items.map((item, index) => {
                    if (item.newArrivals && index <= numberOfItems) {
                        return <StyledLink key={item.id} to={`/${item.id}`}>
                            <SingleItem >
                                <SingleItemImage src={item.img} />
                                <HeadingThirdLvl>{item.brand}</HeadingThirdLvl>
                                <HeadingThirdLvl margin="0.2rem 0 ">{item.model}</HeadingThirdLvl>
                                <HeadingPrice>{`${item.price} грн`}</HeadingPrice>
                            </SingleItem>
                        </StyledLink>
                    }
                    else {
                        return null
                    }
                })
            }

        </NewArrivalsGrid>
        <WrapperFlex justify="center" padding="2rem 0">
            <LoadMoreBtn margin="2rem 0" disp={state.items.length < numberOfItems ? "none" : "block"} onClick={() => { setNumbersOfItems(numberOfItems + 4) }}>
                Завантажити ще
            </LoadMoreBtn>
        </WrapperFlex>
    </Container>
}

export default NewArrivalsComponent
