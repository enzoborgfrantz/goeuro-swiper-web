import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SwipeButton = Button.extend`
  border-radius: 100%;
  border: 12px solid #f4f4f3;
  background: url(${props => props.url});
  background-size: cover;
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 107px;
  width: 107px;
`;

const ButtonContainer = ({ swipeLeft, swipeRight, disabled }) => (
  <ButtonContainerStyled>
    <SwipeButton
      disabled={disabled}
      onClick={swipeLeft}
      url={'https://openclipart.org/image/2400px/svg_to_png/16155/milker-X-icon.png'}
    />
    <SwipeButton
      disabled={disabled}
      onClick={swipeRight}
      url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUjnW1wLnbWx-O8vhXlV9ch6lzKzVEczq_3PaheaqzGCTnfHbeaM3RCY'}
    />
  </ButtonContainerStyled>
);

module.exports = ButtonContainer;
