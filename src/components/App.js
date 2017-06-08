import styled from 'styled-components';
import React from 'react';
import helloWorld from '../modules/hello.module';

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
  background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUjnW1wLnbWx-O8vhXlV9ch6lzKzVEczq_3PaheaqzGCTnfHbeaM3RCY);
  background-size: cover;
  outline: none;
`;

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
  ${''/* border: 2px solid rgba(233, 233, 233, 1); */}
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
`;

const Card = ({ top, width }) => (
  <CardWrapper top={top} width={width}>
    <PictureWrapper url={'https://www.eurolines.co.uk/assets/v-20160315092537/germany/berlin/berlin-500x500.jpg'} />
    <DescriptionWrapper />
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

export default function () {
  return (
    <Main>
      <CardContainer>
        <Card top={30} width={260} />
        <Card top={20} width={280} />
        <Card top={10} width={300} />
      </CardContainer>
      <ButtonContainer>
        <Button onClick={() => { console.log('left'); }} />
        <Button onClick={() => { console.log('right'); }} />
      </ButtonContainer>
    </Main>
  );
}
