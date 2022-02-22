import styled from 'styled-components';
import DailyActivity from './DailyActivity';
import SessionDuration from './SessionDuration';

/**
 * Styled Components
 */

const StyledSection = styled.section`
  margin-top: 70px;
  width: 1124px;
  height: 613px;
`;

function Info() {
  return (
    <StyledSection>
      <DailyActivity />
      <SessionDuration />
    </StyledSection>
  );
}

export default Info;
