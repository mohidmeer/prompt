import connectMongo from "@/database/conn";
import Product from "@/models/products";
import { getServerAuthSession } from "../../auth/[...nextauth]";
import User from "@/models/user";
export default async function handler(req, res) {
  connectMongo();
    const session = await getServerAuthSession(req, res)
    if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })
    }
    if (req.method==='GET'){
      const p=await User.findById(session.user.id).select('-_id purchases').populate('purchases')
      const purchases=p.purchases
      return res.status(200).json({purchases})
  }

   


}

