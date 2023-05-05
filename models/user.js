import { Schema, model, models } from 'mongoose';
import bcrypt from "bcrypt";
  const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
  favourites:[
    {
      type:Schema.Types.ObjectId,
      ref:'product'
    }
  ]
  
  },{timestamps:true})

  userSchema.pre('save', async function(next) {
      try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
      } catch (error) {
        next(error)
      }
  })



  const User = models.user || model('user', userSchema);

export default User;