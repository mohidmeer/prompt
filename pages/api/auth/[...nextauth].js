import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider  from 'next-auth/providers/credentials';
import connectMongo from '@/database/conn';
import User from '@/models/user';
import { compare } from 'bcrypt';


export default NextAuth({
    providers : [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
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
        })
    ]
})