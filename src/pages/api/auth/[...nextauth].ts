import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import  EmailProvider  from "next-auth/providers/email"

export const authOptions:AuthOptions = {

  providers: [
    CredentialsProvider(
      {
        name: "user name",
        
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

        },

        async authorize(credentials, req)
        {
          const {username, password} = credentials as any;

          // Fetch to data base and check if credentials already exist in 
          // the users collection!
          const res = await fetch("http://localhost:3000/api/mongo/users/userLogin", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_name: username,
              user_password: password,
            })

          })
          .catch(err => err);
          
          const user = await res.json();

          if(res.ok && user != null)
          {
            return user
          }
          else 
          {
            throw Error("User not found");
          }

        },

      }

    )
  ],

  

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