import { mongoPromise } from "../../../lib/mongodb";
import { project_schema } from "@/project_col_format";
import { mongoCollections } from "../../../lib/mongo_collections";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req:NextApiRequest, res:NextApiResponse)
{

    try 
    {
        const client = await mongoPromise;
        const database = client.db( "projects" );

        const reqBody = req.body;

        const project = database.collection(mongoCollections.projects).insertOne( 
            {
                ...reqBody
            }
         );
         
        res.status(200).json(project);
    } 
    catch (error) 
    {   
        console.error(error);
        throw new Error("Failed at updating '" + mongoCollections.projects + "'");
    }

}