import connectMongo from "@/database/conn";
import Product from "@/models/products";
import { getServerAuthSession } from "../../auth/[...nextauth]";
import User from "@/models/user";

export default async function handler(req, res) {
    const session = await getServerAuthSession(req, res)
    
    connectMongo();
    if (req.method==='GET'){

    if (!session) 
    {
            const products= await Product.findOne({slug:req.query.id}).select('-instructions').populate('EmotionId').populate({
                path:'vendorId',
                select:'profileId name avatar',
                populate:{
                  path:'profileId',
                  model:'profile',
                  select:'name'
                }
              })
            return res.status(200).json({products})
        
    } else {
            
           let isPurchased=false
           const u = await User.findById(session.user.id)
           let products= await Product.findOne({slug:req.query.id}).select('-instructions').populate('EmotionId').populate({
            path:'vendorId',
            select:'profileId name avatar',
            populate:{
              path:'profileId',
              model:'profile',
              select:'name'
            }
          })

            
             if (u.purchases.includes(products.id)){
                isPurchased=true
                products= await Product.findOne({slug:req.query.id})
             }

            return res.status(200).json({products:{...products._doc,isPurchased}})
        

    }
    }


    return res.status(404).json({message:'Method Not Allowed'})

}