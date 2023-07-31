import { Schema, model, models } from 'mongoose';
  const profileSchema = new Schema({

  userId:{
    type:Schema.Types.ObjectId,
     ref :'user'
  },
  name: {
    type: String,
    required: true,
    unique:true,
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
  discord:{
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

  
  const Profile = models.profile || model('profile', profileSchema);

export default Profile;