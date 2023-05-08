import { ticket_schema } from "@/ticket_col_format";
import { mongoCollections } from "@/lib/mongo_collections";
import { mongoPromise } from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req:NextApiRequest , res:NextApiResponse<any>)
{
    try
    {
        const client = await mongoPromise;
        const database = client.db("projects");
        const {project_id, ticket_title, ticket_description, ticket_status} = req.body;

        if(parseInt(ticket_status) > 5 || parseInt(ticket_status) < 0)
        {
            throw new Error("Invalid status code error | Status code must a number 0 and 5");
        }

        database.collection(mongoCollections.tickets).insertOne(
            {
                project_id,
                ticket_title, 
                ticket_description, 
                ticket_status

            }
        )


    }
    catch(err)
    {
        console.error(err);
        throw new Error("Failed at adding ticket!");
}
}