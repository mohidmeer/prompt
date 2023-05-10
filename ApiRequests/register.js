import serverSuccessHandler from "@/lib/server/serverSuccessHandler";
import axios from "axios";
const AxiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/auth`,
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