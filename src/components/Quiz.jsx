import React, { useState, useEffect } from 'react'
import Questionaire from './Questionaire'
import { useSelector } from 'react-redux'
import EndGame from './EndGame'

function Quiz({url}) {
    const [quizData, setQuizData] = useState(null)
    const page = useSelector(state => state.page)

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(json=>{
            setQuizData(json.results)
        })
    }, [])

  return quizData && ( 
    page < 10 ?
    <Questionaire data={quizData[page]}/>
    :
    <EndGame/>   
  )
}

export default Quiz