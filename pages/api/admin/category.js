import connectMongo from "@/database/conn";
import Category from "@/models/categories";

export default async function handler(req, res) {

    connectMongo();
    if (req.method === "POST") {
      if (!req.body)
        return res.status(404).json({ error: "Don't have data...!" });
      const { name } = req.body;

      // checking if feild exists 
      const ifcategoryexists=await Category.findOne({name:name})
      if (ifcategoryexists){ return res.status(409).json({error:name+' Already Exists'})}

      const slug = name.toLowerCase().replace(/ +/g, "-")
      Category.create({
       name,slug 
      }).then((data)=>{return res.status(201).json({ category: data }); 
      }).catch((error)=>{return res.status(400).json({error})})

    }else if(req.method === "GET"){
      const categories= await Category.find();
      return res.status(200).json({categories})
    }else if (req.method==="PUT"){
       const { id } = req.body;
       Category.findByIdAndDelete(id)
      .then(()=>{return  res.status(200).json({message:"Deleted Successfully"})})
      .catch(()=>{return res.status(400).json({error:"Not Deleted" })})
    }else {
     return res.status(500).json({ message: "HTTP method not valid" });
         }

}