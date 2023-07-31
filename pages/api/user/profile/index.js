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
      const profile= await Profile.findOne({userId:session.user.id}).select('-followerlist');
      return res.status(200).json({profile})
    }
    if (req.method==='POST'){
      const {name,facebook,twitter,youtube,instagram,discord,website} =req.body
      
      try {
          await Profile.findOneAndUpdate({userId:session.user.id},
          {
           name:name,facebook:facebook,
           twitter:twitter,youtube:youtube,
           instagram:instagram,
           discord:discord,website:website
         })
      return res.status(200).json({message : 'Profile Updated'})
      } catch (error) {
        if (error.code===11000){
          return res.status(400).json({ error: 'This name already taken' });
        }
        return res.status(400).json({ error: error });
        
      }

      return res.status(500).json({ error: 'An error occurred while updating the profile.' });
    }
    if (req.method==='PUT'){
      // this function i just use for checking name if exists then prompt user on frontend name Taken 
      const {username}= req.body
      const name = await  Profile.findOne({name:username , userId: { $ne: session.user.id } }) 
      if (name){
        return  res.status(200).json({name:true})
      }else{
        return res.status(200).json({name:false})
      }


    }

}