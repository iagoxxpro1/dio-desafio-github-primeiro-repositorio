import logo from '../../assets/logo.png';

import {
//    BuscarInputContainer,
    Container,
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
            </Container>
        </Wrapper>
    )
}

export {Header}