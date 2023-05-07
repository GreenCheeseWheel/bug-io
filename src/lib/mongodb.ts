import { MongoClient } from "mongodb"


const mongoUri = process.env.NEXT_PUBLIC_MONGODB_URI;
var mongoPromise:Promise<MongoClient>;
const options = {};


 
if(!mongoUri)
{
    throw new Error("MongoDB URI is not an env variable!");
}

const client = new MongoClient(mongoUri, options);
mongoPromise = client.connect();

export {mongoPromise};
