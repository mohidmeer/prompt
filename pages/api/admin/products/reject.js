import connectMongo from "@/database/conn";
import Product from "@/models/products";

export default async function handler(req, res) {
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

