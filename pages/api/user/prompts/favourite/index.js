import connectMongo from "@/database/conn";
import Product from "@/models/products";
import User from "@/models/user";
import { getServerAuthSession } from "@/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {
    connectMongo();
    const session = await getServerAuthSession(req, res)
    if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })
    }

     if (req.method==='GET'){
         const favs=await User.findById(session.user.id).select('-_id favorites')
         .populate({
            path:'favorites',
            select:'-instructions',
            populate:{
                path:'EmotionId',
            }
        })
         const favourites=favs.favorites
         return res.status(200).json({favourites})
     }
}
