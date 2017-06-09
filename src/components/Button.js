import styled from 'styled-components';

const Button = styled.button.attrs({
  type: 'button',
  disabled: props => props.disabled,
  className: props => props.className,
})`
  background-color: white !important;
  appearance: none;
  border: none;
  outline: none;
`;

module.exports = Button;
