import connectMongo from "@/database/conn";
import { getServerAuthSession } from "../../auth/[...nextauth]";
import Profile from "@/models/profile";



export default async function handler(req, res) {
  connectMongo();
    const session = await getServerAuthSession(req, res)
    if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })
    }
    if (req.method==='GET'){
          console.log('USER PROFILE END POINT HIT')
      const profile= await Profile.findOne({userId:session.user.id}).select('-follwerslist');
      return res.status(200).json({profile})
    }

}