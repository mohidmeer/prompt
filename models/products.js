import { Schema, model, models  } from 'mongoose';
import Emotion from './emotions';
import Comment from './comments';
import shortUUID from 'short-uuid';
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

 productSchema.pre('save', async function(next) {
  if (!this.isModified('slug')) {
    return next();
  }

  const existingEmotion = await Emotion.findOne({ productId: this._id });
  if (!existingEmotion) {
    const emotion = await Emotion.create({
      productId: this._id,
    });
    this.EmotionId = emotion._id;
  }

  const productSlugExists = await Product.findOne({ slug: this.slug });
  if (productSlugExists) {
    const shortSlugUniqueidentifier = shortUUID.uuid();
    this.slug = this.slug + shortSlugUniqueidentifier.substring(0, 5);
  }
  next();
});


const Product = models.product || model('product', productSchema);

export default Product;