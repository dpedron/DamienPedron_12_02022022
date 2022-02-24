import styled from 'styled-components';
import data from '../data/data';

const userName = data.USER_MAIN_DATA[0].userInfos.firstName; // Mocked data used for integration will be replaced by data from API

/**
 * Styled Components
 */

const StyleH1 = styled.h1`
  font-weight: 500;
  font-size: 48px;
  margin: 0;
`;

const StyledSpan = styled.span`
  color: #e60000;
`;

const StyledParagraph = styled.p`
  margin: 20px 0 0 0;
  font-size: 18px;
`;

/**
 * @return (JSX)
 */

function HelloUser() {
  return (
    <div>
      <StyleH1>
        Bonjour <StyledSpan>{userName}</StyledSpan>
      </StyleH1>
      <StyledParagraph>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </StyledParagraph>
    </div>
  );
}

export default HelloUser;
