const initialState = {
    user: null,
    latestPost: null
}

const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_PROFILE':
            return {
                ...state,
                user: action.payload
            }
        case 'UPDATE_LATEST_POST':
            return {
                ...state,
                latestPost: action.payload
            }    
        default: 
            return {
                ...state
            }
    }
}

export default userProfileReducer