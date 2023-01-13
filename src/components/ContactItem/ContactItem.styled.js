import styled from "styled-components";

export const Button = styled.button`
    height: 100%;
    width: 130px;
    padding: 5px;
    box-sizing: border-box;
    border: none;
    border-left: 1px solid #010101;

    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;

    color: orange;

    transition: color 180ms ease, border-color 180ms ease, background-color 180ms ease;

    :hover,
    :focus {
        color: white;
        border-color: orange;
        background-color: orange;
    }

    
`