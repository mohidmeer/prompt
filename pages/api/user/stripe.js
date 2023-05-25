import connectMongo from "@/database/conn";
import User from "@/models/user";
import { getServerAuthSession } from "../auth/[...nextauth]";
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
      if (req.method=='GET'){
          const user = await User.findById(session.user.id)
          if (user.stripePayments==true){
            const dashboard =await createStripeDashboardLink(user.stripeConnectId)
              return res.status(200).json({url:dashboard})
          }
          if (user.stripeConnectId==''){
              const accountId =  await createStripeConnectAccount(session.user.email)
              user.stripeConnectId=accountId
              user.save();
              const onboardingRedirectUrl= await completeOnboardingLink(accountId)
              return res.status(200).json({url:onboardingRedirectUrl})
          }
          else{
              const account = await reteriveVendor(user.stripeConnectId)
                if (!(account.details_submitted)){
                    const onBoardingRedirectUrl= await completeOnboardingLink(user.stripeConnectId)
                    return res.status(200).json({url:onBoardingRedirectUrl})
                    }else{
                      user.stripePayments=true;
                      user.save();
                    }
              }
              const dashboard =await createStripeDashboardLink(user.stripeConnectId)
              return res.status(200).json({url:dashboard})
          
          }
}



  const createStripeConnectAccount = async (email) => {
    try {
      const account = await stripe.accounts.create({
        type: 'express',
        email:email 
      });
        return account.id;
    
    } catch (error) {
      stripeErrorHandler(error);
    }
  }
  
  const createStripeDashboardLink = async (id)=>{
  
    try {
      const loginLink = await stripe.accounts.createLoginLink(id);
      return loginLink.url;
    } catch (error) {
      stripeErrorHandler(error);
    }
  }
  
  const completeOnboardingLink = async (id)=>{
    try {
     const  url = await stripe.accountLinks.create({
        account: id,
        refresh_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/account/prompts`,
        type: 'account_onboarding',
      });
      return url.url
    } catch (error) {
      stripeErrorHandler(error);
    }
  
  
  }


  const reteriveVendor =async (id)=>{
    try {
        const account = await stripe.accounts.retrieve(id);
        return account;
    } catch (error) {
        stripeErrorHandler(error);
    }


  }
  

