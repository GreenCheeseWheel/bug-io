import { user_data } from "@/user-data";
import { createSlice } from "@reduxjs/toolkit";

var initialState:user_data = {
    name: "",
    email: "",
    role: 2,
    image: ""
};

var userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signinUser(state, action)
        {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.image = action.payload.image;
        },
        signoutUser(state)
        {
            state.name = "",
            state.email = "",
            state.role = 2,
            state.image = ""
        }

    }    
});

export const {signinUser, signoutUser } = userSlice.actions;
export default userSlice.reducer; 

