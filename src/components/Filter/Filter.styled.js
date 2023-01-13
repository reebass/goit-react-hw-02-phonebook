import styled from "styled-components";

export const Label = styled.label`
    font-size: 16px;
    margin-top: 15px;
`

export const InputFilter = styled.input`
    display: block;
    width: 250px;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 20px;
    border: 1px solid #010101;
    outline: none;
    border-radius: 4px;

    transition: border-color 180ms ease;

    :focus{
        border-color: orange;
    }
`