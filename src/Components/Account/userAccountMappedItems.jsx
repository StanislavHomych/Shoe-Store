import React from 'react';
import { WrapperGrid, HeadingThirdLvl, WrapperFlex } from '../../styledComponentsCommon/CommonStyled';
import { SingleItem, SingleItemImage } from '../NewArivals/NewArrivalsStyled/NewArrivalsStyled';
import { useSelector } from 'react-redux';
import { AuthButton } from './AccountComonStyles';

const UserAccountMappedItems = ({whatToRender}) => {
    
    const state = useSelector((state) => state.logIn);


    return (
        <WrapperGrid gtc="repeat(6, 1fr)" gap="20px" padding="1rem 0">

            {
                
                state.user !== false && "exited" && "404"  ?
                state.favourites.map((item) => {
                        return <SingleItem key={item.id}>
                            <SingleItemImage src={item.img} />
                            <HeadingThirdLvl fw="200">{item.brand}</HeadingThirdLvl>
                            <HeadingThirdLvl fw="200" margin="0.2rem 0 ">{item.model}</HeadingThirdLvl>
                            <WrapperFlex>
                                <HeadingThirdLvl fw="600">{`${item.price} грн`}</HeadingThirdLvl>
                                <AuthButton height="20px" width="60%">Видалити</AuthButton>
                            </WrapperFlex>
                        </SingleItem>
                    
                    })
                 
                     : <div>Увійдіть,або зараєструйтеся щоб додавати товари в корзину </div>
            }
        </WrapperGrid>
    )
}

export default UserAccountMappedItems
