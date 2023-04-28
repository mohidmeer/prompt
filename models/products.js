import { Schema, model, models } from 'mongoose';
  const productSchema = new Schema({
    
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    instructions:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    vendorId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    stripeId:{
        type:String,
        required:true,
        default:'st_sd58xas4747'

    },
    model:{
        type:String,
        required:true,
        default:'Chat-GPT'
    },
    images:[{
        type:String,
        validate: {
            validator: function(images) {
              return images && images.length > 0;
            },
            message: 'At least one image is required'
          }  
    }],
    isApproved:{
        type: String,
        enum: ['APPROVED', 'PENDING','REJECTED'],
        default:'PENDING'
    }

  },{timestamps:true})


  const Product = models.product || model('product', productSchema);

export default Product;