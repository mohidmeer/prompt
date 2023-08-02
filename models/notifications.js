
import { Schema, model, models } from 'mongoose';

const contentSchema = new Schema({
   
    message: {
      type: String,
      required: true,
    },
    productId:{
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
    type: {
      type: String,
      required: true,
      enum: ['Prompt', 'Follow', 'Approved'],
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

const MAX_NOTIFICATIONS = 10;
notificationSchema.pre('save', function (next) {
  if (this.notifications.length >= MAX_NOTIFICATIONS) {
    this.notifications = this.notifications.slice(1, MAX_NOTIFICATIONS);
  }
  next();
});

const Notification = models.notification || model('notification', notificationSchema);

export default Notification;