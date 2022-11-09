import { MdEmail, MdLock, MdPets } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Container, Title, Column, TitleLogin, SubtitleLogin, Text, Row, Wrapper, CriarText } from './styles';

const HomeCadastro = () => {
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.
                 </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form>
                        <Input placeholder="Nome ompleto" leftIcon={<MdPets />}/>
                        <Input placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Criar minha conta" variant="secondary"/>
                    </form>
                        <CriarText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</CriarText>
                        <Text>Já tenho conta. Fazer login</Text>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { HomeCadastro }