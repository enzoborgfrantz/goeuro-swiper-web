import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import getCardFromLocation from '../modules/cardFromLocationBuilder.module';
import home from '../data/home.json';

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
  font-family: Roboto, sans-serif;
  margin: 0 auto;
  width: 400px;
  height: 500px;
  position: relative;
  ${props => getFakeCards(props.cardCount)}
`;

const NextCard = styled(Card)`
  position: absolute;
  top: 0;
  z-index: -1;
`;

const HomeCard = styled(Card)`
  position: absolute;
  top: 0;
  z-index: -2;
`;

const CardContainer = ({ cardCount, currentCard, nextCard, animation }) => (
  <CardContainerStyle cardCount={cardCount}>
    {currentCard && <Card currentCard={currentCard} animation={animation} />}
    {nextCard && <NextCard currentCard={nextCard} />}
    {<HomeCard currentCard={getCardFromLocation(home)} />}
  </CardContainerStyle>
);

module.exports = CardContainer;
