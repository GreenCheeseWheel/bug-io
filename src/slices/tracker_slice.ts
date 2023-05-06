import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    new_tickets: 0, 
    triaged_tickets: 0, 
    accepted_tickets: 0, 
    pending_tickets: 0, 
    resolved_tickets: 0, 
    unresolved_tickets: 0,
}

const ticketSlice = createSlice(
    {
        name:"ticket",
        initialState,
        reducers: {
            updateTickets(state)
            {
                state.new_tickets += 1;
            }
        }

    }
)

export const {updateTickets} = ticketSlice.actions;
export default ticketSlice.reducer;