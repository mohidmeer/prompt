import connectMongo from "@/database/conn";
import Product from "@/models/products";
import { getServerAuthSession } from "../../auth/[...nextauth]";

export default async function handler(req, res) {
    const session = await getServerAuthSession(req, res)
    if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })
    } else if (session.user.role === 'USER') //checking if user role is not admin 
    {
        return res.status(403).json({ error: 'Forbidden routes' })
    }
    connectMongo();

    if (req.method ==='POST'){
        const {id}=req.body
        Product.findByIdAndUpdate(id,{status:'REJECTED'}).
        then((p)=>{return res.status(202).json({message:p.name+" Is REJECTED"})}).
        catch(()=>{return res.status(500).json({error:'Database Error'})})
    }else{
        return res.status(400).json({error:'Method Not Allowed'})
    }
     


}

