import React, { useEffect } from 'react';
import barChart from './charts/barChart';
import styled from 'styled-components';
import useFetch from './utils/useFetch';
import { useParams } from 'react-router-dom';
import Loader from './utils/Loader';

// Styled Components

const StyledArticle = styled.article`
  grid-area: DailyActivity;
  position: relative;
  margin: 50px 0 30px 0;
  width: 835px;
  height: 320px;
`;

const StyledH2 = styled.h2`
  position: absolute;
  color: #20253a;
  font-weight: 500;
  font-size: 15px;
  margin: 24px 0 0 32px;
`;

const StyledDiv = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  margin: 24px 32px 0 0;
`;

const StyledLegend = styled.p`
  display: flex;
  color: #74798c;
  font-weight: 500;
  font-size: 14px;
  margin: 0 0 0 32px;
  align-items: center;
`;

const StyledPoint = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.primary ? '#282D30' : '#E60000')};
  margin-right: 10px;
`;

/**
 * @description Used to add, to the DOM, the bar chart for daily activity
 * @returns {SVG}
 */

function DailyActivity() {
  const { userId } = useParams();
  const { userData, isDataLoading, error } = useFetch(userId, 'activity');
  useEffect(() => {
    !isDataLoading && barChart(userData);
  }, [userData, isDataLoading]);

  if (error) {
    return <p>Oooops il y a une erreur, cet élément ne peut être affiché</p>;
  }

  if (isDataLoading) {
    return <Loader></Loader>;
  }

  if (!isDataLoading) {
    return (
      <StyledArticle>
        <StyledH2>Activité quotidienne</StyledH2>
        <StyledDiv>
          <StyledLegend>
            <StyledPoint primary />
            Poids (kg)
          </StyledLegend>
          <StyledLegend>
            <StyledPoint />
            Calories brûlées (kCal)
          </StyledLegend>
        </StyledDiv>
        <div id="bar-chart"></div>
      </StyledArticle>
    );
  }
}
export default DailyActivity;
