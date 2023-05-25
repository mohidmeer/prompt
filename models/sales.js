import { Schema, model, models } from 'mongoose';
  const saleSchema = new Schema({

    productId:{
        type:Schema.Types.ObjectId,
        ref:'product'
    },
    buyerId:{
        type:Schema.Types.ObjectId,
        ref :'user'
    },
    sellerId:{
        type:Schema.Types.ObjectId,
        ref :'user'
    },
    total:{
        type:Number,
        required:true
    }
  },{timestamps:true})



  const Sale = models.sale || model('sale', saleSchema);

  export default Sale;