import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

/**
 * Styled Components
 */

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #020203;
  height: 91px;
  padding: 0 87px 0 29px;
`;
const StyledImg = styled.img`
  width: 178px;
  height: 61px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: white;
  ${(props) =>
    props.$isDisabled && // In the current version of the project Link are disabled
    `
    pointer-events: none;
    `}
`;

/**
 * Top navigation bar
 * @function Header
 * @returns (JSX)
 */

function Header() {
  return (
    <StyledHeader>
      <StyledImg alt="" src={logo} />
      <StyledLink to="">Accueil</StyledLink>
      <StyledLink to="" $isDisabled>
        Profil
      </StyledLink>
      <StyledLink to="" $isDisabled>
        Réglage
      </StyledLink>
      <StyledLink to="" $isDisabled>
        Communauté
      </StyledLink>
    </StyledHeader>
  );
}

export default Header;
