const initialState = {
    gallery: sessionStorage.length === 0  ? {} : JSON.parse(sessionStorage.getItem('gallery')),
    currentImg: ''
}

const gallery = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_IMG': {
            return {
                ...state,
                gallery: { ...state.gallery, [action.imgKey]: action.payload }
            }
        }
        case 'SET_CURRENT_IMG': {
            return {
                ...state,
                currentImg: action.payload
            }
        }
        default:
            return state
    }
}

export default gallery

