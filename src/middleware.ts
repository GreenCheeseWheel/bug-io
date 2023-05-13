import { error } from "console"
import {withAuth} from "next-auth/middleware"

export default withAuth(

    function middleware(req)
    {
        
    },
    {

        callbacks: {
            authorized: ({req, token}) => { 
                if(token)
                return true
                else
                return false
            }
        },

        pages: {
            signIn: "/login",
            error: "/login"
        }

        

    }
    
)


export const config = { matcher: ["/admin"] }