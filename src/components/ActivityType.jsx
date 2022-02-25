import { useEffect } from 'react';
import styled from 'styled-components';
import radarChart from './charts/radarChart';

/**
 * Styled Components
 */

const StyledArticle = styled.article`
  grid-area: ActivityType;
  width: 258px;
  height: 263px;
`;

/**
 * @description Used to add, to the DOM, the radar chart that show the proportion of each type of activity
 * @return (SVG)
 */

function ActivityType() {
  useEffect(() => {
    radarChart();
  }, []);

  return (
    <StyledArticle>
      <div id="radar-chart"></div>
    </StyledArticle>
  );
}

export default ActivityType;
