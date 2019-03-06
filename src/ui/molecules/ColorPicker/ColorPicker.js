import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { gray, white } from '../../../lib/colors'
import { ColorCircle } from '..'

const availableColors = [
  '#000000',
  '#454545',
  '#666666',
  '#989898',
  '#b6b6b6',
  '#cbcbcb',
  '#d8d8d8',
  '#eeeef0',
  '#f3f3f3',
  '#ffffff',
  '#3884ee',
  '#2800ff',
  '#a800ff',
  '#ff00ff',
  '#f00f00',
  '#ff9300',
  '#fcff00',
  '#ff0000',
]

const Wrapper = styled.div`
  background-color: ${white.medium};
  max-width: 308px;
  padding: 19px;
  border: 1px solid ${gray.light};
  border-top: 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`

export const ColorPicker = ({ selectedColor, onClick }) => (
  <Wrapper>
    {availableColors.map(color => (
      <ColorCircle key={color} color={color} selectedColor={selectedColor} onClick={() => onClick(color)} />
    ))}
  </Wrapper>
)

ColorPicker.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
}
