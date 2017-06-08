import React, { Component } from 'react';
import styled from 'styled-components';
import CardContainer from './CardContainer';
import ButtonContainer from './ButtonContainer';
import Match from './Match';

const SwiperStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCount: 3,
      currentCardIndex: 1,
      currentCard: {
        cityName: 'Lisboa',
        imageUrl: 'https://www.eurolines.co.uk/assets/v-20160315092537/germany/berlin/berlin-500x500.jpg',
        price: '80$',
        duration: 'Train 1h 30min',
        travelmode: 'train',
        deeplink: '',
      },
      nextCard: {
        cityName: 'Paris',
        imageUrl: 'https://www.eurolines.co.uk/assets/v-20160315092537/germany/berlin/berlin-500x500.jpg',
        price: '120$',
        duration: 'Bus 2h 20min',
        travelmode: 'bus',
        deeplink: '',
      },
      animation: '',
      showMatchModal: false,
    };
    this.swipeLeft = this.swipeLeft.bind(this);
    this.swipeRight = this.swipeRight.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  swipeLeft() {
    if (this.state.animation === '') {
      this.setState({ animation: 'left' });
      setTimeout(() => {
        this.setState({ animation: '' });
      }, 1000);
      this.flipCard();
    }
  }

  swipeRight() {
    if (this.state.animation === '') {
      this.toggleModal();
      this.setState({ animation: 'right' });
      setTimeout(() => {
        this.setState({ animation: '' });
      }, 1000);
    }
  }

  flipCard() {
    this.setState({ currentCard: this.state.nextCard, cardCount: this.state.cardCount - 1 });
  }

  toggleModal() {
    this.setState({ showMatchModal: !this.state.showMatchModal });
    if (this.state.showMatchModal) { this.flipCard(); }
  }

  render() {
    const { cardCount, currentCard, nextCard, animation } = this.state;
    const { cityName, price, duration, deeplink } = this.state.currentCard;
    return (
      <SwiperStyle>
        <CardContainer
          cardCount={cardCount}
          currentCard={currentCard}
          nextCard={nextCard}
          animation={animation}
        />
        <ButtonContainer
          disabled={cardCount <= 1}
          swipeLeft={this.swipeLeft}
          swipeRight={this.swipeRight}
        />
        {this.state.showMatchModal &&
          <Match
            cityName={cityName}
            price={price}
            duration={duration}
            deeplink={deeplink}
            closeModal={this.toggleModal}
          />
        }
      </SwiperStyle>
    );
  }
}

module.exports = Swiper;
