import { mongoCollections } from "@/lib/mongo_collections"; 
import { mongoPromise} from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req:NextApiRequest, res:NextApiResponse<any>)
{

    try
    {
        const client = await mongoPromise;
        const database = client.db("projects");

        const projectSet = await database.collection( mongoCollections.projects ).find({}).limit(10).toArray();

        res.status(200).json(projectSet);
    }
    catch(err)
    {
        console.error(err);
    }
    
    

}