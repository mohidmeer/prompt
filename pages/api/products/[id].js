import connectMongo from "@/database/conn";
import Product from "@/models/products";

export default async function handler(req, res) {


    if(req.method === "GET"){
        connectMongo();
        const products= await Product.findOne({name:req.query.id}).select('-instructions')
        return res.status(200).json({products})
    }

}