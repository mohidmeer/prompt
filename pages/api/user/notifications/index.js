import connectMongo from "@/database/conn";
import { getServerAuthSession } from "../../auth/[...nextauth]";
import Notification from "@/models/notifications";

export default async function handler(req, res) {
  connectMongo();
    const session = await getServerAuthSession(req, res)
    if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })
    }
    if (req.method==='GET'){
      const notifications= await Notification.findOne({userId:session.user.id});
      return res.status(200).json({notifications})
    }


}