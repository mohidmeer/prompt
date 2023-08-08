import { Schema, model, models  } from 'mongoose';
import Emotion from './emotions';
import Comment from './comments';
  const productSchema = new Schema({
    
    name:{
        type:String,
        required:true,
    },
    slug:{
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
        ref:'user'
    },
    stripePriceId:{
        type:String,
        required:true,
    },
    model:{
        type:String,
        required:true,
        default:'Chat-GPT'
    },
    favourites:{
        type:Number,
        default:0,
        min: 0
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
    featured: { 
      type: Boolean, 
      default: false 
    },
    status:{
        type: String,
        enum: ['APPROVED', 'PENDING','REJECTED'],
        default:'PENDING'
    },
    EmotionNumbers:{
        likes: {
            type: Number,
            default: 0,
            min: 0
          },
          favorites: {
            type: Number,
            default: 0,
            min: 0
          },
          dislikes: {
            type: Number,
            default: 0,
            min: 0
          },
          happy: {
            type: Number,
            default: 0,
            min: 0
          },
          sad: {
            type: Number,
            default: 0,
            min: 0
          },
    },
    EmotionId:{
      type:Schema.Types.ObjectId,
      ref: 'emotion'
    },
    
 },{timestamps:true})

  productSchema.post('save',async function(doc,next){

      const existingEmotion = await Emotion.findOne({ productId: doc._id });
      if (!existingEmotion) {
        const emotion = await Emotion.create({
          productId: doc._id,
        });
        doc.EmotionId = emotion._id;
        await doc.save();
      }
      next();

  });





  const Product = models.product || model('product', productSchema);

export default Product;