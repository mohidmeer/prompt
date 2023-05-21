import Stripe from 'stripe';
import { buffer } from 'micro';
// Initialize Stripe with your API key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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
      // Retrieve the relevant information from the session object
      const { id, customer, amount_total, metadata } = session;

      console.log('Payment succeeded:', session);
    }
    
    console.log('WEBHOOK TRIGGERED')
    res.status(200).send('Webhook Received');
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default webhookHandler;