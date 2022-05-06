import React from 'react'
import Feeder from './../../../components/Feeder'
import Eater from './../../../components/Eater'

export default function index() {
  return (
    <div className={'cycle'}>
      <Feeder />
      <Eater />
    </div>
  )
}
