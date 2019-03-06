import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken, invert } from 'polished'

const Circle = styled.button`
  position: relative;
  height: 32px;
  width: 32px;
  background-color: ${({ color }) => color};
  border-radius: 30px;
  border: 1px solid ${({ color }) => darken(0.1, color)}};
  margin: 6px;
  cursor: pointer;
`

const I = styled.i`
  left: 0;
  right: 0;
  top: 7px;
  position: absolute;
  margin: auto;
  width: 5px;
  height: 10px;
  border: solid ${({ color }) => invert(color)};
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
`

export const ColorCircle = ({ color, selectedColor, onClick }) => (
  <Circle type="button" color={color} onClick={onClick}>
    {color === selectedColor && <I color={color} />}
  </Circle>
)

ColorCircle.propTypes = {
  color: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
