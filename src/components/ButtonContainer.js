import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 60px;
  @media (min-width: 700px) {
    margin-bottom: 50px;
	}
`;

const SwipeButton = Button.extend`
  border-radius: 100%;
  border: 12px solid #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  background: url(${props => props.url});
  background-size: cover;
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 107px;
  width: 107px;
  margin: 0 10px;
  @media (min-width: 700px) {
	  margin: 0 148px;
    position: relative;
    bottom: 300px;
	}
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
