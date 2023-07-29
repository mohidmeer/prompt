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
    const {messageId}= req.body
    const {newContent} = req.body
    if(req.method==='POST'){
        try {
            let existingComment = await Comment.findOne({ productId :id});
        
            if (existingComment) {
              existingComment.comment.push({
                content:comment,
                userId:session.user.id
              });
              await existingComment.save();
              await Product.findByIdAndUpdate(id,{commentId:existingComment._id})
             return res.status(201).json({'message':'Comment Added Successfully'})
            } 
            else 
            {
              
              existingComment = await Comment.create({
                productId:id,
                comment: [{
                    content:comment,
                    userId:session.user.id
                  }],
              });
              await Product.findByIdAndUpdate(id,{commentId:existingComment._id})
              await existingComment.save();
             return res.status(201).json({'message':'Comment Added Successfully'})
            }
        
            return existingComment;
          } catch (error) {
            console.log(error)
            res.status(500).json({'error':'Server Error'})
          }

          
    }
    if (req.method==='GET'){
      const comments = await Comment.find({productId:id}).populate({
        path:'comment.userId',
        model:'user',
        select:'name avatar'
      });
      res.status(200).json({comments})

    }
    if (req.method==='PUT'){
      
      const comments = await Comment.findByIdAndUpdate(id,{ $pull: { comment: { _id: messageId } } },{ new: true }).populate({
        path:'comment.userId',
        model:'user',
        select:'name avatar'
      });
      res.status(200).json({comments})
    }
    if (req.method==='PATCH'){
      const comments = await Comment.findOneAndUpdate(
        { 'comment._id': id, 'comment._id': messageId}, // Find the specific comment and content within the comment
        { $set: { 'comment.$.content': newContent } }, // Update the content field of the matched comment
        { new: true }
      ).populate({
        path:'comment.userId',
        model:'user',
        select:'name avatar'
      });
      res.status(200).json({comments})
    }



    
}
