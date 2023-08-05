import connectMongo from "@/database/conn";
import Model from "@/models/model";


export default async function handler(req, res) {

    if(req.method === "GET"){
        connectMongo();
        const models= await Model.find();
        return res.status(200).json({models})
    
    }

}