import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export default function Index({
  tabs,
  handleTabSwitch,
  activeTab
}) {

  const tabsDisplay = tabs.map((tab) => 
    <Tab 
      label={tab} 
      sx={{
        fontFamily: tab === activeTab ? 'LatoBold' : 'Lato',
        color: tab === activeTab ? 'rgba(95, 158, 160,1)' : 'rgba(95, 158, 160,0.4)',  
        fontSize: 30
      }}
    />
  )
  return (
    <div className={"headerMenu"}>
      <Tabs 
      className={"headerTabs"}
      onChange={handleTabSwitch}
      centered
      >
        {tabsDisplay}
          {/* <Tab label="DOJO" 
          sx={{fontFamily: 'LatoBold', color:'#5f9ea0', fontSize: 30}}
          />
          <Tab label="STATS"
          sx={{fontFamily: 'LatoBold', color:'#5f9ea0', fontSize: 30}}
          /> */}
      </Tabs>
    </div>
  )
}
