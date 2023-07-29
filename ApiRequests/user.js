import serverErrorHandler from "@/lib/server/serverErrorHandler";
import serverSuccessHandler from "@/lib/server/serverSuccessHandler";
import axios from "axios";
import { toast } from "react-toastify";
const AxiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/user`,
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
     .catch((e)=>{toast.error('Server Error')}) ;
  }
export async function deleteProduct(id) {
     await AxiosClient.delete(`/prompts/${id}`)
     .then((res)=>{
        serverSuccessHandler(201,res.data.message)
     })
     .catch((e)=>{toast.error('Server Error')}) ;
  }

export async function getUserProducts(){
   return await AxiosClient.get(`/prompts`)
   .then((res)=>{ return res.data.products})
   .catch((e)=>{toast.error('Server Error')})
  }
export async function getUserFavourites(){
   return await AxiosClient.get(`/prompts/favourite`)
   .then((res)=>{ return res.data.favourites})
   .catch((e)=>{toast.error('Server Error')})
  }
export async function getUserPurchases(){
   return await AxiosClient.get(`/prompts/purchases`)
   .then((res)=>{ return res.data.purchases})
   .catch((e)=>{toast.error('Server Error')})
  }
export async function getUserSales(){
   return await AxiosClient.get(`/prompts/sales`)
   .then((res)=>{ return res.data.sales})
   .catch((e)=>{toast.error('Server Error')})
  }


export async function AddToFavourites(id){
    await AxiosClient.post(`/prompts/favourite/${id}`)
   .then((res)=>{ toast.info('Server Error')})
   .catch((e)=>{ serverErrorHandler(404) })
  }

export async function AddEmotions(id,emotionType){
  try {
    const response = await AxiosClient.post(`/prompts/emotion/${id}`,emotionType)
    toast.info(response.data.message)
    return response;
  } catch (error) {
     toast.info('General Server Error')
  }
}
export async function AddComment(id,content){
  try {
    const response = await AxiosClient.post(`/prompts/comment/${id}`,content)
    toast.info(response.data.message)
    return response;
  } catch (error) {
     toast.info('General Server Error')
  }
}
export async function GetComments(id,content){
  try {
    const response = await AxiosClient.get(`/prompts/comment/${id}`)
    return response;
  } catch (error) {
     toast.info('General Server Error')
  }
}




export async function buyThePrompt(id){
  try {
    const response = await AxiosClient.post(`/prompts/buy`, id);
    return response.data.url;
  } catch (error) {
    toast.error('Server Error');
  }
  }

export async function getOnboardingUrl(){
  try {
    const response = await AxiosClient.get('/stripe')
    return response.data.url 
  } catch (error) {
    toast.error('Server Error')
    
  }
}

  

