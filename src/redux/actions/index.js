export const getUserProfile = () => {
    return async (dispatch, getState) => {
        const options = {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0'
            }
        }
    
        const res = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', options);
        const userData = await res.json()
        dispatch({
            type: 'GET_USER_PROFILE',
            payload: userData
        })
    }   
}
