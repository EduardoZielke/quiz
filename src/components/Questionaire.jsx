import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import EndGame from './EndGame'

function Questionaire({ data: {question, correct_answer, incorrect_answers}}) {
    const [selected, setSelected] = useState(false)
    const [choosed, setChoosed] = useState('')
    const [blockCorrect, setBlockCorrect] = useState(false)
    const [shuffledAnswer, setshuffledAnswer] = useState([])
    const dispatch = useDispatch()
    const page = useSelector(state => state.page)

    useEffect(()=>{
        console.log(page)
        shuffled()
        document.querySelectorAll('.answer').forEach(answer => {
            answer.id = ''
        })
        setBlockCorrect(false)
        setSelected(false)
    }, [page])

    const shuffled = () => {
        setshuffledAnswer([correct_answer, ...incorrect_answers].sort(()=> Math.random() - 0.5))
    }

    const handleClick = (e) => {
        document.querySelectorAll('.answer').forEach(answer => {
            answer.id = ''
        })
        e.target.id = 'selected'
        setSelected(true)
        setChoosed(e.target.innerHTML)

        if(e.target.classList.contains('correct')) {
            if(blockCorrect) return

            dispatch({type:'CORRECT_ANSWER'})
            setBlockCorrect(true)
        }
    }

    const handleNext = () => {
        dispatch({type: 'ADD_HISTORY', payload:[{answers:[...shuffledAnswer], question, correct_answer, choosed}]})
        dispatch({type: 'CHANGE_PAGE'})
    }

    const renderAnswers = (answers) => {
        return answers.map((answer, index) =>
            (answer) === correct_answer ? (
                <div key={index} className='shadow-sm p-3 mb-5 rounded answer correct' 
                onClick={handleClick} dangerouslySetInnerHTML={{__html: answer}} />
            ) : (
                <div key={index} className='shadow-sm p-3 mb-5 rounded answer' 
                onClick={handleClick} dangerouslySetInnerHTML={{__html: answer}}/>
            )            
        )
    }

  return ( shuffledAnswer && question ?
    <div className='quizWrapper'>
        <h1 className='shadow p-3 mb-5 bg-white rounded question' dangerouslySetInnerHTML={{__html: question}} />
        <div className='quizAnswers'>
            {renderAnswers(shuffledAnswer)}
        </div>
        {selected ? (
            <button className='btn btn-lg btn-success btn-proximo btn-green border border-dark'
            onClick={handleNext}>Next</button>
        ) : (
            <button className='btn btn-lg btn-secondary btn-proximo'>Next</button>
        )}
    </div> : null
  )
}

export default Questionaire