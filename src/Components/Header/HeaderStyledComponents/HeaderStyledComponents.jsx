import styled from "styled-components";



export const HeaderEl = styled.header`
box-shadow: var(--shadow);
`;





export const Title = styled.a.attrs({
    href: "/"
})`
    color: var(--color-text);
    font-size: var(--fs-sm); 
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

export const ListOfOptions = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
`;


export const ModeToggleStyled = styled.li`
    height: 20px;
    width: 20px;
    cursor: pointer;
    margin-left: 15px;
    

`;

export const ModeToggleDarkStyled = styled(ModeToggleStyled)`
    color: #FFF;
   
`;