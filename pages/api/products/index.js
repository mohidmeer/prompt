import connectMongo from "@/database/conn";
import Category from "@/models/categories";
import Product from "@/models/products";

export default async function handler(req, res) {


    if(req.method === "GET"){
        connectMongo();
        const cat= await Category.find().select('-_id slug')
        const catnames = cat.map(c => c.slug);
        const  modelnames=['chat-gpt','midjourney','stable-diffusion','dalle']

        const page =  parseInt(req.query.page)-1||0
        const limit =  parseInt(req.query.limit)||20
        let category =  [req.query.category] || ''
        let model = [req.query.model]||''
        if (model==''){model=modelnames}
        if (category==''){  category=catnames;}
        const sortBy =  parseInt(req.query.sortBy)|| 'created_at'
       

        const products= await Product.find()
        .select('-instructions' )
        .where('category').in(category)
        .where('model').in(model)
        .skip(page*limit)
        .limit(limit)
         return res.status(200).json({products,p:products.length})
        // return res.status(200).json({category,catnames,limit,page})
    }

}