import React from 'react'
import Cycle from './cycle'

export default function index() {
  return (
    <div className={'dojo'}>
      <Cycle 
        wordPoolSize={500}
        feedSize={100}
        timerDuration={20}
      />
    </div>
  );
}


