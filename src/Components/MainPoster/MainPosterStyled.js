import styled from 'styled-components';
import {
    HeadingFirstLvl,
    WrapperFlex
} from '../../styledComponentsCommon/CommonStyled';
import { Link } from "react-router-dom";
import { devices } from '../../styledComponentsCommon/DevicesSizes';
import MainPosterImgSmall from "./../../assets/images/mainPosterImageSmall.jpg"

export let MainPosterContainer = styled(WrapperFlex)`
    width: 100%;
    height: 95vh;
    background-image: url("https://cms-cdn.flightclub.com/1800/56a290c3e1b8-60eb-de11-1f44-0718d38d.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;



    @media ${devices.laptop}{
        height: 75vh;
    }

    @media ${devices.tabletL}{
        background-position: center;

    }
    
    @media ${devices.tablet}{
        background-position: right;

    }

    @media ${devices.mobileL}{
        height: 75vh;
        background-position: left;
        background-image: url(${MainPosterImgSmall});


    }
    

`;

export let MainPosterHeadingFirstLvl = styled(HeadingFirstLvl)`
    font-size: 4rem;
    color: #fff;

    @media ${devices.laptop}{
        font-size: 3.5rem;
        margin: -100px 0 100px 0;

    }

    @media ${devices.tablet}{
        font-size: 2.5rem;
        margin: -100px 0 100px 0;
    }

    @media ${devices.tabletS}{
        font-size: 2rem;
        margin: -100px 0 100px 0;

    }

    @media ${devices.mobileL}{
        font-size: 1.5rem;
    }


`;

export let MainPosterHeadingSecondLvl = styled(MainPosterHeadingFirstLvl)`
    font-size: 3rem;
`;

export let MainPosterLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    padding: ${props => props.padding || "0"};


    @media ${devices.laptop}{
        margin: -100px 0 60px 0;
        font-size: 1.5rem;
    }

    @media ${devices.tablet}{
        margin: -100px 0 70px 0;
        font-size: 1.5rem;
    }

    @media ${devices.tabletS}{
        margin: -110px 0 60px 0;
        font-size: 1rem;
    }

    @media ${devices.mobileL}{
        margin: -110px 0 60px 0;
        font-size: 1rem;
    }



`;
