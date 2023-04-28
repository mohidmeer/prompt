import connectMongo from "@/database/conn";
import User from "@/models/user";

export default async function handler(req, res) {
    connectMongo();
    if (req.method === "POST") {
      if (!req.body)
        return res.status(404).json({ error: "Don't have data...!" });
      const { username, email, password } = req.body;
      const checkexisting = await User.findOne({ email });
      if (checkexisting)
        return res.status(409).json({ message: "User Already Exists...!" });

      User.create({ name: username, email: email, password: password })
        .then((data) => {
          return res.status(201).json({ message: 'Account Successfully Created' });
        })
        .catch((error) => {
          return res.status(404).json({ error });
        });
    } else {
      return res
        .status(500)
        .json({ message: "HTTP method not valid only POST Accepted" });
    }
}
