import connectMongo from "@/database/conn";
import { getServerAuthSession } from "../../auth/[...nextauth]";
import Model from "@/models/model";
import Models from "@/models/Testdata/Models";
export default async function handler(req, res) {

    const session = await getServerAuthSession(req, res)
    if (!session) 
    {
        return res.status(401).json({ error: 'You are not authorized' })
    } else if (session.user.role === 'USER') //checking if user role is not admin 
    {
        return res.status(403).json({ error: 'Forbidden routes' })
    }
    
    if (req.method === 'GET') {
        const cat = Models;
            cat.map( async (c)=>{
                await  Model.create({
                  name:c.name,
                  slug:c.slug
                })
              })
      }
    
    

}



