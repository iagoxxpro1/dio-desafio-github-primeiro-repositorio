import React from 'react';

import logo from '../../assets/logo.png';
import {Button} from '../Button';

import {
//    BuscarInputContainer,
    Container,
    MenuRight,
//    Input,
//    Menu,
//   MenuRight,
    Row,
//  UserPicture,
    Wrapper
} from './styles';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="logo da dio" />
                </Row>
                <Row>
                    <>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                    </>
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}