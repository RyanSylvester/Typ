import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import {words} from 'popular-english-words'
import Feeder from './../../../components/Feeder'
import Eater from './../../../components/Eater'


export default function Index({
  wordPoolSize,
  feedSize
}) {
  const [wordPool, setWordPool] = useState({});
  useEffect(() => {
    setWordPool(words.getMostPopular(wordPoolSize))
  }, [])

  const [feed, setFeed] = useState({});
  useEffect(() => {
    let newFeed = []
    const keys = Object.keys(wordPool)
    for (let i = 0; i < feedSize; i++) {
        let randomWord = wordPool[keys[Math.floor(Math.random() * keys.length)]]
        newFeed.push(randomWord);
    }
    setFeed(newFeed)
  }, [wordPool]) 

  const [activeWord, setActiveWord] = useState('')
  useEffect(()=> {
    setActiveWord(feed[0])
  }, [feed, activeWord])

  const [input, setInput] = useState('');
  const handleChange = (e) => {
    setInput(e.target.value);
  }

  useEffect(() => {
    if(input === activeWord){
      setInput('')
      setFeed(Array.from(feed).slice(1));
    }
  }, [input])



  
    
  return (
    <div className={'cycle'}>
      <Feeder 
        activeWord = {activeWord}
      />
      <Eater 
        input = {input}
        handleInputChange = {handleChange}
      />
    </div>
  )
}

Index.propTypes = {
  wordPoolSize: PropTypes.number,
  feedSize: PropTypes.number
};

Index.defaultProps = {
  wordPoolSize: 500,
  feedSize: 50
};
