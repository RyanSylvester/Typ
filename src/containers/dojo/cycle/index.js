import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Feeder from './../../../components/Feeder'
import Eater from './../../../components/Eater'

export default function Index({
  eats,
  count,
  input,
  activeWord,
  timerOpacity,
  handleChange,
  onDeck
}) {
  
  return (
    <div className={'cycle'}>
      <Feeder 
        activeWord = {activeWord}
        onDeck = {onDeck}
      />
      <Eater 
        input = {input}
        handleInputChange = {handleChange}
      />
      <div className={'statsBar'}>
        <div className={'eats'}>{eats}</div>
        <div className={'counter'} style={{opacity: timerOpacity}}>{count}</div>
      </div>
    </div>
  )
}


