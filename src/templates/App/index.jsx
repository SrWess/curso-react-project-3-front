import { Heading } from '../../components/Heading';
import { LogoLink } from '../../components/LogoLink';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Heading>Hello World!</Heading>

        <LogoLink text="teste" link="#"/>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
