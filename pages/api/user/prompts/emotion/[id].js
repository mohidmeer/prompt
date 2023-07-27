import connectMongo from "@/database/conn";
import Emotion from "@/models/emotions";
import Product from "@/models/products";
import User from "@/models/user";
import { getServerAuthSession } from "@/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {

    connectMongo();
    const { id } = req.query
    const {EmotionType}=req.body

    const user= await User.findById('64bc2d8d17f47dcb5669eedf')
    const product = await Product.findById(id)
    const emotion = await Emotion.findById(id)
    return res.json({product})
    const like = async (user,product,emotion)=>{
        return res.status(201).json({emotion})
        // return res.status(201).json('I Like It')
    } 
    const dislike = async ()=>{
        return res.status(201).json('Dont Like It')
    } 
    const happy = async ()=>{
        return res.status(201).json('Happy to see')
    } 
    const sad = async ()=>{
        return res.status(201).json('Sad To see')
    } 
    const favourite = async ()=>{
        return res.status(201).json('This is my favourite')
    } 



    switch (EmotionType) {
        case 'Like':
            return await like();
            break;
        case 'Dislike':
            return await dislike();
            break;
        case 'Favourite':
            return await favourite();
            break;
        case 'Happy':
            return await happy();
            break;
        case 'Sad':
            return await sad();
            break;
        default:
            res.status(500).json({'error':'Invalid Emotion Type'})
            break;
    }

    // return res.json({EmotionType:EmotionType,id:id});
    const session = await getServerAuthSession(req, res)

    if (!session) 
    {
        console.log('Un Authorized')
        return res.status(401).json({ error: 'You are not authorized' })
        
    }

    // const user= await User.findById(session.user.id)

    if (req.method==='POST'){
        const index = user.favourites.indexOf(id);
        if(index===-1){
            await Product.findByIdAndUpdate({_id:id},{$inc:{favourites:1}})
            user.favourites.push(id)
            await user.save()
            return res.status(200).json({message:"Added To Favourites"})
        }else{
            await  Product.findByIdAndUpdate(id,{$inc:{favourites:-1}})
            user.favourites.splice(index, 1);
            await user.save()
            return res.status(200).json({message:"Remove from favourites"})
        }
     }

    
}
