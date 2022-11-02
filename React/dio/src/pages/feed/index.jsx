import { Link } from "react-router-dom";

import bannerImage from "../../assets/banner.png";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import {Container, Column, Title, TitleHightLight} from './styles';

const Feed = () => {
  return (<>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHightLight># RANKING 5 TOP DA SEMANA</TitleHightLight>
          <UserInfo percentual={35} nome="Iago Rubiar" image="https://avatars.githubusercontent.com/u/82056475?s=400&u=1e038caf1051f39a67126f488d132dbeb387f588&v=4" />
          <UserInfo percentual={55} nome="Iago Rubiar" image="https://avatars.githubusercontent.com/u/82056475?s=400&u=1e038caf1051f39a67126f488d132dbeb387f588&v=4" />
          <UserInfo percentual={25} nome="Iago Rubiar" image="https://avatars.githubusercontent.com/u/82056475?s=400&u=1e038caf1051f39a67126f488d132dbeb387f588&v=4" />
          <UserInfo percentual={85} nome="Iago Rubiar" image="https://avatars.githubusercontent.com/u/82056475?s=400&u=1e038caf1051f39a67126f488d132dbeb387f588&v=4" />
          <UserInfo percentual={15} nome="Iago Rubiar" image="https://avatars.githubusercontent.com/u/82056475?s=400&u=1e038caf1051f39a67126f488d132dbeb387f588&v=4" />
        </Column>
      </Container>
    </>)
}

export { Feed }