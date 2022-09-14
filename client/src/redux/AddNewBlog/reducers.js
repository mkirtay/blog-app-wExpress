import actions from "./actions";
const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_ADD_NEW_BLOG: {
            return {...state, addNewBlog: action.payload}
        }
        default:
            return state;
    }
}

export default reducer;