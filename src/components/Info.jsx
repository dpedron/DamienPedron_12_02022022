import styled from 'styled-components';
import DailyActivity from './DailyActivity';

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
    </StyledSection>
  );
}

export default Info;
