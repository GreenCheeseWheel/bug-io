import { error } from "console"
import {withAuth} from "next-auth/middleware"

export default withAuth(

    function middleware(req)
    {
        console.log("Este es el token de salida!");
        console.log(req.nextauth);
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


export const config = { matcher: ["/projects"] }