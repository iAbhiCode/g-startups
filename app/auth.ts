import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [Google,GitHub],
})
  // cookies:{
  //   pkceCodeVerifier:{
  //     name: "next-auth.pkce.code_verifier",
  //     options: {
  //       httpOnly:true,
  //       sameSite:"none",
  //       path:"/",
  //       secure:true,
  //     }
  //   }
  // }
