import React from 'react';
import styled from 'styled-components';

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

const CardDescriptionStyled = styled.div`
  height: 90px;
  border: 1px solid #d8d8d8;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: white;
  display: flex;
  flex-flow: wrap;
  font-family: Roboto;
`;

const CardDescription = ({ cityName, price, duration }) => (
  <CardDescriptionStyled>
    <HalfWidthLabel>
      <LeftLabel>{cityName}</LeftLabel>
    </HalfWidthLabel>
    <HalfWidthLabel>
      <RightLabel>{`from ${price}`}</RightLabel>
    </HalfWidthLabel>
    <FullWidthLabel>
      <LeftLabel>{duration}</LeftLabel>
    </FullWidthLabel>
  </CardDescriptionStyled>
);

module.exports = CardDescription;
