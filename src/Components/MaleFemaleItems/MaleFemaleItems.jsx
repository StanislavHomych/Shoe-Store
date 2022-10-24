import React from 'react';
import { useEffect, useState } from 'react';
import { Container, HeadingFirstLvl, StyledLink, WrapperFlex, WrapperGrid, HeadingThirdLvl, HeadingSecondLvl } from '../../styledComponentsCommon/CommonStyled';
import { useSelector } from 'react-redux';
import { useItemActions } from '../../Hooks/useDispatch';
import { SingleItem, SingleItemImage, HeadingPrice } from '../NewArivals/NewArrivalsStyled/NewArrivalsStyled';
import {MaleFemaleGrid} from "./MaleFemaleItemsStyled";
import Select from 'react-select';

const MaleFemaleItems = (props) => {


    const state = useSelector(state => state.getItems)
    const { fetchItems, fetchItemsByPriceGrowth, fetchItemsByPriceByDecline } = useItemActions();

    const options = [
        { value: 'increase', label: 'За зростанням' },
        { value: 'decrease', label: 'За спаданням' },
    ]

    const [selectedOption, setSelectedOption] = useState();

    const handleOptionsChange = (choice) => {
        setSelectedOption(choice)
    }


    useEffect(() => {
        if (selectedOption === "increase") {
            fetchItemsByPriceGrowth()
        } else if (selectedOption === "decrease") {
            fetchItemsByPriceByDecline()
        } else {
            fetchItems()
        }
    }, [selectedOption])



    if (state.loading) {
        return <h1>Завантаження</h1>
    }
  
    return (
        <Container>
            <WrapperFlex justify="center" padding="1.5rem 0">
                <HeadingFirstLvl margin="2rem 0">{props.gender === "male" ? "Для чоловіків" : "Для жінок"}</HeadingFirstLvl>
            </WrapperFlex>
            <WrapperFlex justify='start'>
                <HeadingSecondLvl margin="0 20px 0 0">Сортувати:</HeadingSecondLvl>
                <Select
                    value={selectedOption}
                    onChange={(choice) => handleOptionsChange(choice.value)}
                    options={options} />

            </WrapperFlex>
            <MaleFemaleGrid gap="40px">
                {
                    state.items.map((item, index) => {
                        if (item.for === "men" && props.gender === "male") {
                            return <StyledLink key={item.id} to={`/${item.id}`}>
                                <SingleItem>
                                    <SingleItemImage src={item.img} />
                                    <HeadingThirdLvl>{item.brand}</HeadingThirdLvl>
                                    <HeadingThirdLvl margin="0.2rem 0 ">{item.model}</HeadingThirdLvl>
                                    <HeadingPrice>{`${item.price} грн`}</HeadingPrice>
                                </SingleItem>
                            </StyledLink>
                        } else if (item.for === "woman" && props.gender === "female") {
                            return <StyledLink key={item.id} to={`/${item.id}`}>
                                <SingleItem>
                                    <SingleItemImage src={item.img} />
                                    <HeadingThirdLvl>{item.brand}</HeadingThirdLvl>
                                    <HeadingThirdLvl margin="0.2rem 0 ">{item.model}</HeadingThirdLvl>
                                    <HeadingPrice>{`${item.price} грн`}</HeadingPrice>
                                </SingleItem>
                            </StyledLink>
                        }
                    })
                }
            </MaleFemaleGrid>
        </Container>
    )
}

export default MaleFemaleItems
