import styled from 'styled-components';
import HelloUser from '../components/HelloUser';
import Info from '../components/Info';

/**
 * Styled Components
 */

const StyledMain = styled.main`
  margin: 45px 107px 0 224px;
  height: 100%;
  align-self: center;
`;

/**
 * @description User's dashboard page
 * @returns {JSX}
 */

function Home() {
  return (
    <StyledMain>
      <HelloUser />
      <Info />
    </StyledMain>
  );
}

export default Home;
