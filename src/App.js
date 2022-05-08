import Dojo from './containers/dojo'
import Stats from './containers/stats'
import HeadMenu from './containers/headMenu'
import React, { useState } from 'react'
import './style.css'

function App() {
  
  const tabs = ['DOJO', 'STATS']
  const handleTabSwitch = () =>{}
  const [activeTab, setActiveTab] = useState('DOJO')

  return (
    <> 
      <HeadMenu
        tabs = {tabs}
        handleTabSwitch = {handleTabSwitch}
        activeTab = {activeTab}
      />
      <Dojo/>
    </>
  );
}

export default App;
