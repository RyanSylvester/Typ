import React from 'react'
import Cycle from './cycle'

export default function index() {
  return (
    <div className={'dojo'}>
      <h1 className={'header'}>DOJO</h1>
      <Cycle 
        wordPoolSize={500}
        feedSize={50}
      />
    </div>
  );
}


