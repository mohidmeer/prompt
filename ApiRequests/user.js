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
export async function DeleteComments(id,comment_id){
  try {
    const response = await AxiosClient.put(`/prompts/comment/${id}`,comment_id)
    toast.info('Deleted Comment Successfully')
    return response;
  } catch (error) {
     toast.info('General Server Error')
  }
}
export async function UpdateComments(id,comment_id){
  try {
    const response = await AxiosClient.patch(`/prompts/comment/${id}`,comment_id)
    toast.info('Updated Comment Successfully')
    return response;
  } catch (error) {
     toast.info('General Server Error')
  }
}
export async function Updateprofile(d){
  const id = toast.loading('Updating profile')
  await AxiosClient.post(`/profile`,d)
  .then((res)=>{
    toast.update(id, { render: "Profile Updated", type: "success", isLoading: false });
  })
  .catch((e)=>{
    toast.update(id, { render: "Server Error", type: "error", isLoading: false })
  })
}
export async function checkUserNameTaken(d){
  try {
    const u = await AxiosClient.put(`/profile`,d)
    return u.data
  } catch (error) {
    toast.error('Server Error Occured')
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

export async function getUserProfile(v=''){
  return await AxiosClient.get(`/profile/`+v)
  .then((res)=>{ return res.data.profile})
  .catch((e)=>{serverErrorHandler('Genaral Server Error')})
 }


 export async function AddEmotionsToProfile(id,emotionType){
  try {
    const response = await AxiosClient.post(`/profile/emotion/${id}`,emotionType)
    toast.info(response.data.message)
    return response;
  } catch (error) {
     toast.info('General Server Error')
  }
}


  

