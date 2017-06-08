import styled, { keyframes } from 'styled-components';
import React, { Component } from 'react';
import Swiper from './Swiper';

const animationTime = 1.5;

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

const getAnimation = (left, right) => {
  if (left) { return SwipeLeft; }
  if (right) { return SwipeRight; }
  return '';
};

const CardWrapper = styled.div`
  top: ${props => props.top}px;
  width:${props => props.width}px;
  margin: 0 auto;
  height:400px;
  position: absolute;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.17);
  background-color: white;
  font-family: Roboto, sans-serif;
  animation: ${props => getAnimation(props.animateLeft, props.animateRight)} ${animationTime}s 1;
`;

const Card = ({ top, width, animateLeft, animateRight }) => (
  <CardWrapper top={top} width={width} animateLeft={animateLeft} animateRight={animateRight}>
    <PictureWrapper url={'https://www.eurolines.co.uk/assets/v-20160315092537/germany/berlin/berlin-500x500.jpg'} />
    <DescriptionWrapper>
      <HalfWidthLabel> <LeftLabel> Berlin </LeftLabel> </HalfWidthLabel>
      <HalfWidthLabel> <RightLabel> from 20$ </RightLabel> </HalfWidthLabel>
      <FullWidthLabel> <LeftLabel> Train - Duration: 1hr 30min </LeftLabel> </FullWidthLabel>
    </DescriptionWrapper>
  </CardWrapper>
);


class Swiperz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCount: 5,
      swipeLeft: false,
      swipeRight: false,
    };
    this.performLeftSwipe = this.performLeftSwipe.bind(this);
    this.performRightSwipe = this.performRightSwipe.bind(this);
  }

  performLeftSwipe() {
    this.setState({ swipeLeft: true });
    setTimeout(() => {
      this.setState({ swipeLeft: false });
    }, animationTime * 1000);
  }

  performRightSwipe() {
    this.setState({ swipeRight: true });
    setTimeout(() => {
      this.setState({ swipeRight: false });
    }, animationTime * 1000);
  }

  render() {
    return (
      <Swiper />
    );
  }
}

module.exports = Swiperz;
