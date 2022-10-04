import styled from "styled-components";
import { WrapperFlex } from "../../styledComponentsCommon/CommonStyled";

export const AuthSection = styled(WrapperFlex)`
    width:300px;
    height: 350px;
    border:1px solid var(--color-text);
`;

export const InputElement = styled.input.attrs({
    type: "text",
    placeholder: "Введіть адресу електронної пошти..."
})`
     width: 100%;
     height:40px;
     border: 1px solid ${props => props.borderColor || 'black'};
    &:focus{
        outline: 1px solid ${props => props.borderColor || 'black'}; 
    }
`;

export const InputElementPassword = styled(InputElement).attrs({
    type: "password",
    placeholder: "Введіть пароль...",


})`

   
`;

export const InputElementUserName = styled(InputElement).attrs({
    type: "text",
    placeholder: "Введіть ваше ім'я"
})`
     
`;

export const AuthButton = styled.button.attrs({
    type: "button"
})`
    width:100%;
    height:40px;
    font-weight:var(--fw-normal);
    background-color:transparent;
    color: var(--color-text);
    border:1px solid var(--color-text);
    cursor: pointer;

`;

export const GoToAnotherAuthOption = styled(AuthButton).attrs({
    type: "button"
})`
  
`;


export const SuccesRegInfo = styled(WrapperFlex)`
width: 100%;
color: #049504 ;
background-color: #12e312a4;
border: 1px solid #007500;
padding: 0.4rem;
font-weight:var(--fw-light);
text-align: center;
font-size: var(--fs-sm);

`;

export const ErrorRegInfo = styled(SuccesRegInfo)`
width: 100%;
color: #A30000 ;
background-color: #FF8A8A;
border: 1px solid #750000;
padding: 0.4rem;
font-weight:var(--fw-light);
text-align: center;
font-size: var(--fs-sm);

`;