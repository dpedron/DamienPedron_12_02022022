import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 258px;
  height: 124px;
  background-color: #fbfbfb;
  border-radius: 5px;
  margin-bottom: 39px;
  display: grid;
  grid-template-areas:
    'icon data'
    'icon type';
  grid-template-columns: 116px 1fr;
`;

const StyledIconBg = styled.div`
  width: 60px;
  height: 60px;
  margin: 32px 24px 32px 32px;
  background-color: ${(props) => props.color};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: icon;
`;

const StyledPData = styled.p`
  color: #282d30;
  font-weight: bold;
  font-size: 20px;
  grid-area: data;
  margin: 39px 0 0 0;
  flex-grow: 1;
`;

const StyledPType = styled.p`
  color: #74798c;
  font-weight: 500;
  font-size: 14px;
  grid-area: type;
  margin: 0 0 39px 0;
  flex-grow: 1;
`;

function KeyElement({ iconSrc, color, data, unit, type }) {
  return (
    <StyledContainer>
      <StyledIconBg color={color}>
        <img width="20px" height="20px" alt="" src={iconSrc} />
      </StyledIconBg>
      <StyledPData>{data + unit}</StyledPData>
      <StyledPType>{type}</StyledPType>
    </StyledContainer>
  );
}

export default KeyElement;
