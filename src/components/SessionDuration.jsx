import { useEffect } from 'react';
import styled from 'styled-components';
import lineChart from './charts/lineChart';

/**
 * Styled Components
 */

const StyledArticle = styled.article`
  grid-area: SessionDuration;
  position: relative;
  width: 258px;
  height: 263px;
`;

const StyledH2 = styled.h2`
  position: absolute;
  margin: 34px;
  font-weight: 500;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
`;

function SessionDuration() {
  useEffect(() => {
    lineChart();
  }, []);

  /**
   * @description Used to add, to the DOM, the line chart for session duration
   * @return (JSX)
   */

  return (
    <StyledArticle>
      <StyledH2>
        Durée moyenne des <br /> sessions
      </StyledH2>
      <div id="line-chart"></div>
    </StyledArticle>
  );
}

export default SessionDuration;
