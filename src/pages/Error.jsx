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
 * @description Error page
 * @returns {JSX}
 */

function Error() {
  return (
    <StyledMain>
      <StyleH1>Oooops, une erreur s'est produite.</StyleH1>
      <StyleLink to="/">Revenir à l'accueil</StyleLink>
    </StyledMain>
  );
}

export default Error;
