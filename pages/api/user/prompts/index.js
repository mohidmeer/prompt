import connectMongo from "@/database/conn";
import Product from "@/models/products";
import { getServerAuthSession } from "../../auth/[...nextauth]";
import Products from "@/pages/account/prompts";
import stripeErrorHandler from "@/lib/server/stripeErrorHandler";
import cloudinary from 'cloudinary';
const Stripe = require('stripe');

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
})

const stripe = Stripe(process.env.STRIPE_SCERET_KEY);


export default async function handler(req, res) {

  connectMongo();
    const session = await getServerAuthSession(req, res)
    if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })
    }


    if (req.method==='POST'){
        if (!req.body){
        return res.status(404).json({ error: "Please provide the data...!" });}
        const {name,category,model,price,description,instruction,images} = req.body;
        // converting the ccloudnary public id to complete url for sendingg it to stripe
        const imagesArray = images.map(i => {
          return  cloudinary.url(i) ;
        });
          const stripeProduct = await stripe.products.create({
              name:name,
              description:description,
              images:imagesArray})
              .catch((error)=>{stripeErrorHandler(error)})  

          const stripePrice = await stripe.prices.create({
                unit_amount: price*100,
                currency: 'usd',
                product: stripeProduct.id,
              }).catch((error)=>{stripeErrorHandler(error)});

      const P = await Product.create({
          name:name,
          category:category,
          description:description,
          instructions:instruction,
          images:images,
          slug:name.toLowerCase().replace(/ +/g, "-"),
          model:model,
          price:price,
          vendorId:session.user.id,
          status:'PENDING',
          stripePriceId:stripePrice.id
        }).then(()=>{
         return res.status(201).json({message:'Created Successfully.....'})
        }).catch((error)=>{
         return  res.status(400).json({error: 'Not Created'})
        })

         

    }
    if (req.method==='GET'){  
      const products= await Product.find({vendorId:session.user.id});
      return res.status(200).json({products})
    }
}




