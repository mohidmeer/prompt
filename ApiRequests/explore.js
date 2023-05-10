import serverErrorHandler from "@/lib/server/serverErrorHandler";
import serverSuccessHandler from "@/lib/server/serverSuccessHandler";
import { useProducts } from "@/stores/admin/products";
import axios from "axios";
const AxiosClient = axios.create({
  baseURL: `${process.env.API_URL}`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
export async function getProducts(){
   return await AxiosClient.get(`/products`)
   .then((res)=>{ return res.data.products})
   .catch((e)=>{serverErrorHandler(e.response.status,'Genaral Server Error')})
  }
export async function getProduct(slug){
   return await AxiosClient.get(`/products/${slug}`)
   .then((res)=>{ return res.data.products})
   .catch((e)=>{serverErrorHandler(e.response.status,'Genaral Server Error')})
  }
export async function getFeaturedProduct(){
   return await AxiosClient.get(`/products/featured`)
   .then((res)=>{ return res.data.products})
   .catch((e)=>{serverErrorHandler('Genaral Server Error')})
  }
export async function getUserProfile(){
   return await AxiosClient.get(`/user/profile`)
   .then((res)=>{ return res.data.profile})
   .catch((e)=>{serverErrorHandler('Genaral Server Error')})
  }




