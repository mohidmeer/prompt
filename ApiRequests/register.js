import serverSuccessHandler from "@/lib/server/serverSuccessHandler";
import axios from "axios";
const AxiosClient = axios.create({
  baseURL: 'http://localhost:3000/api/auth',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export async function register(values) {
  await AxiosClient.post(`/register`,values)
  .then((res)=>{
     serverSuccessHandler(201,res.data.message)
  })
  .catch((e)=>{

    
  }) ;
}