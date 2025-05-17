import dotenv from 'dotenv'
import { Db, MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config()

const uri: string = process.env.MONGO_URI;
const dbName: string = process.env.MONGO_DB_NAME;

let client : MongoClient = null;


const connectDB = async(): Promise<Db> =>{
    if(!client){
        client = new MongoClient(uri,{
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true 
            }
        })
        await client.connect();
    }

    return client.db(dbName)
}

export {client, connectDB}