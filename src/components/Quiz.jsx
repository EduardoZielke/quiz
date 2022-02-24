import React, { useState, useEffect } from 'react'

function Quiz({url}) {
    const [quizData, setQuizData] = useState(null)
    const [selected, setSelected] = useState(false)

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(json=>{
            setQuizData(json.results)
            console.log(json.results)
        })
    }, [url])

    const handleClick = (e) => {
        document.querySelectorAll('.answer').forEach(answer => {
            answer.id = ''
        })
        e.target.id = 'selected'
        setSelected(true)
    }

  return ( quizData ?
    <div className='quizWrapper'>
        <h1 className='shadow p-3 mb-5 bg-white rounded question'>Aqui vai a pergunta do quiz</h1>
        <div className='quizAnswers'>
            <div className='shadow-sm p-3 mb-5 rounded answer' onClick={handleClick}>Primeira resposta</div>
            <div className='shadow-sm p-3 mb-5 rounded answer' onClick={handleClick}>Segunda resposta</div>
            <div className='shadow-sm p-3 mb-5 rounded answer' onClick={handleClick}>Terceira resposta</div>
            <div className='shadow-sm p-3 mb-5 rounded answer' onClick={handleClick}>Quarta resposta</div>
        </div>
        {selected ? (
            <button className='btn btn-lg btn-success btn-proximo btn-green border border-dark'>Próximo</button>
        ) : (
            <button className='btn btn-lg btn-secondary btn-proximo'>Próximo</button>
        )}
    </div> : null
  )
}

export default Quiz