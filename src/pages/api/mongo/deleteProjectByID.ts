import { mongoPromise } from "@/lib/mongodb";
import { mongoCollections } from "@/lib/mongo_collections";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";

export default async function handler( req:NextApiRequest, res:NextApiResponse<any> ) {
    
    try
    {
        const client = await mongoPromise;
        const database = client.db("projects");
        const id = req.query.id as string; // Convert to a simple string

        console.log(id);

        const deleteResponse = database.collection(mongoCollections.projects).deleteOne(
            {
                proj_id: id,
            }
        );
        
        res.status(200).json(deleteResponse);
    }
    catch(err)
    {
        console.error(err);
        throw new Error("Failed deleting requested project!");

    }

}