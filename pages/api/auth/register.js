import User from '@/models/user'
export default async function handler(req, res) {
    if (req.method === 'POST') {

        // if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        // const { username, email, password } = req.body;

        // const checkexisting = await User.findOne({ email });
        // if(checkexisting) return res.status(422).json({ message: "User Already Exists...!"});

    }else{

        res.status(420).json({ message: "HTTP method not valid only POST Accepted"})
    }
  }
  