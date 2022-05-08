import React from 'react'

export default function Index({
    activeWord,
    onDeck
}) {
    
    const onDeckDisplay = onDeck.map((word, i) =>
        <div className={'onDeckWords'} style={{opacity:1-(0.1*i)}}>{word}</div>
    )
    return (
        <div className={'feeder'}>
            <div className={'activeWord'}>{activeWord}</div>
            <div className={'onDeck'}>
                {onDeckDisplay}
            </div>
        </div>
    )
}
