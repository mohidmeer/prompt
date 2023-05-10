import serverErrorHandler from "@/lib/server/serverErrorHandler";
import serverSuccessHandler from "@/lib/server/serverSuccessHandler";
import { useProducts } from "@/stores/admin/products";
import axios from "axios";
const AxiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/admin`,
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
export async function approveProduct(id) {
     await AxiosClient.post(`/products/approve`,{id})
     .then((res)=>{
        serverSuccessHandler(202,res.data.message)
     })
     .catch((e)=>{serverErrorHandler(e.response.status,e.response.data.error);}) ;
  }
export async function rejectProduct(id) {
     await AxiosClient.post(`/products/reject`,{id})
     .then((res)=>{
        serverSuccessHandler(202,res.data.message)
     })
     .catch((e)=>{serverErrorHandler(e.response.status,e.response.data.error);}) ;
  }
