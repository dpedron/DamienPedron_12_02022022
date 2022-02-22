import { useEffect } from 'react';
import styled from 'styled-components';
import lineChart from './charts/lineChart';

const StyledArticle = styled.article`
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
