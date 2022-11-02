import {MdEmail, MdLock} from 'react-icons/md'

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles';

const Login = () => {
  return (<>
      <Header />
      <Container>
        <Column>
          <Title>
              A plataforma para você aprender com experts, dominar as principais tecnologias
                e entrar mais rápido nas empresas desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça o seu cadastro</TitleLogin>
            <SubtitleLogin>Faça o seu login e make the change._</SubtitleLogin>
            <form>
              <Input placeholder="E-mail" leftIcon={<MdEmail />}/>
              <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
              <Button title="Entrar" variant="secondary" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>)
}

export { Login }