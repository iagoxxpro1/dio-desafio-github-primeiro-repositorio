import styled from 'styled-components';

export const Container = styled.div`
    width: 100%; 
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 100%;
    max-width: 420px;
    background-color: #FFFFFF;

    border-radius: 8px;
    padding: 20px;

    flex:1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 42px;
    font-weight: 700;
    color: #81259D;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
export const Spacing = styled.div`
    margin: 10px 0;
`

export const ButtonContainer = styled.button`
    width: 185%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`

export const InputContainer = styled.div`
    width: 185%;
    height: 42px;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;
    
    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background-color: transparent;
        border: 0;
        outline: none;
    }

`