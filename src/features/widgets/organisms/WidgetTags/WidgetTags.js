import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Panel, PanelButton, Select, ColorPicker, FontColorButton } from '../../../../ui/molecules'
import { Tabs } from '../../../../ui/organisms'
import italicIcon from '../../../../assets/italic.svg'
import boldIcon from '../../../../assets/bold.svg'
import textColor from '../../../../assets/textColor.svg'
import { FONT_SIZES_LIST, FONT_FAMILIES } from '../../../../constants/text'

export const TabsContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
`

const PickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 1;
  width: 100%;
`

const availableTabs = [
  { key: 'title', value: 'Заголовок' },
  { key: 'mainText', value: 'Основной текст' },
  { key: 'button', value: 'Кнопка' },
]

export class WidgetTags extends PureComponent {
  state = {
    activeTab: availableTabs[0].key,
    isOpen: false,
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClosePicker)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClosePicker)
  }

  handleTabClick = tag => {
    this.setState({
      activeTab: tag,
    })
  }

  setPickerRef = node => {
    this.pickerRef = node
  }

  setFontColorButtonRef = node => {
    this.fontColorButtonRef = node
  }

  handleOpenPicker = () => {
    const { isOpen } = this.state

    if (!isOpen) {
      this.setState({
        isOpen: true,
      })
    }
  }

  handleClosePicker = event => {
    if (
      this.pickerRef &&
      this.fontColorButtonRef &&
      !this.pickerRef.contains(event.target) &&
      !this.fontColorButtonRef.contains(event.target)
    ) {
      this.setState({
        isOpen: false,
      })
    }
  }

  handleColorChange = color => {
    const { activeTab } = this.state
    const { handleColorClick } = this.props

    if (activeTab === availableTabs[0].key) {
      handleColorClick('headerColor', color)
    } else if (activeTab === availableTabs[1].key) {
      handleColorClick('mainColor', color)
    } else {
      handleColorClick('buttonColor', color)
    }
  }

  render() {
    const { activeTab, isOpen } = this.state
    const {
      headerColor,
      headerItalic,
      handlePanelButtonClick,
      headerBold,
      handleFieldChange,
      headerSize,
      headerFont,
      mainItalic,
      mainBold,
      mainSize,
      mainFont,
      mainColor,
      buttonItalic,
      buttonBold,
      buttonSize,
      buttonFont,
      buttonColor,
    } = this.props
    let selectedColor

    if (activeTab === availableTabs[0].key) {
      selectedColor = headerColor
    } else if (activeTab === availableTabs[1].key) {
      selectedColor = mainColor
    } else {
      selectedColor = buttonColor
    }

    return (
      <TabsContainer>
        <Tabs tabs={availableTabs} activeTab={activeTab} onClick={this.handleTabClick}>
          <Panel>
            <PanelButton
              id="headerItalic"
              iconSrc={italicIcon}
              checked={headerItalic}
              onChange={handlePanelButtonClick}
            />
            <PanelButton id="headerBold" iconSrc={boldIcon} checked={headerBold} onChange={handlePanelButtonClick} />
            <FontColorButton
              ref={this.setFontColorButtonRef}
              id="headerColor"
              iconSrc={textColor}
              checked={isOpen}
              onChange={this.handleOpenPicker}
              color={headerColor}
            />
            <Select id="headerSize" options={FONT_SIZES_LIST} onChange={handleFieldChange} value={headerSize} />
            <Select id="headerFont" options={FONT_FAMILIES} onChange={handleFieldChange} value={headerFont} />
          </Panel>
          <Panel>
            <PanelButton id="mainItalic" iconSrc={italicIcon} checked={mainItalic} onChange={handlePanelButtonClick} />
            <PanelButton id="mainBold" iconSrc={boldIcon} checked={mainBold} onChange={handlePanelButtonClick} />
            <FontColorButton
              ref={this.setFontColorButtonRef}
              id="mainColor"
              iconSrc={textColor}
              checked={isOpen}
              onChange={this.handleOpenPicker}
              color={mainColor}
            />
            <Select id="mainSize" options={FONT_SIZES_LIST} onChange={handleFieldChange} value={mainSize} />
            <Select id="mainFont" options={FONT_FAMILIES} onChange={handleFieldChange} value={mainFont} />
          </Panel>
          <Panel>
            <PanelButton
              id="buttonItalic"
              iconSrc={italicIcon}
              checked={buttonItalic}
              onChange={handlePanelButtonClick}
            />
            <PanelButton id="buttonBold" iconSrc={boldIcon} checked={buttonBold} onChange={handlePanelButtonClick} />
            <FontColorButton
              ref={this.setFontColorButtonRef}
              id="buttonColor"
              iconSrc={textColor}
              checked={isOpen}
              onChange={this.handleOpenPicker}
              color={buttonColor}
            />
            <Select id="buttonSize" options={FONT_SIZES_LIST} onChange={handleFieldChange} value={buttonSize} />
            <Select id="buttonFont" options={FONT_FAMILIES} onChange={handleFieldChange} value={buttonFont} />
          </Panel>
        </Tabs>
        <PickerWrapper>
          {isOpen && (
            <ColorPicker ref={this.setPickerRef} onClick={this.handleColorChange} selectedColor={selectedColor} />
          )}
        </PickerWrapper>
      </TabsContainer>
    )
  }
}

WidgetTags.propTypes = {
  handlePanelButtonClick: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  headerFont: PropTypes.string.isRequired,
  headerBold: PropTypes.bool.isRequired,
  headerItalic: PropTypes.bool.isRequired,
  headerSize: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  mainFont: PropTypes.string.isRequired,
  mainBold: PropTypes.bool.isRequired,
  mainItalic: PropTypes.bool.isRequired,
  mainSize: PropTypes.string.isRequired,
  mainColor: PropTypes.string.isRequired,
  buttonFont: PropTypes.string.isRequired,
  buttonSize: PropTypes.string.isRequired,
  buttonBold: PropTypes.bool.isRequired,
  buttonItalic: PropTypes.bool.isRequired,
  buttonColor: PropTypes.string.isRequired,
  handleColorClick: PropTypes.func.isRequired,
}
