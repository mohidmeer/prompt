import { Schema, model, models } from 'mongoose';

  const payoutSchema = new Schema({
    stripeTransactionId:{
        type:String,
        required:true
    },
    vendorId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    buyerId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    productId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'product'
    },
    amount:{
        type:Number,
        required:true
    }

    
  },{timestamps:true})



  const Payout = models.payout || model('payout', payoutSchema);

  export default Payout;