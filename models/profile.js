import { Schema, model, models } from 'mongoose';
import shortUUID from 'short-uuid';
  const profileSchema = new Schema({
  userId:{
    type:Schema.Types.ObjectId,
     ref :'user'
  },
  name: {
    type: String,
    required: true,
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


  profileSchema.pre('save',async function(next){

    if (!this.isModified('name')) {
    
      return next();
    
    }

    const profileName = Profile.findOne({name:this.name})
    
    if (profileName){
    
      const shortSlugUniqueidentifier = shortUUID.uuid();
    
      this.name = this.slug + shortSlugUniqueidentifier.substring(0, 5);
    
    }
    
    next();

});

  
  const Profile = models.profile || model('profile', profileSchema);

export default Profile;