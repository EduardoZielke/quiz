// export const initialState = {
//     url: 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple', 
//     right_answers: 0,
//     history: [{0: 'ANDERSON', 1: 'Williams', 2: 'Chowder', 3: 'Schnatter', question: 'What is the famous Papa John&#039;s last name?', correct_answer: 'Schnatter', choosed: 'Williams'}],
//     page: 10
// }
export const initialState = {
    url: '', 
    right_answers: 0,
    history: [],
    page: 0
}

export const quizReducer = (state, action) => {
    switch (action.type) {
        case 'SET_URL': {
            return {
                ...state,
                url: action.url
            }
        }
        case 'CORRECT_ANSWER':
            return {
                ...state,
                right_answers: state.right_answers + 1
            }
        case 'ADD_HISTORY':
            return {
                ...state,
                history: [...state.history, ...action.payload]
            }
        case 'CHANGE_PAGE':
            return {
                ...state,
                page: state.page + 1
            }
        case 'PLAY_AGAIN':
            return {
                url: '', 
                right_answers: 0,
                history: [],
                page: 0
            }     
        default:
            return state
    }
}
