import { useEffect } from 'react';
import styled from 'styled-components';
import radialBarChart from './charts/radialBarChart';
import useFetch from './utils/useFetch';
import { useParams } from 'react-router-dom';
import Loader from './utils/Loader';

/**
 * Styled Components
 */

const StyledArticle = styled.article`
  grid-area: Score;
  position: relative;
  width: 258px;
  height: 263px;
`;

const StyledH2 = styled.h2`
  position: absolute;
  margin: 30px;
  font-weight: 500;
  font-size: 15px;
  color: #20253a;
`;

/**
 * @description Used to add, to the DOM, the radial bar chart for daily score
 * @returns {JSX}
 */

function Score() {
  const { userId } = useParams();
  const { userData, isDataLoading, error } = useFetch(userId, 'mainData');
  useEffect(() => {
    !isDataLoading && radialBarChart(userData);
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
        <StyledH2>Score</StyledH2>
        <div id="radial-bar-chart"></div>
      </StyledArticle>
    );
  }
}

export default Score;
