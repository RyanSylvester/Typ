import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export default function Index({
  tabs,
  handleTabSwitch,
  activeTab
}) {


  return (
    <div className={"headerMenu"}>
      <Tabs 
      className={"headerTabs"}
      onChange={handleTabSwitch}
      centered
      >
          <Tab label="DOJO" 
          sx={{fontFamily: 'LatoBold', color:'#5f9ea0', fontSize: 30}}
          />
          <Tab label="STATS"
          sx={{fontFamily: 'LatoBold', color:'#5f9ea0', fontSize: 30}}
          />
      </Tabs>
    </div>
  )
}
