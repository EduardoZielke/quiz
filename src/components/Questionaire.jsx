import React, { useEffect, useState } from 'react'

function Questionaire({ data: {question, correct_answer, incorrect_answers}}) {
    const [selected, setSelected] = useState(false)

    const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(()=> Math.random() - 0.5)

    const handleClick = (e) => {
        document.querySelectorAll('.answer').forEach(answer => {
            answer.id = ''
        })
        if(e.target.classList.contains('correct')) {
            console.log('resposta correta')
        }
        e.target.id = 'selected'
        setSelected(true)
    }

    const renderAnswers = (answers) => {
        
        return answers.map((answer, index) =>
            
            (answer) === correct_answer ? (
                <div key={index} className='shadow-sm p-3 mb-5 rounded answer correct' onClick={handleClick}>{answer}</div>
            ) : (

                <div key={index} className='shadow-sm p-3 mb-5 rounded answer' onClick={handleClick}>{answer}</div>
            )            
        )
    }

  return ( shuffledAnswer && question?
    <div className='quizWrapper'>
        <h1 className='shadow p-3 mb-5 bg-white rounded question' dangerouslySetInnerHTML={{__html: question}} />
        <div className='quizAnswers'>
            {renderAnswers(shuffledAnswer)}
        </div>
        {selected ? (
            <button className='btn btn-lg btn-success btn-proximo btn-green border border-dark'>Próximo</button>
        ) : (
            <button className='btn btn-lg btn-secondary btn-proximo'>Próximo</button>
        )}
    </div> : null
  )
}

export default Questionaire