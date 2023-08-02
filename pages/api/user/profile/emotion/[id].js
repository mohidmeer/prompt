import connectMongo from "@/database/conn";
import Emotion from "@/models/emotions";
import Profile from "@/models/profile";
import User from "@/models/user";
import { getServerAuthSession } from "@/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {
    connectMongo();
    const session = await getServerAuthSession(req, res)
    if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })   
    }

    const { id } = req.query
    const {emotionType}=req.body

    const u = await User.findByIdAndUpdate(session.user.id)
    const p = await Profile.findByIdAndUpdate(id)
    let   e = await Emotion.findByIdAndUpdate(p.EmotionId)
    if (!e){
        e = await Emotion.create({productId:p._id})
        p.EmotionId=e._id
        p.save();
    }

    const like = async (u,p,e)=>{
         const index = e.likes.indexOf(u._id)
         if (index===-1){
            e.likes.push(u._id)
            await e.save();
            p.EmotionNumbers.likes += 1;
            p.save();
            return res.status(201).json({'message':'👍 Added',action:'LIKE'})
         }else{
            e.likes.splice(index,1)
            await e.save();
            p.EmotionNumbers.likes -= 1;
            p.save();
            return res.status(202).json({'message':'👍 Removed',action:'LIKE'})
         }
        
    } 
    const dislike = async (u,p,e)=>{
        const index = e.dislikes.indexOf(u._id)
        if (index===-1){
           e.dislikes.push(u._id)
           await e.save();
           p.EmotionNumbers.dislikes += 1;
           await p.save();
           return res.status(201).json({'message':'👎 Added',action:'DISLIKE'})
        }else{
           e.dislikes.splice(index,1)
           await e.save();
           p.EmotionNumbers.dislikes -= 1;
           await p.save();
           return res.status(202).json({'message':'👎 Removed',action:'DISLIKE'})
        }
    } 
    const happy = async (u,p,e)=>{
        const index = e.happy.indexOf(u._id)
        if (index===-1){
           e.happy.push(u._id)
           await e.save();
           p.EmotionNumbers.happy += 1;
           await p.save();
           return res.status(201).json({'message':'😂 Added',action:'HAPPY'})
        }else{
           e.happy.splice(index,1)
           await e.save();
           p.EmotionNumbers.happy -= 1;
           await p.save();
           return res.status(202).json({'message':'😂 Removed',action:'HAPPY' })
        }
    } 
    const sad = async (u,p,e)=>{
        const index = e.sad.indexOf(u._id)
        if (index===-1){
           e.sad.push(u._id)
           await e.save();
           p.EmotionNumbers.sad += 1;
           await p.save();
           return res.status(201).json({'message':'😥 Added',action:'SAD'})
        }else{
           e.sad.splice(index,1)
           await e.save();
           p.EmotionNumbers.sad -= 1;
            await p.save();
           return res.status(202).json({'message':'😥 Removed',action:'SAD'})
        }
    } 
    const favourite = async (u,p,e)=>{
        const index = e.favorites.indexOf(u._id)
        if (index===-1){
           e.favorites.push(u._id)
           await e.save();
           
           p.EmotionNumbers.favorites += 1;
           await p.save();
           return res.status(201).json({'message':'Added to Favorites',action:'FAVORITE'})
        }else{
           e.favorites.splice(index,1)
           await e.save();
           p.EmotionNumbers.favorites -= 1;
           p.save();
           const i = u.favorites.indexOf(p._id);
           return res.status(202).json({'message':'Removed Successfully',action:'FAVORITE'})
        }
    } 

    switch (emotionType) {
        case 'Like':
            return await like(u,p,e);
            break;
        case 'Dislike':
            return await dislike(u,p,e);
            break;
        case 'Favorite':
            return await favourite(u,p,e);
            break;
        case 'Happy':
            return await happy(u,p,e);
            break;
        case 'Sad':
            return await sad(u,p,e);
            break;
        default:
            res.status(500).json({'error':'Invalid Emotion Type'})
            break;
    }
    
}
