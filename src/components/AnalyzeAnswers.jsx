import React from 'react'

function AnalyzeAnswers({answer, correct_answer, choosed}) {
  return ( <>
      {correct_answer === answer ? (
        <div className='shadow-sm p-3 mb-5 rounded resultAnswer bg-green'
        dangerouslySetInnerHTML={{__html: answer}}/>
      ) : (
        choosed === answer ? (
          <div id='selected' className='shadow-sm p-3 mb-5 rounded resultAnswer'
          dangerouslySetInnerHTML={{__html: answer}}/>
        ) : (
          <div className='shadow-sm p-3 mb-5 rounded resultAnswer'
          dangerouslySetInnerHTML={{__html: answer}}/>
        )
      )}
    
    </>

  )
}

export default AnalyzeAnswers