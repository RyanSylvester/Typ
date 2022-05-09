import React from 'react'

export default function Index({
    results,
    cycleIsActive,
    cycleIsReady
}) {
  return (
      <>
    {!cycleIsActive && !cycleIsReady && 
        <div className='results'>
            <div className={'resultsText'}>Results</div>
            <div><strong>WPM:</strong> {results.WPM}</div>
            <div><strong>Words: </strong>{results.totalEats}</div>
        </div>
    }
    </>
  )
}
