import React, { useState, useEffect } from 'react'
import Questionaire from './Questionaire'

function Quiz({url}) {
    const [quizData, setQuizData] = useState(null)
    const [selected, setSelected] = useState(false)

    useEffect(()=>{
        console.log(url)
        fetch(url).then(res=>res.json()).then(json=>{
            setQuizData(json.results)
            console.log(json.results)
        })
    }, [url])

    // const handleClick = (i, e) => {
    //     document.querySelectorAll('.answer').forEach(answer => {
    //         answer.id = ''
    //     })
    //     e.target.id = 'selected'
    //     setSelected(true)
    // }

  return quizData && ( 
    <Questionaire data={quizData[0]}/>
  )
}

export default Quiz