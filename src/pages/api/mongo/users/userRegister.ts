import { mongoPromise } from "@/lib/mongodb";
import { mongoCollections } from "@/lib/mongo_collections";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(req:NextApiRequest, res:NextApiResponse)
{

    try
    {
        const client = await mongoPromise;
        const database = client.db("projects");
        const {user_name, user_password, user_role} = req.body;

        await database.collection(mongoCollections.users).insertOne(
            {
                user_name: user_name ,
                user_password: user_password ,
                user_role: `${user_role}`

            }
        )


    }
    catch(err)
    {


    }


}