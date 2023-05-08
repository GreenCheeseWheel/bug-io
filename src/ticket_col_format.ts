enum ticket_status 
{
    new = 0,
    triaged,
    accepted,
    pending,
    resolver,
    unresolved 
}

interface ticket_schema {
    projec_id: string,
    ticket_title: string,
    ticket_description:string,
    ticket_status:ticket_status,
}

export type {ticket_schema}
export default ticket_status



