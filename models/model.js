import { Schema, model, models } from 'mongoose';
  const modelSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  slug:{
    type:String,
    required:true,
  }
  },{timestamps:true})

  const Model = models.model || model('model', modelSchema);

export default Model;