import connectMongo from "@/database/conn";
import Product from "@/models/products";
import User from "@/models/user";
import { getServerAuthSession } from "@/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {
    connectMongo();
    const { id } = req.query
    const session = await getServerAuthSession(req, res)
    if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })
    }

    const user= await User.findById(session.user.id)

    if (req.method==='POST'){
        const index = user.favourites.indexOf(id);
        if(index===-1){
            await Product.findByIdAndUpdate({_id:id},{$inc:{favourites:1}})
            user.favourites.push(id)
            await user.save()
            return res.status(200).json({message:"Added To Favourites"})
        }else{
            await  Product.findByIdAndUpdate(id,{$inc:{favourites:-1}})
            user.favourites.splice(index, 1);
            await user.save()
            return res.status(200).json({message:"Remove from favourites"})
        }
     }

     if (req.method==='GET'){
         const favs=await user.populate('favourites')
         return res.status(200).json({favs})
     }
}
