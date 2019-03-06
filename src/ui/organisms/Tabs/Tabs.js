import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Tab } from '../../atoms'
import { gray } from '../../../lib/colors'

const TabList = styled.div`
  display: flex;
`

export const TabContent = styled.div`
  border: 1px solid ${gray.light};
  padding: 15px 20px;
`

export const Tabs = ({ activeTab, tabs, onClick, children }) => {
  const tabIndex = tabs.findIndex(tab => tab.key === activeTab)

  return (
    <div>
      <TabList>
        {tabs.map(({ key, value }) => (
          <Tab type="button" key={key} isActive={activeTab === key} onClick={event => onClick(key)}>
            {value}
          </Tab>
        ))}
      </TabList>
      <TabContent>{React.Children.toArray(children)[tabIndex]}</TabContent>
    </div>
  )
}

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}
