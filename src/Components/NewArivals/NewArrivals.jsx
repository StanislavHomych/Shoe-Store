import React, { useEffect, useState } from 'react'
import {
    Container,
    WrapperFlex,
    WrapperGrid,
    HeadingFirstLvl,
    HeadingThirdLvl} from "./../../styledComponentsCommon/CommonStyled";
import {
    LoadMoreBtn,
    SingleItem,
    SingleItemImage,
    HeadingPrice
} from './NewArrivalsStyled/NewArrivalsStyled';
import { useItemActions } from "./../../Hooks/useDispatch";
import { useSelector } from 'react-redux';







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
    if (state.error) {
        console.log(state.error)
    }

    return <Container>
        <WrapperFlex justify="center" padding="1.5rem 0">
            <HeadingFirstLvl>Нові надходження</HeadingFirstLvl>
        </WrapperFlex>
        <WrapperGrid gap="40px">
            {
                state.items.map((item, index) => {
                    if (item.newArrivals && index <= numberOfItems) {
                        return <SingleItem key={item.id}>
                            <SingleItemImage src={item.img} />
                            <HeadingThirdLvl>{item.brand}</HeadingThirdLvl>
                            <HeadingThirdLvl margin="0.2rem 0 ">{item.model}</HeadingThirdLvl>
                            <HeadingPrice>{`${item.price} грн`}</HeadingPrice>
                        </SingleItem>
                    }
                    else {
                        return null
                    }
                })
            }

        </WrapperGrid>
        <WrapperFlex justify="center" padding="2rem 0">
            <LoadMoreBtn disp={state.items.length < numberOfItems ? "none" : "block"} onClick={() => { setNumbersOfItems(numberOfItems + 4) }}>
                Завантажити ще
            </LoadMoreBtn>
        </WrapperFlex>
    </Container>
}

export default NewArrivalsComponent
