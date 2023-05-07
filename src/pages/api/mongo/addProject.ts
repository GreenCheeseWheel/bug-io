import { mongoPromise } from "../../../lib/mongodb";
import { mongoCollections } from "../../../lib/mongo_collections";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";


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

export default async function handler(req:NextApiRequest, res:NextApiResponse)
{

    try 
    {
        const client = await mongoPromise;
        const database = client.db( "projects" );

        const {code_str, proj_title, proj_description, proj_creator, proj_participants} = req.body;
        
        const objID = stringToHash(code_str);

        const project = database.collection(mongoCollections.projects).insertOne( 
            {
                _id: new ObjectId(objID),
                proj_title: proj_title,
                proj_description: proj_description,
                proj_creator: proj_creator,
                proj_participants: [proj_participants],

            }
         );
         
        res.status(200).json(project);
    } 
    catch (error) 
    {   
        console.error(error);
        throw new Error("Failed at creating project at collection '" + mongoCollections.projects + "'");
    }

}