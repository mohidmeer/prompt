
import { Schema, model, models } from 'mongoose';

const contentSchema = new Schema({
    message: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },{timestamps:true});

const notificationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  notifications:[contentSchema]
  
});

const Notification = models.notification || model('notification', notificationSchema);

export default Notification;