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
        const {currProjId, ticketTitle, ticketDescription } = req.body;

        console.log(ticketTitle);
        const updateRes = await database.collection(mongoCollections.projects).updateOne(
            {
                proj_id: "0",
            },
            {
                $addToSet: {
                    proj_tickets: {
                        
                            ticket_id: "3", 
                            ticket_title: ticketTitle ,
                            ticket_description: ticketDescription,
                            ticket_status: "0"
                        
                    }
                
                }
            }
            
        )

        res.status(200).json( updateRes );
        
    }
    catch(err)
    {
        console.error(err);
        throw new Error("Failed at adding ticket!");
}
}