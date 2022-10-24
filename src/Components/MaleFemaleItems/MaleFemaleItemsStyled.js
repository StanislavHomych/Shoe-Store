import styled from "styled-components";
import { WrapperGrid } from "../../styledComponentsCommon/CommonStyled";
import { devices } from "../../styledComponentsCommon/DevicesSizes";

export let MaleFemaleGrid = styled(WrapperGrid)`
    margin-top: 30px;
    @media ${devices.laptop}{
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${devices.tablet}{
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${devices.mobileL}{
        grid-template-columns: repeat(1, 1fr);
    }

`;