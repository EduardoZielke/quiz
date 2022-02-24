import './App.css';
import { useState } from 'react';
import Quiz from './components/Quiz'
import {useDispatch, useSelector} from 'react-redux'

function App() {
  const url = useSelector(state => state.url)
  const dispatch = useDispatch()
  const [category, setCategory] = useState(null)
  const [difficulty, setDifficulty] = useState(null)

  const setUrl = () => {
    dispatch({
      type: 'SET_URL',
      url: `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    })
  }

  const handleChange = (e) => {
    if(e.target.id === 'selectTheme') {
      setCategory(e.target.value)
      return
    }
    setDifficulty(e.target.value)
  }

  return (
    <div className="app">
      {
        url ? (
          <Quiz url={url}/>
        ) : (
        <div className='setTheme'>
          <div className='selectsWrapper'>
            <label htmlFor='selectTheme'>Select Category:
              <select className='selectTheme form-select' id='selectTheme' onChange={handleChange}>
                <option value='23'>History</option>
                <option value='9'>General Knowledge</option>
                <option value='24'>Politics</option>
              </select>
            </label>
            <label htmlFor='selectDifficulty'>Select Difficulty:
              <select className='selectDifficulty form-select' id='selectDifficulty' onChange={handleChange}>
                <option value='easy'>Facil</option>
                <option value='medium'>médio</option>
                <option value='hard'>Dificil</option>
              </select>
            </label>
          </div>
          <div className='btnStart'>
            {category && difficulty ? (
              <button className='btn btn-success' onClick={setUrl}>Start</button>
            ) : (
              <button className='btn btn-secondary'>Start</button>
            )}
          </div>
        </div>
        )
      }
    </div>
  );
}

export default App;
