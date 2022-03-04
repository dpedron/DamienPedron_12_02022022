import { useEffect } from 'react';
import styled from 'styled-components';
import radarChart from './charts/radarChart';
import useFetch from './utils/useFetch';
import { useParams } from 'react-router-dom';
import Loader from './utils/Loader';

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
 * @returns {SVG}
 */

function ActivityType() {
  const { userId } = useParams();
  const { userData, isDataLoading, error } = useFetch(userId, 'performance');
  useEffect(() => {
    !isDataLoading && radarChart(userData);
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
        <div id="radar-chart"></div>
      </StyledArticle>
    );
  }
}

export default ActivityType;
