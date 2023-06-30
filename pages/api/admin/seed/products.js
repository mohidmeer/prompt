import connectMongo from "@/database/conn";
import { faker } from '@faker-js/faker';
import Product from "@/models/products";
import { getServerAuthSession } from "../../auth/[...nextauth]";
import { prods } from "@/database/DummyData";
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SCERET_KEY);
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
    
     connectMongo();
    prods.forEach(async (p)=>{

        const stripeProduct = await stripe.products.create({
            name:p.name,
            description:p.description,
            images:p.images
        }).catch((error)=>{stripeErrorHandler(error)})  
        const stripePrice = await stripe.prices.create({
              unit_amount: p.price*100,
              currency: 'usd',
              product: stripeProduct.id,
            }).catch((error)=>{stripeErrorHandler(error)});
        const Pd = await Product.create({
            name:p.name,
            category:p.category,
            description:p.description,
            instructions:p.instruction,
            images:p.images,
            slug:p.name.toLowerCase().replace(/ +/g, "-"),
            model:p.model,
            price:p.price,
            vendorId:session.user.id,
            status:'APPROVED',
            stripePriceId:stripePrice.id
          }).then(()=>{
          console.log('Succeffully Added '+p.name)
          }).catch((error)=>{
            console.log('Could not Add '+p.name)
          })
        
     })

    }




}