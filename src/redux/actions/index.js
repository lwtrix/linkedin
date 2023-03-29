export const getUserProfile = () => {
  return async (dispatch, getState) => {
    const baseEndpoint = process.env.REACT_APP_BE_URL

    const res = await fetch(
      `${baseEndpoint}/users/63ce67c5b87b8603d6e1fb31`
    );
    const userData = await res.json();
    console.log(userData)
    dispatch({
      type: "GET_USER_PROFILE",
      payload: userData,
    });
  };
};
export const newTextArea = (userName) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "GET_NEW_NAME",
      payload: userName,
    });
  };
  console.log(userName);
};

export const submitEditProfile = (e, name, surname, title, bio, area) => {
  e.preventDefault();
  const baseEndpoint = process.env.REACT_APP_BE_URL
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      surname: surname,
      title: title,
      bio: bio,
      area: area,
    }),
  };
  return async (dispatch, getState) => {
    const res = await fetch(
      `${baseEndpoint}/users/63ce67c5b87b8603d6e1fb31`,
      options
    );

    dispatch(getUserProfile());
  };
};
