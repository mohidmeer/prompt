import connectMongo from "@/database/conn";
import Product from "@/models/products";
export default async function handler(req, res) {    
    if (req.method==='GET'){  
      connectMongo();
      const products= await Product.find({vendorId:req.query.id}).populate('EmotionId').limit(20);

      return res.status(200).json({products})
    }
}


