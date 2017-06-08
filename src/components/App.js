import styled, { keyframes } from 'styled-components';
import React, { Component } from 'react';
import helloWorld from '../modules/hello.module';

const animationTime = 1.65;

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

const Button = styled.input.attrs({
  type: 'button',
})`
  background-color: white;
  appearance: none;
  height: 107px;
  width: 107px;
  border: none;
  border-radius: 100%;
  border: 12px solid #f4f4f3;
  background: url(${props => props.url});
  background-size: cover;
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  outline: none;
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

const PictureWrapper = styled.img.attrs({
  src: props => props.url,
  alt: 'image of beauty',
})`
  height: 300px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  height: 90px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  position: relative;
  top: 420px;
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

const Card = ({ key, top, width, animateLeft, animateRight }) => (
  <CardWrapper key={key} top={top} width={width} animateLeft={animateLeft} animateRight={animateRight}>
    <PictureWrapper url={'https://www.eurolines.co.uk/assets/v-20160315092537/germany/berlin/berlin-500x500.jpg'} />
    <DescriptionWrapper>
      <HalfWidthLabel> <LeftLabel> Berlin </LeftLabel> </HalfWidthLabel>
      <HalfWidthLabel> <RightLabel> from 20$ </RightLabel> </HalfWidthLabel>
      <FullWidthLabel> <LeftLabel> Train - Duration: 1hr 30min </LeftLabel> </FullWidthLabel>
    </DescriptionWrapper>
  </CardWrapper>
);

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex: 1;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swipeLeft: false,
      swipeRight: false,
    };
    this.performLeftSwipe = this.performLeftSwipe.bind(this);
    this.performRightSwipe = this.performRightSwipe.bind(this);
  }

  getCards() {
    const cardStack = [];

    for (let i = 0; i < 20; i += 1) {
      let card;
      if (i === 0) {
        card = Card({ key: i, top: 30, width: 260, animateLeft: false, animateRight: false });
      } else if (i === 1) {
        card = Card({ key: i, top: 20, width: 280, animateLeft: false, animateRight: false });
      } else {
        card = Card({ key: i, top: 10, width: 300, animateLeft: false, animateRight: false });
      }
      cardStack.push(card);
    }

    return cardStack;
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
      <Main>
        <CardContainer>
          {this.getCards()}
        </CardContainer>
        <ButtonContainer>
          <Button onClick={this.performLeftSwipe} url={'https://openclipart.org/image/2400px/svg_to_png/16155/milker-X-icon.png'} />
          <Button onClick={this.performRightSwipe} url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUjnW1wLnbWx-O8vhXlV9ch6lzKzVEczq_3PaheaqzGCTnfHbeaM3RCY'} />
        </ButtonContainer>
      </Main>
    );
  }
}

module.exports = Swiper;
