import styled from 'styled-components';
import useFetch from './utils/useFetch';
import { useParams } from 'react-router-dom';

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
 * @description Say hello to user, show him that he is on is personnal dashboard
 * @returns {JSX}
 */

function HelloUser() {
  const { userId } = useParams();
  const { userData, isDataLoading, error } = useFetch(userId, 'mainData');

  if (error) {
    return <p>Oooops il y a une erreur, cet élément ne peut être affiché</p>;
  }

  if (isDataLoading) {
    return <p>Loading ...</p>;
  }

  if (!isDataLoading) {
    const userName = userData.data.userInfos.firstName;
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
}

export default HelloUser;
