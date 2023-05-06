import connectMongo from "@/database/conn";
import Product from "@/models/products";
import { getServerAuthSession } from "../auth/[...nextauth]";
import User from "@/models/user";

export default async function handler(req, res) {
    const session = await getServerAuthSession(req, res)
    connectMongo();
    if (!session) 
    {
        if(req.method === "GET"){
            
            const products= await Product.findOne({name:req.query.id}).select('-instructions')
            return res.status(200).json({products})
        }
    } else{

        if(req.method === "GET"){
            let products= await Product.findOne({name:req.query.id}).select('-instructions')
            let isFav=false
            const u = await User.findById(session.user.id)
             if (u.favourites.includes(products.id)){
                 isFav=true
             }
            return res.status(200).json({products:{...products._doc,isFav}})
        }

    }


    return res.status(404).json({message:'Method Not Allowed'})





    

}