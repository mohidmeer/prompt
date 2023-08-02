import connectMongo from "@/database/conn";
import Product from "@/models/products";
import { getServerAuthSession } from "../../auth/[...nextauth]";

export default async function handler(req, res) {
    connectMongo();
    const { id } = req.query
    const session = await getServerAuthSession(req, res)
    if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })
    }
    const product= Product.findById(id)
    if (!product.vendorId===session.user.id) {
      return res.status(403).json({error:'Action is Forbidden'})
      
    }
    if (req.method==='DELETE'){ 
        Product.findByIdAndDelete(id)
      .then((p)=>{return res.status(200).json({message:p.name+" is Deleted Successfully"})})
      .catch(()=>{return res.status(400).json({error:"Not Deleted" })})
     }
}

