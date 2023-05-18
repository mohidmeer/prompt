import connectMongo from "@/database/conn";
import Product from "@/models/products";
import { getServerAuthSession } from "../../auth/[...nextauth]";
import stripeErrorHandler from "@/lib/server/stripeErrorHandler";
const Stripe = require('stripe');
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
        const {id} = req.body;
        const s = await createCheckoutSession(id,session.user.email)
        return res.status(200).json({url:s.url})
    }
}


const createCheckoutSession = async (productId,customer_email) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: productId, // Pass the ID of the price you created for the product
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/cancel`,
      customer_email: customer_email, 
    });

    return session;
  } catch (error) {
    stripeErrorHandler(error);
  }
};

