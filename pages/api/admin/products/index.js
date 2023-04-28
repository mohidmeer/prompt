import connectMongo from "@/database/conn";
import Product from "@/models/products";
import { getServerAuthSession } from "../../auth/[...nextauth]";
import Products from "@/pages/vendor/products";



export default async function handler(req, res) {
  connectMongo();
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
          vendorId:'6447f5d3de650e34dbab758a',
          isApproved:'APPROVED'
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