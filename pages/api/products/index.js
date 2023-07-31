import connectMongo from "@/database/conn";
import Category from "@/models/categories";
import Emotion from "@/models/emotions";
import Product from "@/models/products";

export default async function handler(req, res) {

    // const {userId}= req.body


    // if (req.method==='POST'){
    //     connectMongo();
    //     const cat= await Category.find().select('-_id slug')
    //     const catnames = cat.map(c => c.slug);
    //     const page =  parseInt(req.query.page)-1||0
    //     const limit =  parseInt(req.query.limit)||10
    //     let category =  [req.query.category] || ''
    //     if (category==''){  category=catnames;}
    //     const sortBy =  parseInt(req.query.sortBy)|| 'created_at'
    //     const products= await Product.find({vendorId:userId})
    //     .select('-instructions' )
    //     .populate('EmotionId')
    //     .where('category').in(category)
    //     .skip(page*limit)
    //     .limit(limit)
    //      return res.status(200).json({products,p:products.length})
    // }



    if(req.method === "GET"){
        connectMongo();
        const cat= await Category.find().select('-_id slug')
        const catnames = cat.map(c => c.slug);

        const page =  parseInt(req.query.page)-1||0
        const limit =  parseInt(req.query.limit)||100
        let category =  [req.query.category] || ''
        if (category==''){  category=catnames;}
        const sortBy =  parseInt(req.query.sortBy)|| 'created_at'
        const products= await Product.find()
        .select('-instructions' )
        .populate('EmotionId')
        .where('category').in(category)
        .skip(page*limit)
        .limit(limit)
         return res.status(200).json({products,p:products.length})
        // return res.status(200).json({category,catnames,limit,page})
    }


}