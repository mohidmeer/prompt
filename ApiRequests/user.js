import serverErrorHandler from "@/lib/server/serverErrorHandler";
import serverSuccessHandler from "@/lib/server/serverSuccessHandler";
import { useProducts } from "@/stores/admin/products";
import axios from "axios";
const AxiosClient = axios.create({
  baseURL: 'http://localhost:3000/api/user',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
export async function addNewProduct(values) {
     await AxiosClient.post(`/prompts`,values)
     .then((res)=>{
        serverSuccessHandler(201,res.data.message)
     })
     .catch((e)=>{serverErrorHandler(e.response.status,e.response.data.error)}) ;
  }
export async function deleteProduct(id) {
     await AxiosClient.delete(`/prompts/${id}`)
     .then((res)=>{
        serverSuccessHandler(201,res.data.message)
     })
     .catch((e)=>{serverErrorHandler(e.response.status,e.response.data.error);}) ;
  }
export async function approveProduct(id) {
     await AxiosClient.post(`/prompts/approve`,{id})
     .then((res)=>{
        serverSuccessHandler(202,res.data.message)
     })
     .catch((e)=>{serverErrorHandler(e.response.status,e.response.data.error);}) ;
  }
export async function rejectProduct(id) {
     await AxiosClient.post(`/prompts/reject`,{id})
     .then((res)=>{
        serverSuccessHandler(202,res.data.message)
     })
     .catch((e)=>{serverErrorHandler(e.response.status,e.response.data.error);}) ;
  }

export async function getUserProducts(){
   return await AxiosClient.get(`/prompts`)
   .then((res)=>{ return res.data.products})
   .catch((e)=>{serverErrorHandler(e.response.status,'Genaral Server Error')})
  }



