import { profile } from "console";
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import  EmailProvider  from "next-auth/providers/email"

export const authOptions:AuthOptions = {

  providers: [
    CredentialsProvider(  
    {
        

        name: "credentials",
        
        credentials: {
          username: {
            label: "Username",
            type: "text",
            placeholder: "GreenCheeseWheel",
          },
          password: {
            label: "Password",
            type: "password",
            placeholder: "admin",
          },
          project: {
            type: "text",
          },

        },

        async authorize(credentials, req)
        {
          const {username, password, project} = credentials as any;

          
          const resUserLogin = await fetch("http://localhost:3000/api/mongo/users/userLogin", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_name: username,
              user_password: password,
              user_project: project,
            })

          })
          .catch(err => err);

          
          const user = await resUserLogin.json();


          if(resUserLogin.ok && user.user != null && user.project != null)
          {
            return user
          }
          else 
          {
            throw Error("User with project not found");
          }

        },

      }

    )
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    
    async jwt({token, user}) {  
      return {...token, ...user}
    },
    
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;
      return session;
    },

  }
  
  

}

export default NextAuth(authOptions)