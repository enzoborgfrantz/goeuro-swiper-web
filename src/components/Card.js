import React from 'react';
import styled, { keyframes } from 'styled-components';

const Picture = styled.img.attrs({
  src: props => props.url,
  alt: 'city picture',
})`
  height: 300px;
  width: 100%;
`;

const SwipeLeft = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0%, 0, 0) rotate(0Deg);
  }
  to {
    transform: translate3d(-145%, 0, 0) rotate(-35Deg);
    opacity: 0;
  }
`;

const SwipeRight = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0%, 0, 0) rotate(0Deg);
  }
  to {
    transform: translate3d(145%, 0, 0) rotate(35Deg);
    opacity: 0;
  }
`;

const CardStyle = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  ${''/* animation: ${SwipeLeft} 1.5s infinite; */}
`;

const HalfWidthLabel = styled.div`
  width: 50%;
`;

const FullWidthLabel = styled.div`
  width: 100%;
  font-size: 12px;
`;

const LeftLabel = styled.p`
  text-align: left;
  margin-left: 10px;
`;

const RightLabel = styled.p`
  text-align: right;
  margin-right: 10px;
  font-weight: 300;
`;

const CardDescription = styled.div`
  height: 90px;
  border: 1px solid #d8d8d8;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: white;
  display: flex;
  flex-flow: wrap;
`;

const Card = ({ currentCard, className }) => (
  <CardStyle className={className}>
    <Picture url={currentCard.imageUrl} />
    <CardDescription>
      <HalfWidthLabel>
        <LeftLabel>{currentCard.cityName}</LeftLabel>
      </HalfWidthLabel>
      <HalfWidthLabel>
        <RightLabel>{`from ${currentCard.price}`}</RightLabel>
      </HalfWidthLabel>
      <FullWidthLabel>
        <LeftLabel>{currentCard.duration}</LeftLabel>
      </FullWidthLabel>
    </CardDescription>
  </CardStyle>
);

module.exports = Card;
