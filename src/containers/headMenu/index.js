import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export default function Index({
  tabs,
  handleTabSwitch,
  activeTab
}) {

  const tabsDisplay = tabs.map((tab, i) => 
    <Tab 
      label={tab} 
      sx={{
        fontFamily: tab === tabs[activeTab] ? 'LatoBold' : 'Lato',
        color: tab === tabs[activeTab] ? 'rgba(95, 158, 160,1)' : 'rgba(95, 158, 160,0.4)',  
        fontSize: 30
      }}
      classes={{
        selected: 'activeTab'
      }}

      key={i}
      value={i}
    />
  )
  return (
    <div className={"headerMenu"}>
      <Tabs 
      className={"headerTabs"}
      onChange={handleTabSwitch}
      value = {activeTab}
      classes={{
        indicator: 'menuIndicator'
      }}
      centered
      >
        {tabsDisplay}
      </Tabs>
    </div>
  )
}
