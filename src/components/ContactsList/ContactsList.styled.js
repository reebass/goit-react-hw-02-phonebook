import styled from "styled-components";

export const List = styled.ul`
    width: 400px;

    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    gap: 7px;
`

export const Item = styled.li`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-between;

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;

    padding-left: 10px;
    border: 1px solid #010101;
    background-color: #f1f1f1;
    border-radius: 4px;

    overflow: hidden;

`