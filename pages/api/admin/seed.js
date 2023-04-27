import connectMongo from "@/database/conn";
import { faker } from '@faker-js/faker';
import Category from "@/models/categories";
export default async function handler(req, res) {
    if (req.method==='GET'){
    connectMongo();
    const createCategories= async ()=>{
        let name =faker.random.words(2) ; 
         await Category.create({name:name,slug:name.toLowerCase().replace(/ +/g, "-")})
     
     }
    //  for (let i = 0; i < 20; i++) {
    //     createCategories()
    // }

    res.status(201).json({message:'Skibidy'})
    }else{
        return res.status(400).json({message:'Not Valid'})
    }
}



