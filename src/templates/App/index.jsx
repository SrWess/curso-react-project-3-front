import { Heading } from '../../components/Heading';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Heading>Hello World!</Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
