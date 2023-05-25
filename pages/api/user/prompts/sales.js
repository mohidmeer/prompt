import connectMongo from "@/database/conn";
import Payout from "@/models/payouts";
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
         const sales = await Payout.find({vendorId:session.user.id}).select('-stripeTransactionId -vendorId')
         .populate('productId',' -_id name price')
        
         return res.json({sales})
     }
}
