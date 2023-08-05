import connectMongo from "@/database/conn";
import { faker } from '@faker-js/faker';
import Category from "@/models/categories";
import Product from "@/models/products";
import { getServerAuthSession } from "../auth/[...nextauth]";
import Categories from "@/models/Testdata/Categories";
import Products from "@/models/Testdata/Products";
export default async function handler(req, res) {

    const session = await getServerAuthSession(req, res)
    if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })
    } else if (session.user.role === 'USER') //checking if user role is not admin 
    {
        return res.status(403).json({ error: 'Forbidden routes' })
    }
    
    // if (req.method === 'GET') {
    //     const cat = Categories;
    //         cat.map( async (c)=>{
    //             await  Category.create({
    //               name:c.name,
    //               slug:c.slug
    //             })
    //           })
    //   }
    
    // if (req.method === 'GET') {
    //     const prod = Products;
    //         prod.map( async (p)=>{
    //             await  Product.create({
    //                 name:p.name,
    //                 category:p.category,
    //                 description:p.description,
    //                 instructions:p.instructions,
    //                 images:p.images,
    //                 slug:p.name.toLowerCase().replace(/ +/g, "-"),
    //                 model:p.model,
    //                 price:p.price,
    //                 vendorId:p.vendorId,
    //                 status:'APPROVED',
    //                 stripePriceId:p.stripePriceId
    //             })
    //           }) 
    //   }

}



