import connectMongo from "@/database/conn";
import Notification from "@/models/notifications";
import Product from "@/models/products";
import Profile from "@/models/profile";


export async function sendProductNotifications(product_id,user_id){
    connectMongo();
    const P = await Profile.find({userId:user_id}).select('followerlist');
    const product = await Product.findById(product_id);
    const notificationMessage = 'Added New Prompt '+ product.name;

    try {
      P[0].followerlist.map(async (fId) => {
          let notificationDoc = await Notification.findOne({ userId: fId })
          if (!notificationDoc) {
            notificationDoc = await Notification.create({
              userId: fId ,
              notifications: [],
            });
          }
            notificationDoc.notifications.push({
             message: notificationMessage,
             productId:product._id,
             type:'Prompt',
            });
            notificationDoc.notification
          await notificationDoc.save();
      });
        
      } catch (error) {
        console.error('Error sending notifications:', error);
        throw new Error('Failed to send notifications');
      }

}