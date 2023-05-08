import { ticket_schema } from "@/ticket_col_format";
import { createSlice } from "@reduxjs/toolkit"

// This keeps the array of projects in memory

const initialState = {
    projectArr: [ 
        {proj_id: "0", 
        proj_title:"", 
        proj_description:"", 
        proj_creator:"", 
        proj_participants:[""],
        proj_tickets: [
            {
                ticket_id: "0", 
                ticket_title: "",
                ticket_description: "",
                ticket_status: "",
            },
        
        ]
    } , 
        
    ]
}

const projectArrSlice = createSlice(
    {
        name: "projectArr",
        initialState,
        reducers: {
            setProjArr(state, action)
            {
                state.projectArr = action.payload;
            },
        }
    }
);

export const {setProjArr} = projectArrSlice.actions;
export default projectArrSlice.reducer;