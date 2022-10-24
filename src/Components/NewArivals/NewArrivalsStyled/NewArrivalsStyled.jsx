import styled from "styled-components";
import { HeadingFirstLvl, WrapperGrid } from "../../../styledComponentsCommon/CommonStyled";
import { devices } from "../../../styledComponentsCommon/DevicesSizes";

export const HeadingPrice = styled(HeadingFirstLvl)`
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);

`;

export const NewArrivalsGrid = styled(WrapperGrid)`
    @media ${devices.laptop} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${devices.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${devices.tabletS} {
        grid-template-columns: repeat(1, 1fr);
    }
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
    margin: ${props => props.margin || "0"};
    background-color: transparent;
`




export const SingleItem = styled.div`
    
`