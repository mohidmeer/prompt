import serverErrorHandler from "@/lib/server/serverErrorHandler";
import serverSuccessHandler from "@/lib/server/serverSuccessHandler";
import axios from "axios";
const AxiosClient = axios.create({
  baseURL: 'http://localhost:3000/api/admin',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
export async function addNewProduct(values) {
     await AxiosClient.post(`/products`,values)
     .then((res)=>{
        serverSuccessHandler(201,res.data.message)
     })
     .catch((e)=>{serverErrorHandler(e.response.status,e.response.data.error)}) ;
  }
export async function deleteProduct(id) {
     await AxiosClient.delete(`/products/${id}`)
     .then((res)=>{
        serverSuccessHandler(201,res.data.message)
     })
     .catch((e)=>{serverErrorHandler(e.response.status,e.response.data.error);}) ;
  }