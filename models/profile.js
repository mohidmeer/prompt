import { Schema, model, models } from 'mongoose';
  const profileSchema = new Schema({

  userId:{
    type:Schema.Types.ObjectId,
     ref :'user'
  },
  name: {
    type: String,
    required: true
  },
  views:{
    type:Number,
    default:0,
    min:0
  },
  followers:{
    type:Number,
    default:0,
    min:0
  },
  followerlist:[
    { 
        type:Schema.Types.ObjectId,
        ref:'user'
    }
  ],
  facebook:{
    type:String,
    default:''
  },
  twitter:{
    type:String,
    default:''
  },
  youtube:{
    type:String,
    default:''
  },
  instagram:{
    type:String,
    default:''
  },
  website:{
    type:String,
    default:''
  },
  bio:{
    type:String,
    default:''
  },
  
  },{timestamps:true})

  
  const Profile = models.profile || model('profile', profileSchema);

export default Profile;