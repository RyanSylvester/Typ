import React, { useState, useEffect } from 'react'
import {words} from 'popular-english-words'
import CycleResults from './cycleResults'
import Cycle from './cycle'

export default function Index({
  wordPoolSize,
  feedSize,
  timerDuration
}) {
  const startCycle = () => {
    setTimerOpacity(1);
    setCount(timerDuration);
    setEats(0);
    setCycleIsReady(false);
    setCycleIsActive(true);
  }

  const endCycle = () => {
    setCycleIsActive(false);
    setTimerOpacity(0.2);
  }

  const saveCycleResults = () => {
    setCycleResults({
      totalEats: eats,
      WPM: eats / (timerDuration / 60)
    })
  }

  const nextWord = () => {
    setInput('');
    setFeed(Array.from(feed).slice(1));
  }

// Detect button press  
  const handleKeyPress = (event) => {
    // If esc
    if(event.key === 'Escape'){
      endCycle();
      setCycleIsReady(true);
    }
    // If anything
    if(event.key && !cycleIsActive && cycleIsReady){
      startCycle();
    }
  };

  const [cycleResults, setCycleResults] = useState({});

  const [cycleIsReady, setCycleIsReady] = useState(true);
  const [cycleIsActive, setCycleIsActive] = useState(false);

  useEffect(() => {
    if(cycleIsReady){
      setCount(timerDuration);
      setInput('');
    }
  }, [cycleIsReady])

  const [timerOpacity, setTimerOpacity] = useState(0);
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
    let newDeck = []
    for(let i = 0; i < 10; i++){
      newDeck.push(feed[i+1]);
    }
    setOnDeck(newDeck);
  }, [feed, activeWord]);

  const [onDeck, setOnDeck] = useState([]);

  const [input, setInput] = useState('');
  const handleChange = (e) => {
    if(cycleIsActive) {
      setInput(e.target.value);
    }
  }

  const [eats, setEats] = useState(0);

  const [count, setCount] = useState(timerDuration);
  const prevCount = count;

  useEffect(() => {
    if (count > 0 && cycleIsActive){
      const interval = setInterval(() => {
        setCount(prevCount - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else{
      saveCycleResults()
      endCycle();
    }
  }, [count, cycleIsActive]);

  useEffect(() => {
    if(input === activeWord){
      if (cycleIsActive){
        setEats(eats+1)
      }
      nextWord();
    }
  }, [input])

  return (
    <div className={'dojo'} onKeyDown={handleKeyPress}>
      <CycleResults
        results = {cycleResults}
        cycleIsActive={cycleIsActive}
        cycleIsReady={cycleIsReady}
      />
      <Cycle 
        eats={eats}
        count={count}
        input={input}
        activeWord={activeWord}
        timerOpacity={timerOpacity}
        handleChange={handleChange}
        onDeck={onDeck}
      />
    </div>
  );
}