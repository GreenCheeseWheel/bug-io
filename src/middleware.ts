import {withAuth} from "next-auth/middleware"
import {roles} from "@/user_col_format"

export default withAuth(

    function middleware(req)
    {
        
    },
    {

        callbacks: {
            authorized: ({req, token}) => { 
                              
                if(token && token.user.user_role == roles.admin)
                {
                    return true
                }
                else
                {
                    return false
                }
            }
        },

        pages: {
            signIn: "/login",
        }

        

    }
    
)

export const config = {matcher: ["/admin/project/create"]}

