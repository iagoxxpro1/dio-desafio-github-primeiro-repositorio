import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from './styles';

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://hermes.digitalinnovation.one/tracks/cover/8c498256-7acb-4b81-b001-41be4bd1bf47.png"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/82056475?s=400&u=1e038caf1051f39a67126f488d132dbeb387f588&v=4"/>
          <div>
            <h4>Iago Rubiar</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito o curso de HTML e CSS no bootcamp DIO do global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
              <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }