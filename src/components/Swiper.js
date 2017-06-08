import React, { Component } from 'react';
import styled from 'styled-components';
import CardContainer from './CardContainer';
import ButtonContainer from './ButtonContainer';

const SwiperStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCount: 10,
      currentCardIndex: 1,
      currentCard: {
        cityName: 'Lisboa',
        imageUrl: 'https://www.eurolines.co.uk/assets/v-20160315092537/germany/berlin/berlin-500x500.jpg',
        price: '80$',
        duration: 'Train 1h 30min',
        travelmode: 'train',
      },
      nextCard: {
        cityName: 'Paris',
        imageUrl: 'https://www.eurolines.co.uk/assets/v-20160315092537/germany/berlin/berlin-500x500.jpg',
        price: '120$',
        duration: 'Bus 2h 20min',
        travelmode: 'bus',
      }
    };
    this.swipeLeft = this.swipeLeft.bind(this);
    this.swipeRight = this.swipeRight.bind(this);
  }

  swipeLeft() {
    console.log('left');
  }

  swipeRight() {
    console.log('right');
  }

  render() {
    return (
      <SwiperStyle>
        <CardContainer
          cardCount={this.state.cardCount}
          currentCard={this.state.currentCard}
          nextCard={this.state.nextCard}
        />
        <ButtonContainer swipeLeft={this.swipeLeft} swipeRight={this.swipeRight} />
      </SwiperStyle>
    );
  }
}

module.exports = Swiper;
