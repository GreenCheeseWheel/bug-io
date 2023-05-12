import { project_schema } from "@/project_col_format";
import { user_schema } from "@/user_col_format";
import { ObjectId } from "mongodb";
import NextAuth from "next-auth";
import {JWT} from "next-auth/jwt"

declare module "next-auth" {


    interface Session{
        expires:string,

        user: {
            _id:ObjectId,
            project:project_schema,
            user: user_schema,
        }
    }

}

declare module "next-auth/jwt" {
    interface JWT {
        _id:ObjectId,
        project:project_schema,
        user:user_schema,
        
    }


}
