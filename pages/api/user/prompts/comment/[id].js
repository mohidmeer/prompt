import connectMongo from "@/database/conn";
import Comment from "@/models/comments";
import Product from "@/models/products";
import { getServerAuthSession } from "@/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {
    connectMongo();
    const session = await getServerAuthSession(req, res)
    const { id } = req.query
    const {comment}=req.body
    const {newContent} = req.body



    if (req.method==='GET'){
      const comments = await Comment.find({productId:id}).populate({path:'userId' ,select:'avatar name' });
      return  res.status(200).json({comments})
    
    }

    if(req.method==='POST'){
      if (!session){return res.status(401).json({'message':'Unauthorised Access'})}
        try {
          const c = Comment.create({
              productId:id,
              content:comment,
              userId:session.user.id
            })
            
             return res.status(201).json({'message':'Comment Added Successfully'})
          } catch (error) {
            console.log(error)
            res.status(500).json({'error':'Server Error'})
          }
    }
    if (req.method==='DELETE'){
      if (!session){return res.status(401).json({'message':'Unauthorised Access'})}
        const c = await Comment.findById(id)
        if (!c) {
               return res.status(404).json({ message: 'Comment not found' });
          }
        
        if (c.userId==session.user.id.toString() ){
             await Comment.findByIdAndDelete(id)
             return res.status(200).json({'message' : 'Comment Deleted Successfully'})

         }else{

          return res.status(401).json({'message':'Unauthorised Access'})
        
        }


    }
    if (req.method==='PATCH'){
       if (!session){return res.status(401).json({'message':'Unauthorised Access'})}
        const c = await Comment.findById(id)
        if (!c) {
               return res.status(404).json({ message: 'Comment not found' });
          }
        
        if (c.userId==session.user.id.toString() ){
             await Comment.findByIdAndUpdate(id, {content:newContent})
             return res.status(200).json({'message' : 'Comment Deleted Successfully'})

         }else{

          return res.status(401).json({'message':'Unauthorised Access'})
        
        }
    }



    
    
}
