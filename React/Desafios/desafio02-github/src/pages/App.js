
import gitLogo from '../assets/gitlogo-47.png'
import Input from '../components/input';
import Button from '../components/button';
import ItemRepo from '../components/ItemRepo';

import { Container } from './styles';

function App() {

//  const [repos, setRepos] = useState([]);

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
    <Input/>
    <Button/>
    <ItemRepo/>
    </Container>
  );
}

export default App;
