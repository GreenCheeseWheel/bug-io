import { ticket_schema } from "@/ticket_col_format";
import { mongoCollections } from "@/lib/mongo_collections";
import { mongoPromise } from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

function stringToHash( str:string )
{
    var hash = 0;

    for(let i = 0; i < str.length; i++)
    {
        var char = str.charCodeAt(i);
        hash = ((hash << 5) -hash) + char;
        hash = hash & hash;

    }

    return hash;
}


export default async function handler(req:NextApiRequest , res:NextApiResponse<any>)
{

    try
    {
        const client = await mongoPromise;
        const database = client.db("projects");
        const {code_str, id, ticketTitle, ticketDescription } = req.body;

        const ticket_id = stringToHash(code_str);

        const updateRes = await database.collection(mongoCollections.projects).updateOne(
            {
                proj_id: `${id}` ,
            },
            {
                $addToSet: {
                    proj_tickets: {
                        
                            ticket_id: `${ticket_id}`, 
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