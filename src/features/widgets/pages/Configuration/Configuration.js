import React, { PureComponent } from 'react'

import { Field, Panel, PanelButton } from '../../../../ui/molecules'
import { Tabs } from '../../../../ui/organisms'
import { FieldWrapper } from '../../../../ui/templates'
import { Sample, BackgroundColorPicker } from '../../organisms'
import { TabsContainer } from '../../templates'
import italicIcon from '../../../../assets/italic.svg'
import boldIcon from '../../../../assets/bold.svg'

const availableTabs = [
  { key: 'title', value: 'Заголовок' },
  { key: 'mainText', value: 'Основной текст' },
  { key: 'button', value: 'Кнопка' },
]

export class Configuration extends PureComponent {
  state = {
    activeTab: availableTabs[0].key,
    config: {
      name: '',
      header: 'Стать клиентом',
      headerBold: false,
      headerItalic: false,
      headerSize: '30',
      backgroundColor: '#fdfdfd',
      headerColor: '#6f7e8e',
      mainSize: '14',
      mainColor: '#6f7e8e',
      buttonSize: '14',
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

  handleTabClick = key => {
    this.setState({
      activeTab: key,
    })
  }

  handleColorClick = color => {
    this.setState(({ config }) => ({
      config: {
        ...config,
        backgroundColor: color,
      },
    }))
  }

  render() {
    const { config, activeTab } = this.state
    const {
      header,
      headerBold,
      headerItalic,
      name,
      backgroundColor,
      headerSize,
      headerColor,
      mainSize,
      mainColor,
      buttonSize,
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
        <TabsContainer>
          <Tabs tabs={availableTabs} activeTab={activeTab} onClick={this.handleTabClick}>
            <Panel>
              <PanelButton
                id="headerItalic"
                iconSrc={italicIcon}
                checked={headerItalic}
                onChange={this.handlePanelButtonClick}
              />
              <PanelButton
                id="headerBold"
                iconSrc={boldIcon}
                checked={headerBold}
                onChange={this.handlePanelButtonClick}
              />
            </Panel>
            <Panel>bar</Panel>
            <Panel>baz</Panel>
          </Tabs>
        </TabsContainer>
        <BackgroundColorPicker
          backgroundColor={backgroundColor}
          handleFieldChange={this.handleFieldChange}
          onClick={this.handleColorClick}
        />
        <Sample
          header={header}
          headerSize={headerSize}
          headerBold={headerBold}
          headerItalic={headerItalic}
          headerColor={headerColor}
          backgroundColor={backgroundColor}
          mainSize={mainSize}
          mainColor={mainColor}
          buttonSize={buttonSize}
        />
      </form>
    )
  }
}
