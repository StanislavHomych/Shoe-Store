import styled from "styled-components";
import { HeadingFirstLvl } from "../../../styledComponentsCommon/CommonStyled";

export const HeadingPrice = styled(HeadingFirstLvl)`
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);

`;

export const SingleItemImage = styled.img.attrs({
    alt: "shoe image"
})`
    width: 100%;
    height: 75%;
    object-fit: cover;
    object-position: 100% 0%;
    border-radius: var(--radius);
    
`;

export const LoadMoreBtn = styled.button`
    width: 200px;
    height: 50px;
    border: 2px solid var(--color-text);
    color: var(--color-text);
    font-size: var(--fs-md);
    cursor: pointer;
    display: ${props => props.disp || "block"};
`



export const SingleItem = styled.div`
    
`