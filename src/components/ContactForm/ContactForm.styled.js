import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";


export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: flex-start;
    align-items: flex-start;

    margin-bottom: 30px;
    margin-top: 15px;

`

export const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 1.2;
    font-weight: 600;
`

export const Input = styled(Field)`
    display: block;
    width: 300px;
    padding: 10px;
    border: 1px solid #010101;
    border-radius: 5px;
    outline: none;
    margin-bottom: 4px;

    color: #010101;
    font-size: 16px;

    transition: border-color 180ms ease;

    :focus{
        border-color: orange;
    }
`


export const ValidMessage = styled(ErrorMessage)`
    font-size: 12px;
    color: red;
    text-transform: lowercase;
    font-weight: 400;
`

export const Button = styled.button`
        display: block;
        padding: 5px 10px;
        min-width: 120px;

        color: #010101;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 12px;
        text-transform: uppercase;

        background-color: white;
        border: 1px solid #010101;
        border-radius: 4px;

        transition: color 180ms ease, background-color 180ms ease, border-color 18ms ease;

        :hover,
        :focus {
            color: white;
            background-color: orange;
            border-color: orange;
        }
`