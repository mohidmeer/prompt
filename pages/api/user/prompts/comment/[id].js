import connectMongo from "@/database/conn";
import Comment from "@/models/comments";
import Product from "@/models/products";
import { getServerAuthSession } from "@/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {
    connectMongo();
    const session = await getServerAuthSession(req, res)
    if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })   
    }
    const { id } = req.query
    const {comment}=req.body
    if(req.method==='POST'){

        try {
            // Find the existing comment document for the given product ID
            let existingComment = await Comment.findOne({ productId :id});
        
            if (existingComment) {
              // If the comment document exists, update it by pushing the new comment
              existingComment.comment.push({
                content:comment,
                userId:session.user.id
              });
              await existingComment.save();
              res.status(201).json({'message':'Comment Added Successfully'})
            } else {
              
              existingComment = await Comment.create({
                productId:id,
                comment: [{
                    content:comment,
                    userId:session.user.id
                  }],
              });
        
              await existingComment.save();
             return res.status(201).json({'message':'Comment Added Successfully'})
            }
        
            return existingComment;
          } catch (error) {
            res.status(500).json({'error':'Server Error'})
          }

          
    }



    
}
