import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Field, ColorPicker } from '../../../../ui/molecules'

const Wrapper = styled.div`
  margin-bottom: 37px;
  position: relative;
`

const FieldWrapper = styled.section`
  height: 34px;
  border-bottom: 1px solid #d1d6da;
`

const PickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 1;
  width: 100%;
`

export class BackgroundColorPicker extends PureComponent {
  state = {
    isOpen: false,
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClosePicker)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClosePicker)
  }

  setInputRef = node => {
    this.inputRef = node
  }

  setPickerRef = node => {
    this.pickerRef = node
  }

  handleOpenPicker = () => {
    this.setState({
      isOpen: true,
    })
  }

  handleClosePicker = event => {
    const inputRefExists = this.inputRef && !this.inputRef.contains(event.target)
    const pickerRefExists = this.pickerRef && !this.pickerRef.contains(event.target)

    if (inputRefExists && pickerRefExists) {
      this.setState({
        isOpen: false,
      })
    }
  }

  render() {
    const { backgroundColor, handleFieldChange, onClick } = this.props
    const { isOpen } = this.state

    return (
      <Wrapper>
        <FieldWrapper>
          <Field
            ref={this.setInputRef}
            value={backgroundColor}
            id="backgroundColor"
            placeholder="Цвет основного фона"
            label="Цвет основного фона:"
            onChange={handleFieldChange}
            onFocus={this.handleOpenPicker}
          />
        </FieldWrapper>
        <PickerWrapper>
          {isOpen && <ColorPicker ref={this.setPickerRef} onClick={onClick} selectedColor={backgroundColor} />}
        </PickerWrapper>
      </Wrapper>
    )
  }
}

BackgroundColorPicker.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}
