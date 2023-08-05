import { Schema, model, models } from 'mongoose';

const messageSchema = new Schema(
  {
    content: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
  },
  { timestamps: true } 
);

const commentSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
    comment: [messageSchema], 
  },
  { timestamps: true } 
);

const Comment = models.comment || model('comment', commentSchema);

export default Comment;