import { useEffect } from 'react';
import styled from 'styled-components';
import lineChart from './charts/lineChart';
import useFetch from './utils/useFetch';
import { useParams } from 'react-router-dom';
import Loader from './utils/Loader';

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

/**
 * @description Used to add, to the DOM, the line chart for session duration
 * @returns {JSX}
 */

function SessionDuration() {
  const { userId } = useParams();
  const { userData, isDataLoading, error } = useFetch(
    userId,
    'averageSessions'
  );
  useEffect(() => {
    !isDataLoading && lineChart(userData);
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
        <StyledH2>
          Durée moyenne des <br /> sessions
        </StyledH2>
        <div id="line-chart"></div>
      </StyledArticle>
    );
  }
}

export default SessionDuration;
