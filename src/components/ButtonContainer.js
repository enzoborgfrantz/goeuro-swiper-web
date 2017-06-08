import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ButtonContainer = ({ swipeLeft, swipeRight }) => (
  <ButtonContainerStyled>
    <Button onClick={swipeLeft} url={'https://openclipart.org/image/2400px/svg_to_png/16155/milker-X-icon.png'} />
    <Button onClick={swipeRight} url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUjnW1wLnbWx-O8vhXlV9ch6lzKzVEczq_3PaheaqzGCTnfHbeaM3RCY'} />
  </ButtonContainerStyled>
);

module.exports = ButtonContainer;
