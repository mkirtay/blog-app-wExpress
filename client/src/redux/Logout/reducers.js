import actions from './actions'

const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_DELETE_BLOG: {
            return {...state, logout: action.payload}
        }
        default:
            return state;
    }
};

export default reducer;

