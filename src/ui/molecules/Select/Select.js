import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { white } from '../../../lib/colors'

const SelectTag = styled.select`
  display: flex;
  align-items: center;
  appearance: none;
  background-color: ${white.medium};
  border: 0;
  height: 20px;
  cursor: pointer;
  font-weight: 14px;
`

const SelectView = ({ id, options, onChange, value }) => (
  <SelectTag id={id} onChange={onChange} value={value}>
    {options.map(option => (
      <option key={option}>{option}</option>
    ))}
  </SelectTag>
)

SelectView.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export const Select = memo(SelectView)
