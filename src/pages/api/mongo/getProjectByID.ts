import { mongoCollections } from "@/lib/mongo_collections";
import { mongoPromise } from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Handler( req:NextApiRequest, res:NextApiResponse )
{
    try
    {   
        const client = await mongoPromise;
        const database = client.db("projects");
        const {id} = req.query;

        console.log(id);
        const projectRes = await database.collection(mongoCollections.projects).findOne(
            {
                proj_id: `${id}`,
            }
        )

      
        res.status(200).json(projectRes);

    }
    catch(err)
    {
        throw new Error(`${err}`);
    }


}

