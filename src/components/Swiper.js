import React, { Component } from 'react';
import styled from 'styled-components';
import CardContainer from './CardContainer';
import ButtonContainer from './ButtonContainer';
import Match from './Match';
import locations from '../data/locations.json';
import getCardFromLocation from '../modules/cardFromLocationBuilder.module';
import assets from '../assets/assets';

const SwiperStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  height: 75px;
  margin-bottom: 50px;
  background: #fff;
`;

const MainContentArea = styled.div`
  height: 240px;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  color: #878787;
  
  @media (max-width: 500px) {
   display: none;
	}
`;

const LogoArea = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Logo = styled.img.attrs({
  src: 'https://cdn-goeuro.com/static_content/hackathon/logo@2x.png',
  width: '180',
})`
  display: block;
  margin: 0 auto;
`;

const WordingTextArea = styled.p`
  text-align: center;
  width: 500px;
  letter-spacing: 0.2px;
  line-height: 1.5;
  margin: 0 auto;
  font-size: 18px;
  @media (max-width: 500px) {
    width: 350px;
	}
`;

const HeaderLogo = styled.div`
  background: url(${assets.goeuroIcon});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  width: 100px;
  height: 20px;
  margin: 30px auto auto 40px;
`;

class Swiper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardCount: locations.routes.length,
      currentCard: getCardFromLocation(locations.routes.pop()),
      nextCard: getCardFromLocation(locations.routes.pop()),
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
        this.flipCard();
      }, 1000);
    }
  }

  swipeRight() {
    if (this.state.animation === '') {
      this.toggleModal();
      // this.setState({
      //   // animation: 'right', // @adds swipe animmation when swiping right
      // });
      // setTimeout(() => {
      //   this.setState({ animation: '' });
      // }, 1000);
    }
  }

  flipCard() {
    const nextCardToBringForward = this.state.nextCard;

    let nextCardInFile;
    if (this.state.cardCount > 0 && locations.routes.length > 0) {
      nextCardInFile = getCardFromLocation(locations.routes.pop());
    }

    if (this.state.cardCount >= 0) {
      this.setState({
        cardCount: this.state.cardCount - 1,
        currentCard: nextCardToBringForward || undefined,
        nextCard: nextCardInFile || undefined,
      });
    }
  }


  toggleModal() {
    this.setState({ showMatchModal: !this.state.showMatchModal });
    if (this.state.showMatchModal) { this.flipCard(); }
  }

  render() {
    const { cardCount, currentCard, nextCard, animation } = this.state;

    return (
      <SwiperStyle>
        <Header>
          <HeaderLogo />
        </Header>
        <MainContentArea>
          <LogoArea><Logo /></LogoArea>
          <WordingTextArea>
            If you need a break but can't decide where to go, click the button and let us find somewhere
          for you to fall in love with.
          </WordingTextArea>
        </MainContentArea>
        <CardContainer
          cardCount={cardCount}
          currentCard={currentCard}
          nextCard={nextCard}
          animation={animation}
        />
        <ButtonContainer
          disabled={cardCount === 0}
          swipeLeft={this.swipeLeft}
          swipeRight={this.swipeRight}
        />
        {this.state.showMatchModal &&
          this.state.currentCard &&
          <Match
            cityName={this.state.currentCard.cityName}
            price={this.state.currentCard.price}
            duration={this.state.currentCard.duration}
            deeplink={this.state.currentCard.deeplink}
            closeModal={this.toggleModal}
          />
        }
      </SwiperStyle>
    );
  }
}

module.exports = Swiper;
