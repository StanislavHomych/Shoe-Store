import styled from "styled-components";
import {
    WrapperFlex,
    WrapperGrid
} from '../../styledComponentsCommon/CommonStyled';
import { devices } from "../../styledComponentsCommon/DevicesSizes";


export const MakePurchaseGrid = styled(WrapperGrid)`
    grid-template-columns: repeat(2, 1fr);

    @media ${devices.laptop}{
        grid-template-columns: repeat(1, 1fr);
    }

    @media ${devices.mobileL}{
    margin: 0 0 0 -20px;
}


`;


export let CommonInputPurchase = styled.input`
border-radius: var(--radius);
width: 300px;
height: 40px;
border: 1px solid var(--color-text);
background-color: var(--color-bg);
color:var(--color-text);
margin-top: 5px;
&:focus{
    outline: 1px solid ${props => props.borderColor || 'black'}; 
}

@media ${devices.mobileL}{
    width: 250px;
}

`;

export let PurchaseConfirmation = styled.button`
width: 50%;
border: 1px solid var(--color-text);
background-color:${props => props.bgc || "transparent"};
color:var(--color-text);
cursor: pointer;
height: 40px;

`

export let NameInput = styled(CommonInputPurchase).attrs({
    placeholder: "Введіть ваше імя",

})`
`;

export let SecondNameInput = styled(CommonInputPurchase).attrs({
    placeholder: "Введіть вашу фамілію"
})`
`;

export let TownName = styled(CommonInputPurchase).attrs({
    placeholder: "Введіть місто доставки"
})`
`;

export let PostDepartment = styled(CommonInputPurchase).attrs({
    placeholder: "Введіть відділення НП",
    type: "number"
})`
`;

export let PhoneNumber = styled(CommonInputPurchase).attrs({
    placeholder: "Введіть номер телефону",
    type: "tel"
})`
`;

export let AuthenticationSection = styled(WrapperFlex)`
width: 100%;
padding: 2rem;
align-items: flex-start;
`;

export let AuthenticationFlex = styled(WrapperFlex)`
flex-direction: column;
align-items: flex-start;
margin-bottom: 20px;
width: 50%;

`;

export let MakePurchaseImg = styled.img`
width: 50px;
height: 50px;
border-radius: 5px;
margin-right: 20px;
`;

export const BasketSizeElement = styled.div`
text-align: center;
border: 1px solid var(--color-text);
cursor: pointer;
margin: ${props => props.margin || "0"};


`;

export const PurchaseIsSuccessfull = styled.div`
border: 2px solid #00A300;
background-color: #8AFF8A;
color: black;
padding:20px;
font-weight: 400;
margin-top: 20px;
`;
