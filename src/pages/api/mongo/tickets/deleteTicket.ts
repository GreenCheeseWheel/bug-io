import { mongoPromise } from "@/lib/mongodb";
import { mongoCollections } from "@/lib/mongo_collections";
import { NextApiRequest, NextApiResponse } from "next";


export default async function Handler( req:NextApiRequest , res:NextApiResponse )
{
    try 
    {
        const client = await mongoPromise;
        const database = client.db("projects");
        const {proj_id, ticket_id} = req.body;

        

        const deleteRes = await database.collection(mongoCollections.projects).updateOne(
            {   
                proj_id: parseInt(proj_id),
            },

            {
                $pull: {
                    proj_tickets: {
                       ticket_id:  `${ticket_id}`
                    }
                }
            }
        )

        res.status(200).json( deleteRes );
    }
    catch(err)
    {
        console.error(err);
        throw new Error(`${err}`)
    }

}