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

  return (

    

    <div className={'cycle'}>
      <Feeder 
        wordPool = {wordPool}
        feedSize = {feedSize}
      />
      <Eater />
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
