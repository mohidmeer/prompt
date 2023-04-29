import connectMongo from "@/database/conn";
import { faker } from '@faker-js/faker';
import Category from "@/models/categories";
import Product from "@/models/products";
export default async function handler(req, res) {
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
    if (req.method==='GET'){
    connectMongo();
    const createCategories= async ()=>{
         let name =faker.random.word();
         let desc=faker.random.words(10) 
         let inst=faker.random.words(15) 
         let price=faker.random.numeric() 
         await Product.create({
            name:name,
            description:desc,
            instructions:inst,
            price:price,
            vendorId:'644a7ebc8e61567050c275b2',
            images:['sss','ssssc'],
            category:'jeep-account'
            }).catch((e)=>{return res.status(500).json({e}) })
     
     }
     for (let i = 0; i < 20; i++) {
       await createCategories()
    }

    // res.status(201).json({message:'Skibidy Created'})
    }else{
        return res.status(400).json({message:'Not Valid'})
    }
}



