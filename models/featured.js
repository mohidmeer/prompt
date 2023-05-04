import { Schema, model, models } from 'mongoose';
  const featuredSchema = new Schema({
    
    prompts:[{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Product'
    }]
  },{timestamps:true})


  const Featured = models.featured || model('featured', featuredSchema);

export default Featured;