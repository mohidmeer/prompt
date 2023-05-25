import serverErrorHandler from "@/lib/server/serverErrorHandler";
import serverSuccessHandler from "@/lib/server/serverSuccessHandler";
import axios from "axios";
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
     .catch((e)=>{serverErrorHandler(e.response.status,e.response.data.error)}) ;
  }
export async function deleteProduct(id) {
     await AxiosClient.delete(`/prompts/${id}`)
     .then((res)=>{
        serverSuccessHandler(201,res.data.message)
     })
     .catch((e)=>{serverErrorHandler(e.response.status,e.response.data.error);}) ;
  }

export async function getUserProducts(){
   return await AxiosClient.get(`/prompts`)
   .then((res)=>{ return res.data.products})
   .catch((e)=>{serverErrorHandler(e.response.status,'Genaral Server Error')})
  }
export async function getUserFavourites(){
   return await AxiosClient.get(`/prompts/favourite`)
   .then((res)=>{ return res.data.favourites})
   .catch((e)=>{serverErrorHandler(e.response.status,'Genaral Server Error')})
  }
export async function getUserPurchases(){
   return await AxiosClient.get(`/prompts/purchases`)
   .then((res)=>{ return res.data.purchases})
   .catch((e)=>{serverErrorHandler(e.response.status,'Genaral Server Error')})
  }
export async function getUserSales(){
   return await AxiosClient.get(`/prompts/sales`)
   .then((res)=>{ return res.data.sales})
   .catch((e)=>{serverErrorHandler(e.response.status,'Genaral Server Error')})
  }


export async function AddToFavourites(id){
    await AxiosClient.post(`/prompts/favourite/${id}`)
   .then((res)=>{ serverSuccessHandler(200,res.data.message)})
   .catch((e)=>{ serverErrorHandler(404) })
  }
export async function buyThePrompt(id){
  try {
    const response = await AxiosClient.post(`/prompts/buy`, id);
    return response.data.url;
  } catch (error) {
    serverErrorHandler(404);
  }
  }

export async function getOnboardingUrl(){
  try {
    const response = await AxiosClient.get('/stripe')
    console.log(response)
    return response.data.url 
  } catch (error) {
    serverErrorHandler(404);
    console.log(error)
  }
}

  

