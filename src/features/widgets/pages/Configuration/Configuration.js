import React, { PureComponent } from 'react'

import { Field } from '../../../../ui/molecules'
import { FieldWrapper } from '../../../../ui/templates'
import { Sample, BackgroundColorPicker, WidgetTags, Actions } from '../../organisms'
import { FONT_SIZES_LIST, FONT_FAMILIES } from '../../../../constants/text'

export class Configuration extends PureComponent {
  state = {
    config: {
      name: '',
      header: 'Стать клиентом',
      headerSize: FONT_SIZES_LIST[8],
      headerColor: '#6f7e8e',
      headerBold: false,
      headerItalic: false,
      headerFont: FONT_FAMILIES[0],
      backgroundColor: '#fdfdfd',
      mainFont: FONT_FAMILIES[0],
      mainBold: false,
      mainItalic: false,
      mainSize: FONT_SIZES_LIST[5],
      mainColor: '#6f7e8e',
      buttonFont: FONT_FAMILIES[0],
      buttonBold: false,
      buttonItalic: false,
      buttonSize: '14',
      buttonColor: '#fff',
      buttonBackgroundColor: '#6f7e8e',
    },
  }

  handleFieldChange = ({ target }) => {
    const { id, value } = target

    this.setState(({ config }) => ({
      config: {
        ...config,
        [id]: value,
      },
    }))
  }

  handlePanelButtonClick = ({ target }) => {
    const { id, checked } = target

    this.setState(({ config }) => ({
      config: {
        ...config,
        [id]: checked,
      },
    }))
  }

  handleColorClick = (property, color) => {
    this.setState(({ config }) => ({
      config: {
        ...config,
        [property]: color,
      },
    }))
  }

  render() {
    const { config } = this.state
    const {
      header,
      headerSize,
      headerColor,
      headerFont,
      headerBold,
      headerItalic,
      name,
      backgroundColor,
      mainItalic,
      mainFont,
      mainBold,
      mainSize,
      mainColor,
      buttonFont,
      buttonBold,
      buttonItalic,
      buttonSize,
      buttonColor,
      buttonBackgroundColor,
    } = config

    return (
      <form>
        <FieldWrapper>
          <Field
            value={name}
            id="name"
            placeholder="Введите название"
            label="Название виджета:"
            onChange={this.handleFieldChange}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Field
            value={header}
            id="header"
            placeholder="Введите заголовок"
            label="Текст заголовка виджета:"
            onChange={this.handleFieldChange}
          />
        </FieldWrapper>
        <WidgetTags
          headerItalic={headerItalic}
          handlePanelButtonClick={this.handlePanelButtonClick}
          headerBold={headerBold}
          handleFieldChange={this.handleFieldChange}
          headerSize={headerSize}
          headerFont={headerFont}
          headerColor={headerColor}
          mainItalic={mainItalic}
          mainBold={mainBold}
          mainSize={mainSize}
          mainFont={mainFont}
          mainColor={mainColor}
          buttonItalic={buttonItalic}
          buttonBold={buttonBold}
          buttonSize={buttonSize}
          buttonFont={buttonFont}
          buttonColor={buttonColor}
          handleColorClick={this.handleColorClick}
          buttonBackgroundColor={buttonBackgroundColor}
        />
        <BackgroundColorPicker
          backgroundColor={backgroundColor}
          handleFieldChange={this.handleFieldChange}
          onClick={color => this.handleColorClick('backgroundColor', color)}
        />
        <Sample
          header={header}
          headerFont={headerFont}
          headerSize={headerSize}
          headerBold={headerBold}
          headerItalic={headerItalic}
          headerColor={headerColor}
          backgroundColor={backgroundColor}
          mainFont={mainFont}
          mainBold={mainBold}
          mainItalic={mainItalic}
          mainSize={mainSize}
          mainColor={mainColor}
          buttonFont={buttonFont}
          buttonBold={buttonBold}
          buttonItalic={buttonItalic}
          buttonSize={buttonSize}
          buttonColor={buttonColor}
          buttonBackgroundColor={buttonBackgroundColor}
        />
        <Actions />
      </form>
    )
  }
}
