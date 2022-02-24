import React, { useState, useEffect } from 'react'
import Questionaire from './Questionaire'
import { useSelector } from 'react-redux'

function Quiz({url}) {
    const [quizData, setQuizData] = useState(null)
    const page = useSelector(state => state.page)
    const state = useSelector(state => state)

    useEffect(()=>{
        console.log(state);
    }, [state])

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(json=>{
            setQuizData(json.results)
        })
    }, [url])

  return quizData && ( 
    <Questionaire data={quizData[page]}/>
  )
}

export default Quiz