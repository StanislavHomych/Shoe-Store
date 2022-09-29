import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 2rem;
`;


export const Wrapper = styled.div`
display: ${props => props.disp || "flex"};
justify-content: ${props => props.justify || "space-between"};
align-items: ${props => props.align || "center"};
padding: ${props => props.padding || "0"};
`;