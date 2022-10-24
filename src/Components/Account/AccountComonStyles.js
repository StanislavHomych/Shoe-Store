import styled from "styled-components";
import { WrapperFlex, HeadingSecondLvl } from "../../styledComponentsCommon/CommonStyled";
import { devices } from '../../styledComponentsCommon/DevicesSizes';
import { StyledLink } from "../../styledComponentsCommon/CommonStyled";


export const AuthSection = styled(WrapperFlex)`
    width:300px;
    height: 400px;
    border:1px solid var(--color-text);
    padding: 1rem;
    margin-top: 2rem 
`;

export const InputElement = styled.input.attrs({
    type: "text",
    placeholder: "Введіть адресу електронної пошти...",
})`
     width: 100%;
     height:40px;
     margin:0 0 20px 0;
     border: 1px solid var(--color-text);
     background-color: var(--color-bg);
     color:var(--color-text);
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
    width:${props => props.width || '100%'};
    height:${props => props.height || '40px'};
    font-weight:var(--fw-normal);
    background-color:transparent;
    color: var(--color-text);
    border:1px solid var(--color-text);
    cursor: pointer;
    margin-top: ${props => props.marginTop || "0"}
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
margin: 10px 0 10px 0;

`;


export const BasketSizeElement = styled.div`
  text-align: center;
  border: 1px solid var(--color-text);
  cursor: pointer;

  &:hover{
    background-color: red;

  }
`;

export const EmptyHeading = styled.div`
  color: var(--color-text);
  width: 250px;
`;

export const StyledLinkUser = styled(StyledLink)`
  align-self:${props => props.alignSelf || null} ;
  width: 350px;
  margin-top: 20px;
  font-weight:var(--fw-normal);
  background-color:transparent;
  color: var(--color-text);
  border:1px solid var(--color-text);
  cursor: pointer;
  padding: 20px;

  @media ${devices.mobileL}{
    width: 250px;
 
  }
`;

export const ExitButton = styled.button`
  border: 1px solid black;
  background-color: transparent;
    font-weight: var(--fw-normal);
    border: 1px solid var(--color-text);
    color: var(--color-text);
    padding: 5px;
      
`;

export const UserAccountHeadingSecond = styled(HeadingSecondLvl)`


@media ${devices.laptopL}{
  margin: 30px 0 0 0;
}

@media ${devices.laptop}{
  margin: 30px 0 0 0;
}

`;