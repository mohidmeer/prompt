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
  },
  profileId:{

    type:Schema.Types.ObjectId,
      ref:'profile'
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

     const profile = await Profile.findOne({userId:doc._id})

     if (!profile){
        const profile = await Profile.create({
          userId:doc._id,
          name:doc.name.toLocaleLowerCase().replace(/ +/g, "")
        })
        doc.profileId=profile._id
        await doc.save();
     }
     next();
  
  });



  const User = models.user || model('user', userSchema);

export default User;