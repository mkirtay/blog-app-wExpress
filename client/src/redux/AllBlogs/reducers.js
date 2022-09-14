import actions from './actions'

const initialState = []

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.SET_BLOG_LIST: {
            return {...state, blogList: action.payload}
        }
        default:
            return state;
    }
};

export default reducer;

