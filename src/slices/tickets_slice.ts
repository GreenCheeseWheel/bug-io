import { ticket_schema } from "@/ticket_col_format";
import {createSlice} from "@reduxjs/toolkit"

// We will retrieve each ticket as it is from the db
// with a max of 5 for each project as not to overload memory
// then store it in state.ticket_arr

const initialState = {
    ticket_arr: [{proj_id: "0", ticket_title: "", ticket_description: "", ticket_status: 0}],
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
            updateTickets(state, action)
            {
                var newCount = 0;
                var triagedCount= 0;
                var acceptedCount= 0;
                var pendingCount= 0;
                var resolvedCount= 0;
                var unresolvedCount= 0;

                state.ticket_arr = action.payload;
                state.ticket_arr.forEach( ticket => {

                    if(ticket.ticket_status == 0) newCount++;
                    if(ticket.ticket_status == 1) triagedCount++;
                    if(ticket.ticket_status == 2) acceptedCount++;
                    if(ticket.ticket_status == 3) pendingCount++;
                    if(ticket.ticket_status == 4) resolvedCount++;
                    if(ticket.ticket_status == 5) unresolvedCount++;

                });

                state.new_tickets = newCount;
                state.triaged_tickets = triagedCount;
                state.accepted_tickets = acceptedCount;
                state.pending_tickets = pendingCount;
                state.resolved_tickets = resolvedCount;
                state.unresolved_tickets = unresolvedCount;

            },

            clearTickets(state)
            {
                state = initialState;
            }
        }

    }
)

export const {updateTickets, clearTickets} = ticketSlice.actions;
export default ticketSlice.reducer;