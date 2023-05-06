import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "" + process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: "" + process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    // Add google provider later
  ],
}

export default NextAuth(authOptions)