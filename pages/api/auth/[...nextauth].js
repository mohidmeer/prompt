import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider  from 'next-auth/providers/credentials';
import connectMongo from '@/database/conn';
import User from '@/models/user';
import { compare } from 'bcrypt';
import { getServerSession } from "next-auth/next"
// import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
// import clientDatabasePromise from '@/database/clientDatabase';
import { signIn } from 'next-auth/react';
export const authOptions = {
    // adapter: MongoDBAdapter(clientDatabasePromise,{ collections:{ Users:'users' }}),
    
    providers : [
        
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name:"Credentials",
            async authorize(credentials,req){
                connectMongo().catch(error=>{error:'Connection Failed'})
                const user = await User.findOne({email:credentials.email})
                if(!user){throw new Error('No user Found with this Email')}
                const isPasswordCorrect= await compare(credentials.password,user.password)
                if (!isPasswordCorrect){ throw new Error('Password is Incorrect') }
                return user;
            }
        }),  
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                connectMongo().catch(error=>{error:'Connection Failed'})
                const user = await User.findOne({email:profile.email})
                if(user){
                    return true;
                }else{
                   await User.create({name:profile.name,email:profile.email,password:Math.random().toString(16).substr(2, 8)})
                }

              
            }
            return true 
          },
       async session({ session, token, user }) {
            connectMongo().catch(error=>{error:'Connection Failed'})
            const u = await  User.findOne({email:session.user.email})
            session.user.id=u._id
             u.isAdmin ? session.user.role='ADMIN':session.user.role='USER'
          return session 
        },
        
      },
}


export default NextAuth(authOptions)

export const getServerAuthSession=(req,res)=>{

    return  getServerSession(req,res,authOptions)


}