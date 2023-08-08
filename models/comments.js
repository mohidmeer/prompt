import { Schema, model, models } from 'mongoose';



const commentSchema = new Schema(
  {
    productId: {type: Schema.Types.ObjectId,ref: 'product'},
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    content: { type: String },
  },
  { timestamps: true } 
);

const Comment = models.comment || model('comment', commentSchema);

export default Comment;