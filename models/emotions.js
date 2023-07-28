import { Schema, model, models  } from 'mongoose';
  const emotionSchema = new Schema({
    productId:{
        type:Schema.Types.ObjectId,
         ref :'product'
     },
    likes:[
        { type:Schema.Types.ObjectId,
          ref:'user'
        }
    ],
    dislikes:[
        { type:Schema.Types.ObjectId,
          ref:'user'
        }
    ],
    favorites:[
        { type:Schema.Types.ObjectId,
          ref:'user'
        }
    ],
    happy:[
        { type:Schema.Types.ObjectId,
          ref:'user'
        }
    ],
    sad:[
        { type:Schema.Types.ObjectId,
          ref:'user'
        }
    ],


  },{timestamps:true})


  const Emotion = models.emotion || model('emotion', emotionSchema);

export default Emotion;