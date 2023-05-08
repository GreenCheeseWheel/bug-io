import { ticket_schema } from "./ticket_col_format";

interface project_schema {
    proj_id: string,
    proj_title: string,
    proj_description:string,
    proj_creator:string,
    proj_participants:string[],
    proj_tickets: ticket_schema[]
}

export type {project_schema};