import connectMongo from "@/database/conn";
import Notification from "@/models/notifications";
import Product from "@/models/products";
import Profile from "@/models/profile";


export async function sendProductNotifications(product_id,user_id){
    connectMongo();
    const followers = await Profile.find({userId:user_id}).select('followerlist');
    const product = await Product.findById(product_id);
    const notificationMessage = 'Added New Prompt '+ product.name;

    try {
        for (const fId of followers) {
          let notificationDoc = await Notification.findOne({ user: fId })
          if (!notificationDoc) {
            notificationDoc = await Notification.create({
              user: fId,
              notifications: [],
            });
          }
          notificationDoc.notifications.push({
            message: notificationMessage,
          });
          await notificationDoc.save();
        }
      } catch (error) {
        console.error('Error sending notifications:', error);
        throw new Error('Failed to send notifications');
      }

}