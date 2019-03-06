import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { lighten } from 'polished'

import { gray } from '../../../lib/colors'

const Label = styled.label`
  color: ${gray.medium};
  font-size: 14px;
  font-weight: bold;
  margin-right: 15px;
  cursor: pointer;
`

const Input = styled.input`
  color: ${gray.medium};
  font-size: 14px;

  &::placeholder {
    color: ${lighten(0.3, gray.medium)};
  }
`

export const Field = ({ id, placeholder, value, label, onChange, onFocus, onBlur }) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} placeholder={placeholder} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
  </div>
)

Field.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}

Field.defaultProps = {
  onFocus: null,
  onBlur: null,
}
