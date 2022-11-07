
import { Header } from "../../components/Header";

import {Container, TextContent, Title, TitleHightLight} from './styles';

const Home = () => {
    return (<>
        <Header />
        <Container>
          <div>
            <Title>
              <TitleHightLight>
                <br />
              </TitleHightLight>
            </Title>
            <TextContent>
            </TextContent>
          </div>
        </Container>
      </>)
    }
  
  export {Home};
  