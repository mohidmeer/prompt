import connectMongo from "@/database/conn";
import Product from "@/models/products";
import { getServerAuthSession } from "../../auth/[...nextauth]";
export default async function handler(req, res) {
  connectMongo();
    const session = await getServerAuthSession(req, res)
    if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })
    }
    if (req.method==='GET'){  
      const products=[];
      return res.status(200).json({products})
    }

   


}

