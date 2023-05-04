import connectMongo from "@/database/conn";
import Category from "@/models/categories";


export default async function handler(req, res) {


    if(req.method === "GET"){
        connectMongo();
        const categories= await Category.find();
        return res.status(200).json({categories})
    
    }

}