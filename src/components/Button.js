import React from 'react';
import styled from 'styled-components';

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
  background: url(${props => props.url});
  background-size: cover;
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  outline: none;
`;

module.exports = Button;
