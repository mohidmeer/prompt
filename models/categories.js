import { Schema, model, models } from 'mongoose';
  const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  slug:{
    type:String,
    required:true,
  }
  },{timestamps:true})

  const Category = models.category || model('category', categorySchema);

export default Category;