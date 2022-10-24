import styled from "styled-components";
import { WrapperFlex, WrapperGrid } from "../../styledComponentsCommon/CommonStyled";
import { HeadingThirdLvl } from "../../styledComponentsCommon/CommonStyled";
import { devices } from "../../styledComponentsCommon/DevicesSizes";


export let FooterWrapper = styled(WrapperFlex)`
     height:240px;
     background-color: var(--color--footer-bg);
     position: relative;
     bottom: 0;
     width: 100%;
     padding: 2rem;
     margin-top: 2rem;

     @media ${devices.laptopS}{
      height: 300px;
    }

    @media ${devices.tablet}{
      height: 390px;
    }

    @media ${devices.tabletS}{
      height: 410px;
  }

     
`;

export let FooterInput = styled.input.attrs({
  placeholder: "example@gmail.com"
})`
    border: 1px solid #979797;
    background-color: #D3D3CB;
    border-radius: var(--radius);
    width: 50%;
    margin: ${props => props.margin || 0};

    
`;

export let FooterButton = styled.button`
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  font-size: var(--fs-md);
  cursor: pointer;
  margin: ${props => props.margin || "0"};
  border-radius: var(--radius);

`;

export let GridItem = styled(WrapperFlex)`
  @media ${devices.tabletS}{
      margin: 0px;
  }

  @media ${devices.mobileM}{
      margin: 0px 0px 0px -20px;
  }

  @media ${devices.mobileS}{
      margin: 0px 0px 0px -35px;
  }
`;


export let HeadingThirdLvlFooter = styled(HeadingThirdLvl)`
color:#fff;
`;

export let FooterGrid = styled(WrapperGrid)`
  @media ${devices.laptopS}{
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media ${devices.tablet}{
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    margin: 0 0 0 -20px;
  }

  
`;