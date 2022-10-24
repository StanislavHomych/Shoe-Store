import { StyledLink } from "./../../styledComponentsCommon/CommonStyled";
import styled from 'styled-components';
import { WrapperFlex } from "./../../styledComponentsCommon/CommonStyled";
import { devices } from "../../styledComponentsCommon/DevicesSizes";







export let SearchBarInput = styled.input.attrs({
    placeholder: "Пошук"
})`
     color: var(--color-text); 
     background-color :transparent;
     outline: 1px solid var(--color-text);
     border-radius: var(--radius);
     height: 30px;
     width: 200px;
    
`

export let SearchBarLink = styled(StyledLink)`
        padding:${props => props.padding || "0"};
        margin:${props => props.margin || "0"};
        color: var(--color-text);

        &:hover{
            text-decoration: underline;
        }
`;



export let Dropdown = styled(WrapperFlex)`
   position :absolute ;
   width: 450px;
   top:110px;
   right: 30px;
   background-color: var(--color-bg);
   border-radius: 0 0 10px 10px;
   display: ${props => props.display || null};

   @media ${devices.tabletS}{
        top: 160px;
        width: 100%;
        right: 0;
    }
`;

export let SearchDropdownLink = styled(StyledLink)`
    color:var(--color-text);
    padding: 10px;

    &:hover{
            text-decoration: underline;
        }
`;

export let SearchDropdownImg = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
    border-radius: 5px;
`;


export let SearchBarMainFlex = styled(WrapperFlex)`
    @media ${devices.tabletS}{
        flex-direction: column;
        padding-bottom: 20px;
        align-items: flex-start;
    }
`;