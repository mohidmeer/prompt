import connectMongo from "@/database/conn";
import Category from "@/models/categories";
import Emotion from "@/models/emotions";
import Product from "@/models/products";

export default async function handler(req, res) {

    if(req.method === "GET"){
        connectMongo();
        console.log(req.query)
        const cat= await Category.find().select('-_id slug')
        const catnames = cat.map(c => c.slug);

        const page =  parseInt(req.query.page)-1||0
        const limit =  parseInt(req.query.limit)||25
        let category =  req.query.category
        if (category== undefined){  category=catnames;}
        const sortBy =  parseInt(req.query.sortBy)|| 'created_at'
        const products= await Product.find()
        .select('-instructions' )
        .populate('EmotionId')
        .where('category').in(category)
        .skip(page*limit)
        .limit(limit)
        console.log('TOTAL PRODUCTS: '+products.length,"Category"+ req.query.category ,'Document Limit :'+limit)
         return res.status(200).json({products,p:products.length})

    }


}