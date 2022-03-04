import styled from 'styled-components';
import KeyElement from './KeyElement';
import energy from '../assets/energy.svg';
import chicken from '../assets/chicken.svg';
import apple from '../assets/apple.svg';
import burger from '../assets/burger.svg';
import { useParams } from 'react-router-dom';
import useFetch from './utils/useFetch';
import Loader from './utils/Loader';

/**
 * Styled Components
 */

const StyledArticle = styled.article`
  margin-top: 50px;
  grid-area: KeyFigures;
  min-width: 258px;
  height: 613px;
  @media (max-width: 1330px) {
    display: flex;
    height: 124px;
    width: 835px;
  }
`;

/**
 * @description Display all key figures (user consumption in: calories, proteins, carbohydrates, fats)
 * @returns {JSX}
 */

function KeyFigures() {
  const { userId } = useParams();
  const { userData, isDataLoading, error } = useFetch(userId, 'mainData');

  if (error) {
    return <p>Oooops il y a une erreur, cet élément ne peut être affiché</p>;
  }

  if (isDataLoading) {
    return <Loader></Loader>;
  }

  if (!isDataLoading) {
    const keyData = Object.values(userData.data.keyData);
    return (
      <StyledArticle>
        <KeyElement
          iconSrc={energy}
          color="rgba(255, 0, 0, 0.07)"
          data={keyData[0]}
          unit="kCal"
          type="Calories"
        />
        <KeyElement
          iconSrc={chicken}
          color="rgba(74, 184, 255, 0.1)"
          data={keyData[1]}
          unit="g"
          type="Proteines"
        />
        <KeyElement
          iconSrc={apple}
          color="rgba(249, 206, 35, 0.1)"
          data={keyData[2]}
          unit="g"
          type="Glucides"
        />
        <KeyElement
          iconSrc={burger}
          color="rgba(253, 81, 129, 0.1)"
          data={keyData[3]}
          unit="g"
          type="Lipides"
        />
      </StyledArticle>
    );
  }
}

export default KeyFigures;
