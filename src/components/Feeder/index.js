import React, { useEffect, useState } from 'react'

export default function Index({
    wordPool,
    feedSize
}) {
    
    const [feed, setFeed] = useState({})
    useEffect(() => {
        let newFeed = []
        const keys = Object.keys(wordPool)
        for (let i = 0; i < feedSize; i++) {
            let randomWord = wordPool[keys[Math.floor(Math.random() * keys.length)]]
            newFeed.push(randomWord);
        }
        setFeed(newFeed)
    }, [wordPool]) 

    return (
        <div className={'feeder'}>
            <div>{feed[0]}</div>
        </div>
    )
}
