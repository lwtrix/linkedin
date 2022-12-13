import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from "../reducers/UserProfileReducer";

const mainReducer = {
    user: userProfileReducer
}

export const store = configureStore({
    reducer: mainReducer
})