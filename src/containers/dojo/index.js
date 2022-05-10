import React, { useState, useEffect } from 'react'
import {words} from 'popular-english-words'
import CycleResults from './cycleResults'
import Cycle from './cycle'

export default function Index({
  wordPoolSize,
  feedSize,
  timerDuration
}) {

  // Cycle modes
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
      WPM: eats / (timerDuration / 60),
      accuracy: ((eats / (eats + mistakes)) * 100).toFixed()
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
    // If space
    if(event.key === ' ' && cycleIsActive){
      if (input === activeWord){
        setEats(eats+1);
      } else{
        setMistakes(mistakes+1);
      }
      nextWord();
    }
    // If anything
    if(event.key && !cycleIsActive && cycleIsReady){
      startCycle();
    }
  };

  const [cycleResults, setCycleResults] = useState({
    totalEats: 0,
    WPM: 0,
    accuracy: 0
  });

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
      // target value, prevent spaces
      setInput(e.target.value.replace(/\s/g, ''));
    }
  }

  // eats are words from the feeder that are... eaten.
  const [eats, setEats] = useState(0);
  const [mistakes, setMistakes] = useState(0);

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

  return (
    <div className={'dojo'} onKeyDown={handleKeyPress}>
      <CycleResults
        results={cycleResults}
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