import React from 'react'

export default function Index({
    activeWord
}) {
    return (
        <div className={'feeder'}>
            <div>{activeWord}</div>
        </div>
    )
}
