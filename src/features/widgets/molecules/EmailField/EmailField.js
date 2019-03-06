import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'

import { gray } from '../../../../lib/colors'

const Wrapper = styled.div`
  border-bottom: 2px solid ${gray.light};
  max-width: 350px;
  width: 100%;
  padding: 4px 0;
  margin-top: 40px;
`
const Input = styled.input`
  font-size: ${({ mainSize }) => `${mainSize}px`};
  background-color: transparent;
  width: 100%;
  color: ${({ mainColor }) => mainColor};

  &::placeholder {
    color: ${({ mainColor }) => lighten(0.3, mainColor)};
  }
`

export const EmailField = ({ mainSize, mainColor }) => (
  <Wrapper>
    <Input placeholder="Введите e-mail" mainSize={mainSize} mainColor={mainColor} />
  </Wrapper>
)

EmailField.propTypes = {
  mainSize: PropTypes.string.isRequired,
  mainColor: PropTypes.string.isRequired,
}
