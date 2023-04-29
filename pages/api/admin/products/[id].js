import connectMongo from "@/database/conn";
import Product from "@/models/products";

export default async function handler(req, res) {
    connectMongo();
    const { id } = req.query
    if (req.method==='DELETE'){ 
        Product.findByIdAndDelete(id)
      .then((p)=>{return res.status(200).json({message:p.name+" is Deleted Successfully"})})
      .catch(()=>{return res.status(400).json({error:"Not Deleted" })})
     }
}

