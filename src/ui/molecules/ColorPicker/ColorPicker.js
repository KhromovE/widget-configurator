import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { gray, white } from '../../../lib/colors'
import { ColorCircle } from '..'
import { COLORS } from '../../../constants/colors'

const Wrapper = styled.div`
  background-color: ${white.medium};
  max-width: 308px;
  padding: 19px;
  border: 1px solid ${gray.light};
  border-top: 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`

export const ColorPicker = forwardRef(({ selectedColor, onClick }, ref) => (
  <Wrapper ref={ref}>
    {COLORS.map(color => (
      <ColorCircle key={color} color={color} selectedColor={selectedColor} onClick={() => onClick(color)} />
    ))}
  </Wrapper>
))

ColorPicker.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
}
