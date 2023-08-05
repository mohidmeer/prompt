import connectMongo from "@/database/conn";
import { getServerAuthSession } from "../../auth/[...nextauth]";
import Profile from "@/models/profile";
import Emotion from "@/models/emotions";
import User from "@/models/user";



export default async function handler(req, res) {
  connectMongo();
    const session = await getServerAuthSession(req, res);
    if (req.method==='GET'){
      let isFollowing=false;
      const profile= await Profile.findOne({name:req.query.username}).populate({
        path:'userId',
        select:' avatar name'
      }).populate('EmotionId')
      if (!session){
          return res.status(200).json({profile:{...profile._doc,isFollowing}})
        } 
        else{
              if (profile.followerlist.indexOf(session.user.id)==-1){
                  isFollowing = false;
                  console.log('NOT EXISTS')
                  return res.status(200).json({profile:{...profile._doc,isFollowing}})
                }else{
                  console.log('EXISTS')
                  isFollowing = true;
                  return res.status(200).json({profile:{...profile._doc,isFollowing}})
                }
             } 

    
      
    }








    if (req.method==='POST'){
      if (!session) 
      {
        return res.status(401).json({ error: 'You are not authorized' })
      }

      const {type}= req.body

      if (type==='FOLLOW'){
        const profile= await Profile.findOne({name:req.query.username});

        if (profile.followerlist.indexOf(session.user.id)==-1){
            profile.followerlist.push(session.user.id)
            profile.followers +=1;
            profile.save();
            return res.status(201).json({message:'You are Following '+req.query.username});
        } else{
            profile.followerlist.splice(profile.followerlist.indexOf(session.user.id),1)
            profile.followers-=1;
            profile.save();
            return res.status(201).json({message:'Unfollowing '+req.query.username})
        }

      }

   
    

    }
   

}