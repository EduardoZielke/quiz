export const initialState = {
    url: '', 
    right_answers: 0,
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
        case 'CHANGE_PAGE':
            return {
                ...state,
                page: state.page + 1
            }         
        default:
            return state
    }
}
