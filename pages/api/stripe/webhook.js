import { buffer } from 'micro';
import Sale from '@/models/sales';
import User from '@/models/user';
import stripeErrorHandler from '@/lib/server/stripeErrorHandler';
import Payout from '@/models/payouts';
// Initialize Stripe with your API key
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SCERET_KEY);

// Buffer the request payload
export const config = {
  api: {
    bodyParser: false,
  },
};

// Verify and parse the incoming webhook request
const webhookHandler = async (req, res) => {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];

    let event;

    try {
      // Verify the Stripe signature
      event = stripe.webhooks.constructEvent(buf.toString(), sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      console.error('Webhook signature verification failed.', err);
      return res.status(400).send('Webhook Error: Invalid signature');
    }
     console.log(event.type)
    // Handle the payment succeeded event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const { amount_total, metadata } = session;

      await Sale.create({
        productId:metadata.productId,
        sellerId:metadata.sellerId,
        buyerId:metadata.buyerId,
        total:amount_total
      })

      const buyer = await User.findById(metadata.buyerId)
      buyer.purchases.push(metadata.productId)
      buyer.save();
      const seller =await User.findById(metadata.sellerId)
      if (!(seller.isAdmin)){
          await payoutVendor(amount_total*0.7,seller.stripeConnectId,metadata)
        
      }
    }

    if (event.type === 'transfer.created'){
      const transfer = event.data.object;
      const {id,amount,metadata}=transfer;
       await Payout.create({
        stripeTransactionId:id,
        vendorId:metadata.sellerId,
        buyerId:metadata.buyerId,
        productId:metadata.productId,
        amount:amount,})
    }
    

    res.status(200).send('Webhook Received');
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default webhookHandler;


const payoutVendor =async(amount,destination,metadata)=>{
  try {
   const  transfer = stripe.transfers.create({
      amount:amount,  
      destination:destination,
      currency :'usd',
      description:'Transfer from PromptWorksLLC',
      metadata:{
        'transfer_reason': `Paymnet For ${metadata.productName} `,
        'buyerId':metadata.buyerId,
        'sellerId':metadata.sellerId,
        'productId':metadata.productId
      }
  })
    
  } catch (error) {
    stripeErrorHandler(error)
  }
}