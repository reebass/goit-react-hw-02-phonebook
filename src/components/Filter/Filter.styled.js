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
    border: 1px solid #54585D;
    outline: none;
    border-radius: 4px;
    color: #FEFEFF;
    font-size: 14px;
    background-color: #54585D;

    transition: border-color 180ms ease;

    :focus{
        border-color: rgb(1,123,255);
    }
`