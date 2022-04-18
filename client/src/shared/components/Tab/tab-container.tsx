import { FC } from 'react'
import { Tabs, Tab, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import ITabContainerItem from './types/tab-container-item'
import { tabStyle } from './tab.style'

export interface ITabContainerProps {
  tabs: Array<ITabContainerItem>
}
const TabContainer: FC<ITabContainerProps> = ({ tabs }) => {
  return (
    <Tabs isLazy variant="enclosed" align="center" isFitted>
      <TabList maxWidth="xs">
        {tabs.map((tab: ITabContainerItem) => (
          <Tab key={tab.id} id={tab.id} {...tabStyle}>
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab: ITabContainerItem) => (
          <TabPanel key={tab.id}>{tab.component}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}
export default TabContainer
