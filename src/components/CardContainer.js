import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const border = `
  border: 1px solid #d8d8d8;
  background-color: white;
  border-radius: 8px;
`;

const position = px => `
    top: 0px;
    left: ${px}px;
    right: ${px}px;
    bottom: -${px}px;
`;

const getFakeCards = (cardCount) => {
  const middleCard = `
    &::before{
      content: '';
      position: absolute;
      ${position(5)}
      ${border}
      z-index: -1;
    }
    `;
  const bottomCard = `
    &::after{
      content: '';
      position: absolute;
      ${position(15)}
      ${border}
      z-index: -2;
    }
    `;

  if (cardCount > 2) {
    return `${middleCard}${bottomCard}`;
  } else if (cardCount > 1) {
    return middleCard;
  }

  return '';
};

const CardContainerStyle = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  ${props => getFakeCards(props.cardCount)}
`;

const NextCard = styled(Card)`
  position: absolute;
  top: 0;
`;

const CardContainer = ({ cardCount, currentCard, nextCard }) => (
  <CardContainerStyle cardCount={cardCount}>
    <Card currentCard={currentCard} />
    <NextCard currentCard={nextCard} />
  </CardContainerStyle>
);

module.exports = CardContainer;
