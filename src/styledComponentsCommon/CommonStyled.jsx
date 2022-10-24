import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 2rem;
    height:${props => props.height || "auto"};
    min-height:${props => props.minHeight || "auto"};

`;



export const WrapperFlex = styled.div`
    display: ${props => props.disp || "flex"};
    justify-content: ${props => props.justify || "space-between"};
    flex-direction: ${props => props.fd || "row"};
    align-items: ${props => props.align || "center"};
    padding: ${props => props.padding || "0"};
    padding: ${props => props.margin || "0"};
    box-shadow: ${props => props.shadow || "0"};
    margin:${props => props.margin || "0"};
    background-color: ${props => props.bck || null};

    
`;

export const WrapperGrid = styled.div`
    display: ${props => props.disp || "grid"};
    grid-template-columns: ${props => props.gtc || "repeat(4, 1fr)"};
    padding: ${props => props.padding || "0"};
    grid-gap: ${props => props.gap || "0"};
    width: 100%;
`;


export const HeadingFirstLvl = styled.h1`
    font-size: var(--fs-lg);
    font-weight: var(--fw-bold);
    margin: ${props => props.margin || 0};
    align-self: ${props => props.alignSelf || 'auto'};
    color: ${props => props.color || 'var(--color-text)'}; 
    
    
`;

export const HeadingSecondLvl = styled(HeadingFirstLvl)`
    font-size: var(--fs-md);
    font-weight: var(--fw-normal);

`;

export const HeadingThirdLvl = styled(HeadingFirstLvl)`
    font-size: var(--fs-sm);
    font-weight:${props => props.fw || 'var(--fw-normal)'} ;

`;

export let WrapperMain = styled.div`
  position: relative;
  min-height: 100vh;
`;


export let StyledLink = styled(Link)`
    text-decoration: none;
`;