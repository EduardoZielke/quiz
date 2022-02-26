import './App.css';
import { useEffect, useState } from 'react';
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

  useEffect(()=>{

    setCategory(null)
    setDifficulty(null)
    
  }, [url])

  const handleChange = (e) => {
    if(e.target.id === 'selectTheme') {
      if(e.target.value === 'none') {
        setCategory(null)
        return
      }
      setCategory(e.target.value)
      return
    }
    if(e.target.value === 'none'){
      setDifficulty(null)
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
                <option value='none'>None Selected</option>
                <option value='23'>History</option>
                <option value='9'>General Knowledge</option>
                <option value='24'>Politics</option>
                <option value='22'>Geography</option>
                <option value='20'>Mythology</option>
                <option value='21'>Sports</option>
                <option value='27'>Animals</option>
              </select>
            </label>
            <label htmlFor='selectDifficulty'>Select Difficulty:
              <select className='selectDifficulty form-select' id='selectDifficulty' onChange={handleChange}>
                <option value='none'>None Selected</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
              </select>
            </label>
          </div>
          <div className='btnStart'>
            {category && difficulty ? (
              <button className='btn btn-success btn-green border border-dark' onClick={setUrl}>Start</button>
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
