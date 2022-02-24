import React, { useState, useEffect } from 'react'

function Quiz({url}) {
    const [quizInfo, setQuizInfo] = useState(null)

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(json=>{
            setQuizInfo(json.results)
            console.log(json.results)
        })
    }, [url])

    const renderQuiz = (array) => {
        return array.map((item, index) =>
            <div key={index}>
                <h5>{item.question}</h5>
                {item.incorrect_answers.map((item, index)=>
                    <p key={index}>{item}</p>
                )}  
            </div> 
        )
    }

  return ( 
    quizInfo ?
        renderQuiz(quizInfo)
    : null
  )
}

export default Quiz