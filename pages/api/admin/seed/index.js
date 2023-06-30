import connectMongo from "@/database/conn";
import { faker } from '@faker-js/faker';
import Category from "@/models/categories";
import Product from "@/models/products";
import { getServerAuthSession } from "../../auth/[...nextauth]";
import { prods } from "@/database/DummyData";
export default async function handler(req, res) {

    const session = await getServerAuthSession(req, res)
    
    if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })
    } else if (session.user.role === 'USER') //checking if user role is not admin 
    {
        return res.status(403).json({ error: 'Forbidden routes' })
    }
    
    if (req.method === 'GET') {
    //  return res.status(200).json({s:session.user.role})
    
     return res.status(200).json(prods)
     connectMongo();

    }
    

    // if (req.method==='GET'){
    // connectMongo();
    // const createCategories= async ()=>{
    //     let name =faker.random.words(2) ; 
    //      await Category.create({name:name,slug:name.toLowerCase().replace(/ +/g, "-")})

    //  }
    //  for (let i = 0; i < 20; i++) {
    //     createCategories()
    // }

    // res.status(201).json({message:'Skibidy'})
    // }else{
    //     return res.status(400).json({message:'Not Valid'})
    // }
    // if (req.method==='GET'){
    // connectMongo();
    // const createCategories= async ()=>{
    //      let name=faker.random.word();
    //      let desc=faker.random.words(10) 
    //      let inst=faker.random.words(15) 
    //      let price=faker.random.numeric() 
    //      await Product.create({
    //         name:name,
    //         description:desc,
    //         instructions:inst,
    //         price:price,
    //         vendorId:'644a7ebc8e61567050c275b2',
    //         images:['sss','ssssc'],
    //         category:'indiana-practical'
    //         }).catch((e)=>{return res.status(500).json({e}) })

    //  }
    //  for (let i = 0; i < 20; i++) {
    //    await createCategories()
    // }

    // }else{
    //     return res.status(400).json({message:'Not Valid'})
    // }
}


