import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { getSearchOptions } from '../data/searchOptions';

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
  font-family: Roboto;
`;

const HeartIcon = styled.div`
  background-image: url('${props => props.url}');
  height: 35px;
  background-repeat: no-repeat;
  width: 36px;
  background-size: contain;
`;

const Description = styled.div`
  ${''/* height: 100px; */}
  background-color: #efeff0;
  width: 100%;
  padding: 20px;
  text-align: center;
`;

const ItalicHeader = styled.h2`
  font-style: italic;
  color: #2a84b7;
  font-family: Roboto;
`;

const BookButton = Button.extend`
  color:white;
  border-radius: 4px;
  box-shadow: inset 0 -2px 0 0 rgba(0,0,0,.15);
  background-color: #f7a600;
  width: 120px;
  height: 30px;
  cursor: pointer;
  font-family: Roboto;
  &:hover{
    background-color: #f9bb3c;
  }
  &:active{
    background-color: #f49414;
  };
  margin-top: 10px;
`;

const CloseButton = Button.extend`
  position: absolute;
  top: 5px;
  right: 5px;
  font-family: Roboto;
  font-size: 24px;
  color: #999999;
`;

const redirectToSearch = (depPos, arrPos) => {
  const url = 'https://www.goeuro.com/GoEuroAPI/rest/api/v5/searches';
  const options = ({ headers: { 'Content-Type': 'application/json' }, method: 'POST', body: JSON.stringify(getSearchOptions(depPos, arrPos)) });

  fetch(url, options)
    .then(r => r.json())
    .then((d) => {
      const deeplink = `https://www.goeuro.com/travel-search2/results/${d.searchId}/train`;
      // console.log(deeplink);
      window.location.replace(deeplink);
    },
  );
};

const YouLiked = styled.p`
  font-size: 17px;
  color: #878787;
  font-family: Roboto;
  font-weight: 100;
  text-align: center;
  padding: 0 20px;
`;

const CityName = styled.div`
  flex: 1;
  color: #262626;
  text-align: left;
  margin-left: 20px;
`;

const Price = styled.div`
  flex: 1;
  font-weight: lighter;
  text-align: right;
  margin-right: 20px;
`;

const Duration = styled.div`
  font-family: Arial;
  font-size: 14px;
  color: #999999;
  text-align: left;
  margin-left: 20px;
`;

const DescriptionTop = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const MatchModal = ({ cityName, price, duration, deeplink, closeModal }) => (
  <ModalWrapper>
    <MatchModalStyled>
      <CloseButton onClick={closeModal}>×</CloseButton>
      <HeartIcon url={'https://maxcdn.icons8.com/office/PNG/512/Gaming/hearts-512.png'} />
      <ItalicHeader>Its a match!</ItalicHeader>
      <YouLiked>You liked {cityName}, you wanna book a ticket?</YouLiked>
      <Description>
        <DescriptionTop>
          <CityName>{cityName}</CityName>
          <Price>from {price}</Price>
        </DescriptionTop>
        <Duration>{duration}</Duration>
      </Description>
      <BookButton onClick={() => { redirectToSearch(376946, 376217); }}>Book me</BookButton>
    </MatchModalStyled>
  </ModalWrapper>
);

module.exports = MatchModal;
