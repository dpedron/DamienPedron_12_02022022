import styled from 'styled-components';
import ActivityType from './ActivityType';
import DailyActivity from './DailyActivity';
import KeyFigures from './KeyFigures';
import Score from './Score';
import SessionDuration from './SessionDuration';

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
 * @return (JSX)
 */

function Info() {
  return (
    <StyledSection>
      <DailyActivity />
      <SessionDuration />
      <ActivityType />
      <Score />
      <KeyFigures />
    </StyledSection>
  );
}

export default Info;
