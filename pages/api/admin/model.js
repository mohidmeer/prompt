import connectMongo from "@/database/conn";
import Model from "@/models/model";
import { getServerAuthSession } from "../auth/[...nextauth]";


export default async function handler(req, res) {
  const session = await getServerAuthSession(req, res)
  if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })
    } else if (session.user.role === 'USER') //checking if user role is not admin 
    {
        return res.status(403).json({ error: 'Forbidden routes' })
    }
    connectMongo();
    if (req.method === "POST") {
      if (!req.body)
        return res.status(404).json({ error: "Don't have data...!" });
      const { name } = req.body;

      // checking if feild exists 
      const ifmodelexists=await Model.findOne({name:name})
      if (ifmodelexists){ return res.status(409).json({error:name+' Already Exists'})}
      const slug = name.toLowerCase().replace(/ +/g, "-")
      Model.create({
       name,slug 
      }).then((data)=>{return res.status(201).json({ model: data }); 
      }).catch((error)=>{return res.status(400).json({error})})

    }else if(req.method === "GET"){
      const models= await Model.find();
      return res.status(200).json({models})
    }else if (req.method==="PUT"){
       const { id } = req.body;
       Model.findByIdAndDelete(id)
      .then(()=>{return  res.status(200).json({message:"Deleted Successfully"})})
      .catch(()=>{return res.status(400).json({error:"Not Deleted" })})
    }else {
     return res.status(500).json({ message: "HTTP method not valid" });
         }

}