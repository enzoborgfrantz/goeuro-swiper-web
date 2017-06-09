import React from 'react';
import styled from 'styled-components';
import CardDescription from './CardDescription';

const Picture = styled.img.attrs({
  src: props => props.url,
  alt: 'city picture',
})`
  height: 400px;
  width: 100%;
`;

const animateRight = `
  transition: all 1s linear;
  transform: translate3d(145%, 0, 0) rotate(35Deg);
  opacity: 0;
`;

const animateLeft = `
  transition: all 1s linear;
  transform: translate3d(-145%, 0, 0) rotate(-35Deg);
  opacity: 0;
`;

const getAnimation = (direction) => {
  switch (direction) {
    case 'left':
      return animateLeft;
    case 'right':
      return animateRight;
    default:
      return '';
  }
};

const CardStyle = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  ${''/* animation: ${props => props.animation} 1.2s 1; */}

  ${props => getAnimation(props.animation)}
`;


const Card = ({ currentCard, animation, className }) => (
  <CardStyle
    className={className}
    animation={animation}
  >
    <Picture url={currentCard.imageUrl} />
    <CardDescription
      price={currentCard.price}
      duration={currentCard.duration}
      cityName={currentCard.cityName}
    />
  </CardStyle>
);

module.exports = Card;
