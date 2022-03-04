import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * Styled Components
 */

const StyledMain = styled.main`
  margin: 45px 107px 0 224px;
  height: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyleH1 = styled.h1`
  font-weight: 500;
  font-size: 48px;
  margin: 50px 0;
`;
const StyleLink = styled(Link)`
  color: #e60000;
  font-weight: 500;
  font-size: 48px;
  margin: 30px 0;
`;

/**
 * @description Login page
 * @returns {JSX}
 */

function Login() {
  return (
    <StyledMain>
      <StyleH1>Bonjour :</StyleH1>
      <StyleLink to="user/12">Karl</StyleLink>
      <StyleLink to="user/18">Cecilia</StyleLink>
    </StyledMain>
  );
}

export default Login;
