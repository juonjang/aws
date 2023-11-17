import exp from "constants"
import NextAuth, { NextAuthOptions } from "next-auth"

export const authOptions :NextAuthOptions = {
    pages:{
        signIn:"/login"
    },
    session:{
        strategy:"jwt",
        maxAge:1500,
    },
    // useSecureCookies:true, // สำหรับ production and https: 
    providers:[

    CredentialsProvider({
        arg0: {
            credentials: {},
            async authorize(credentials: { loginname: string; password: string; }, req: any) {
                const { loginname, password } = credentials as { loginname: string; password: string} 
            }
        }
    })
]
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

function CredentialsProvider({ arg0 }: {
    arg0: {
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: string
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
       
    }
}): import("next-auth/providers/index").Provider {
    throw new Error("Function not implemented.")
}
