import styled from 'styled-components';
import HelloUser from '../components/HelloUser';
import Info from '../components/Info';

const StyledMain = styled.main`
  margin: 65px 0 0 226px;
`;

function Home() {
  return (
    <StyledMain>
      <HelloUser />
      <Info />
    </StyledMain>
  );
}

export default Home;
