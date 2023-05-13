import { project_schema } from "@/project_col_format";
import { user_schema } from "@/user_col_format";
import { ObjectId } from "mongodb";
import NextAuth from "next-auth";
import {JWT} from "next-auth/jwt"
import {roles} from "@/user_col_format"

declare module "next-auth" {


    interface Session{
        expires:string,

        user: {
            _id:ObjectId,
            project:project_schema,
            user: {user_name:string, user_role:roles},
        }
    }

}

declare module "next-auth/jwt" {
    interface JWT {
        _id:ObjectId,
        project:project_schema,
        user:{user_name:string, user_role:roles},
        
    }


}
