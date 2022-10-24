import React from 'react'
import { Container, WrapperFlex } from '../../styledComponentsCommon/CommonStyled'
import {MainPosterHeadingFirstLvl,MainPosterHeadingSecondLvl, MainPosterLink, MainPosterContainer } from "./MainPosterStyled"



const MainPosterComponent = () => {
    return (
        <MainPosterContainer  >
            <Container height="100%">
                <WrapperFlex margin="70px 0" fd="column" align="start" justify="start" >
                    <MainPosterHeadingFirstLvl>
                        NIKE DUNK LOW RETRO QS
                    </MainPosterHeadingFirstLvl>
                    <MainPosterHeadingSecondLvl>
                        'ARGON' 2022
                    </MainPosterHeadingSecondLvl>
                    <MainPosterLink to={`/11`} padding="2rem 0">Shop Now</MainPosterLink>
                </WrapperFlex>
            </Container>
        </MainPosterContainer>

    )
}

export default MainPosterComponent
