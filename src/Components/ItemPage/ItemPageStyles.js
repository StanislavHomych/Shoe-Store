import styled from "styled-components";
import { WrapperFlex, WrapperGrid } from "../../styledComponentsCommon/CommonStyled";
import { devices } from "../../styledComponentsCommon/DevicesSizes";

export let MainItemImage = styled.img`
        width: 100%;
        border-radius: 10px;
    `;

    export let ClickableElement = styled(WrapperFlex)`
        border: 1px solid var(--color-text);
        color: var(--color-text);
        padding: 15px;
        margin-right: 15px;
        cursor: pointer;
        background-color:${props => props.background || "transparent"} ;

        &:hover{
            background-color: var(--color-text);
            color: var(--color-bg);
        };
    `;


export let ItemGrid = styled(WrapperGrid)`
    @media ${devices.tablet}{
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 0;
    }

    @media ${devices.mobileM}{
        margin: 0 0 0 -30px;
    }
`;