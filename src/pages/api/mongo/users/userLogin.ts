import { mongoPromise } from "@/lib/mongodb";
import { mongoCollections } from "@/lib/mongo_collections";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req:NextApiRequest, res:NextApiResponse<any>)
{
    try
    {
        const client = await mongoPromise;
        const database = client.db("projects");
        const {user_name, user_password, user_project} = req.body;

        const user = await database.collection(mongoCollections.users).findOne(
            {
                user_name,
                user_password
            }
        )

        
        const project = await database.collection(mongoCollections.projects).findOne(
            {
                proj_title: user_project,
                proj_participants: user_name,
            }
        )
            
        res.status(200).json( {user, project} );
        
    }
    catch(err)
    {
        console.error(err);
        throw new Error("" + err);
    }



}