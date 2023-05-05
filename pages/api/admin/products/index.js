import connectMongo from "@/database/conn";
import Product from "@/models/products";
import { getServerAuthSession } from "../../auth/[...nextauth]";
import Products from "@/pages/profile/prompts";
import User from "@/models/user";



export default async function handler(req, res) {
  connectMongo();
  const session = await getServerAuthSession(req, res)
    if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })
    } else if (!session.user.role === 'ADMIN') //checking if user role is not admin 
    {
        return res.status(403).json({ error: 'Forbidden routes' ,})
    }
    if (req.method==='POST'){
        if (!req.body){
        return res.status(404).json({ error: "Don't have data...!" });}
        const {name,category,model,price,description,instruction,images} = req.body;

        Product.create({
          name:name,
          category:category,
          description:description,
          instructions:instruction,
          images:images,
          model:model,
          price:price,
          vendorId:session.user.id,
          status:'APPROVED'
        }).then(()=>{
         return res.status(201).json({message:'Created Successfully.....'})
        }).catch((error)=>{
         return  res.status(400).json({error: 'Not Created'})
        })

    }
    if (req.method==='GET'){  
      const products= await Product.find();
      return res.status(200).json({products})
    }

   


}