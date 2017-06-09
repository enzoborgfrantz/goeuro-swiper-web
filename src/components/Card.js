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

const PictureContentWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  height: 300px;
`;

const Content = styled.div`
  background-color: rgba(0,0,0, .3);
  position: absolute;
  height: 300px;
  color: white;
  font-family: Roboto;
  border-radius: 5px;
  width: 100%;
  top: 0;
`;

const ContentText = styled.div`
  bottom: 10px;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  opacity: 1;
  color:white;
  margin: 0 auto;
  text-align: center;
  font-weight: 100;
  font-size: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Card = ({ currentCard, animation, className }) => (
  <CardStyle
    className={className}
    animation={animation}
  >
    <PictureContentWrapper>
      <Picture url={currentCard.imageUrl} />
      <Content>
        <ContentText>
          {currentCard.content}
        </ContentText>
      </Content>
    </PictureContentWrapper>
    <CardDescription
      price={currentCard.price}
      duration={currentCard.duration}
      cityName={currentCard.cityName}
    />
  </CardStyle>
);

module.exports = Card;
