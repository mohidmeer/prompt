import { getServerAuthSession } from "./[...nextauth]";


export default async function handler(req,res){
  
   if (req.method==='GET'){
    const session = await getServerAuthSession(req,res)
    return  res.status(200).json({session})
   }else{

    return res.status(409)
   }
}