import styled from 'styled-components';
import KeyElement from './KeyElement';
import data from '../data/data';
import energy from '../assets/energy.svg';
import chicken from '../assets/chicken.svg';
import apple from '../assets/apple.svg';
import burger from '../assets/burger.svg';

const keyData = Object.values(data.USER_MAIN_DATA[0].keyData);

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
 * @return (JSX)
 */

function KeyFigures() {
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

export default KeyFigures;
