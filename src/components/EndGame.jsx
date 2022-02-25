import React from 'react'
import {useSelector} from 'react-redux'

function EndGame() {
    const right_answers = useSelector(state => state.right_answers)
    const history = useSelector(state => state.history)

    const renderHistory = (array) => {
        return array.map((item, index) => <>
                <h1 key={index} className='shadow p-3 mb-5 bg-white rounded question' 
                dangerouslySetInnerHTML={{__html: item.question}} />    
                <div className='quizAnswers'>
                    {item.answers.map((answer, index) => 
                        <div key={index} className='shadow-sm p-3 mb-5 rounded answer'
                         dangerouslySetInnerHTML={{__html: answer}} />    
                    )}
                </div>
            </>
        )
    }

  return (
      <div className='endGameWrapper'>

        <div className='result'>
            <div className='resultNumber'>
                <span className='emoji'>&#128512;</span>
                <h1>Você acertou 5/10 questões!</h1>
            </div>
        </div>

        <h1 className='shadow-lg p-3 mb-5 bg-white rounded question mt-5'>testando e</h1>
        <div className='quizAnswers'>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
        </div>

        <h1 className='shadow-lg p-3 mb-5 bg-white rounded question mt-5'>testando e</h1>
        <div className='quizAnswers'>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
        </div>

        <h1 className='shadow-lg p-3 mb-5 bg-white rounded question mt-5'>testando e</h1>
        <div className='quizAnswers'>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
        </div>

        <h1 className='shadow-lg p-3 mb-5 bg-white rounded question mt-5'>testando e</h1>
        <div className='quizAnswers'>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
            <div className='shadow-sm p-3 mb-4 rounded resultAnswer'>Aqui vai as respostas</div>
        </div>

        

      </div> 
  )
}

export default EndGame