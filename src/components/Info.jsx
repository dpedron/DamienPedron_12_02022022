import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ActivityType from './ActivityType';
import DailyActivity from './DailyActivity';
import KeyFigures from './KeyFigures';
import Score from './Score';
import SessionDuration from './SessionDuration';
import useFetch from './utils/useFetch';

/**
 * Styled Components
 */

const StyledSection = styled.section`
  width: 1124px;
  height: 613px;
  display: grid;
  grid-template-areas:
    'DailyActivity DailyActivity DailyActivity KeyFigures'
    'SessionDuration ActivityType Score KeyFigures';
  @media (max-width: 1330px) {
    width: 865px;
    grid-template-areas:
      'DailyActivity DailyActivity DailyActivity'
      'SessionDuration ActivityType Score'
      'KeyFigures KeyFigures KeyFigures';
  }
`;

/**
 * @description This section display all charts about user's activities
 * @returns {JSX}
 */

function Info() {
  const { userId } = useParams();
  const { isLoading, data } = useFetch(userId, 'activity');

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (!isLoading) {
    return (
      <StyledSection>
        <DailyActivity data={data} />
        <SessionDuration />
        <ActivityType />
        <Score />
        <KeyFigures />
      </StyledSection>
    );
  }
}

export default Info;
