import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import {words} from 'popular-english-words'
import Feeder from './../../../components/Feeder'
import Eater from './../../../components/Eater'


export default function Index({
  wordPoolSize,
  feedSize,
  timerDuration
}) {
  const startCycle = () => {
    setCount(timerDuration);
    setCycleIsActive(true);
  }

  const endCycle = () => {
    setCycleIsActive(false);
    setCount(timerDuration);
  }

  const nextWord = () => {
    setInput('');
    setFeed(Array.from(feed).slice(1));
  }

// Detect button press  
  const handleKeyPress = (event) => {
    console.log(event.key)
    // If esc
    if(event.key === 'Escape' && cycleIsActive){
      endCycle();
    }
    // If anything
    if(event.key && !cycleIsActive){
      console.log(cycleIsActive)
      startCycle();
    }
  };


  const [cycleIsActive, setCycleIsActive] = useState(false);

  const [wordPool, setWordPool] = useState({});
  useEffect(() => {
    setWordPool(words.getMostPopular(wordPoolSize));
  }, [])

  const [feed, setFeed] = useState({});
  useEffect(() => {
    let newFeed = [];
    const keys = Object.keys(wordPool);
    for (let i = 0; i < feedSize; i++) {
        let randomWord = wordPool[keys[Math.floor(Math.random() * keys.length)]];
        newFeed.push(randomWord);
    }
    setFeed(newFeed);
  }, [wordPool]);

  const [activeWord, setActiveWord] = useState('');
  useEffect(()=> {
    setActiveWord(feed[0]);
  }, [feed, activeWord]);

  const [input, setInput] = useState('');
  const handleChange = (e) => {
    if(cycleIsActive) {
      setInput(e.target.value);
    }
  }

  const [count, setCount] = useState(timerDuration);
  const prevCount = count;

  useEffect(() => {
    if (count > 0 && cycleIsActive){
      const interval = setInterval(() => {
        setCount(prevCount - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else{
      endCycle();
    }
  }, [count, cycleIsActive]);

  useEffect(() => {
    if(input === activeWord){
      nextWord();
    }
  }, [input])

  return (
    <div className={'cycle'} onKeyDown={handleKeyPress}>
      <Feeder 
        activeWord = {activeWord}
      />
      <Eater 
        input = {input}
        handleInputChange = {handleChange}
      />
      <div className={'counter'}>{count}</div>
    </div>
  )
}

Index.propTypes = {
  wordPoolSize: PropTypes.number,
  feedSize: PropTypes.number,
  timerDuration: PropTypes.number,
  count: PropTypes.number
};

Index.defaultProps = {
  wordPoolSize: 500,
  feedSize: 50,
  timerDuration: 20
};
