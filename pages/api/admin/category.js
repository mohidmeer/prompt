import connectMongo from "@/database/conn";

export default async function handler(req, res) {

    connectMongo();
    if (req.method === "POST") {
      if (!req.body)
        return res.status(404).json({ error: "Don't have data...!" });
      const { name } = req.body;
      return res.status(201).json({data:name})
    }else {
        return res
          .status(500)
          .json({ message: "HTTP method not valid only POST Accepted" });
      }

}