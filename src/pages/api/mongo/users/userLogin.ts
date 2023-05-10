import { mongoPromise } from "@/lib/mongodb";
import { mongoCollections } from "@/lib/mongo_collections";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req:NextApiRequest, res:NextApiResponse<any>)
{
    try
    {
        const client = await mongoPromise;
        const database = client.db("projects");
        const {user_name, user_password} = req.body;

        const user = await database.collection(mongoCollections.users).findOne(
            {
                user_name,
                user_password
            }
        )

        return res.status(200).json(user)
        
    }
    catch(err)
    {
        throw new Error("" + err);
    }



}