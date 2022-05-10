import Dojo from './containers/dojo'
import Stats from './containers/stats'
import HeadMenu from './containers/headMenu'
import React, { useState } from 'react'
import './style.css'

function App() {
  
  const tabs = ['DOJO', 'STATS']
  const handleTabSwitch = (e, value) =>{
    setActiveTab(value);
  }
  const [activeTab, setActiveTab] = useState(0);

  const tabSelection = () => {
      switch(tabs[activeTab]) {
        case 'DOJO':
          return <Dojo
            wordPoolSize={500}
            feedSize={100}
            timerDuration={20}
          />
        case 'STATS':
          return <Stats/>
        default:
          return <Dojo/>
      }
    }

  return (
    <> 
      <HeadMenu
        tabs = {tabs}
        handleTabSwitch = {handleTabSwitch}
        activeTab = {activeTab}
      />
      {tabSelection()}
    </>
  );
}

export default App;
