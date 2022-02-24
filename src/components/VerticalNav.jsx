import yoga from '../assets/yoga.png';
import swim from '../assets/swim.png';
import bike from '../assets/bike.png';
import bodybuilding from '../assets/bodybuilding.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * Styled Components
 */

const StyledAside = styled.aside`
  position: absolute;
  width: 117px;
  min-height: 100%;
  background-color: #020203;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1330px) {
    height: 120%;
  }
`;
const StyledNav = styled.nav`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const StyledLink = styled(Link)`
  width: 64px;
  height: 64px;
  margin-bottom: 20px;
  pointer-events: none; /* In the current version of the project Link are disabled */
`;

const StyledParagraph = styled.p`
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  color: white;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 59px;
`;

/**
 * @description Left side navigation bar
 * @return (JSX)
 */

function VerticalNav() {
  return (
    <StyledAside>
      <StyledNav>
        <StyledLink to="">
          <img alt="yoga" src={yoga}></img>
        </StyledLink>
        <StyledLink to="">
          <img alt="swim" src={swim}></img>
        </StyledLink>
        <StyledLink to="">
          <img alt="bike" src={bike}></img>
        </StyledLink>
        <StyledLink to="">
          <img alt="bodybuilding" src={bodybuilding}></img>
        </StyledLink>
      </StyledNav>
      <StyledParagraph>Copyright, SportSee 2020</StyledParagraph>
    </StyledAside>
  );
}

export default VerticalNav;
