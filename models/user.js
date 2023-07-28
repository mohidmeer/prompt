import { Schema, model, models } from 'mongoose';
import bcrypt from "bcrypt";
import Profile from './profile';


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
  avatar:{
    type:String,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
  favorites:[
    {
      type:Schema.Types.ObjectId,
      ref:'product'
    }
  ],
  purchases:[
    {
      type:Schema.Types.ObjectId,
      ref:'product'
    }
  ],
  following:[
    {
      type:Schema.Types.ObjectId,
      ref:'user'
    }
  ],
  stripeConnectId:{
    type:String,
    default:''
  },
  stripePayments:{
    type:Boolean,
    required:true,
    default:false
  }
  
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
  });

  userSchema.post('save',async function(doc,next){
    const name=doc.name
    const id=doc._id
    await Profile.create({
           userId:id,
           name:name.toLowerCase().replace(/ +/g, ""),
        }).then(()=>next()).catch((error)=>next(error))
  });



  const User = models.user || model('user', userSchema);

export default User;