import connectMongo from "@/database/conn";
import Product from "@/models/products";
export default async function handler(req, res) {
  connectMongo();
    if (req.method==='POST'){

        if (!req.body)
        return res.status(404).json({ error: "Don't have data...!" });
        const body = req.body;
        return res.status(201).json({body})


    }


}