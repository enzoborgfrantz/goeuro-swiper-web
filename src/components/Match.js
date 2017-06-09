import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ModalWrapper = styled.div`
  width:100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const MatchModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color:white;
  top: 50px;
  width: 100%;
  transform: translate(-50%, 0);
  height: 400px;
  left: 50%;
  justify-content: center;
  align-items: center;
`;

const HeartIcon = styled.div`
  background-image: url('${props => props.url}');
  height: 35px;
  background-repeat: no-repeat;
  width: 36px;
  background-size: contain;
`;

const Description = styled.div`
  height: 100px;
  background-color: #efeff0;
  width: 100%;
  padding: 10px;
  text-align: center;
`;

const ItalicHeader = styled.h2`
  font-style: italic;
`;

const BookButton = Button.extend`
  color:white;
  border-radius: 4px;
  box-shadow: inset 0 -2px 0 0 rgba(0,0,0,.15);
  background-color: #f7a600;
  width: 120px;
  height: 30px;
  cursor: pointer;
  &:hover{
    background-color: #f9bb3c;
  }
  &:active{
    background-color: #f49414;
  };
  margin-top: 10px;
`;

const redirectToSearch = () => {
  console.log('u done booked');
};

const MatchModal = ({ cityName, price, duration, deeplink, closeModal }) => (
  <ModalWrapper onClick={closeModal}>
    <MatchModalStyled>
      <button onClick={closeModal}>X</button>
      <HeartIcon url={'https://maxcdn.icons8.com/office/PNG/512/Gaming/hearts-512.png'} />
      <ItalicHeader>Its a match!</ItalicHeader>
      <h4>You liked {cityName} you wanna book a ticket?</h4>
      <Description>
        <span>{cityName}</span>
        <span>{price}</span>
        <span>{duration}</span>
      </Description>
      <BookButton onClick={redirectToSearch}>Book me</BookButton>
    </MatchModalStyled>
  </ModalWrapper>
);

module.exports = MatchModal;
