import { user_data } from "@/user-data";
import { createSlice } from "@reduxjs/toolkit";

var initialState:user_data = {
    name: "",
    email: "",
    role: 2,
    image: "",
    project: "",
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
            state.project = action.payload.proj_title;
        },
        signoutUser(state)
        {
            state.name = ""
            state.email = ""
            state.role = 2
            state.image = ""
            state.project = ""
        }

    }    
});

export const {signinUser, signoutUser } = userSlice.actions;
export default userSlice.reducer; 

