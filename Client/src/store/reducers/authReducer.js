const initialState = {
    isAuthenticated: false,
    user: null,
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESS':
            console.log("running........")
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case 'USER_LOGIN_FAIL':
            console.log("running........RUN")
            return state
        default:
            return state
    }
}

export default authReducer;