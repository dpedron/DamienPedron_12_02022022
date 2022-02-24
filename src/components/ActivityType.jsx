import { useEffect } from 'react';
import styled from 'styled-components';
import radarChart from './charts/radarChart';

const StyledArticle = styled.article`
  grid-area: ActivityType;
  width: 258px;
  height: 263px;
`;

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
