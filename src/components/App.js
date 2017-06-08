import styled from 'styled-components';
import React from 'react';
import helloWorld from '../modules/hello.module';

const Wrapper = styled.div`
  padding: 5px;
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
`;

const Title = styled.h1`
  font-size: 22px;
  text-align: center;
  color: white;
  opacity: 0.75;
  font-family: Arial;
  transition: all 0.35s ease-in;
  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const CardWrapper = styled.div`
  width:300px;
  margin: 0 auto;
  height:400px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
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
  border: 2px solid rgba(233, 233, 233, 1);
  height: 90px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Card = () => (
  <CardWrapper>
    <PictureWrapper url={'https://www.eurolines.co.uk/assets/v-20160315092537/germany/berlin/berlin-500x500.jpg'} />
    <DescriptionWrapper />
  </CardWrapper>
);

export default function () {
  return (
    <Card />
  );
}
