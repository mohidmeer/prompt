import serverErrorHandler from "@/lib/server/serverErrorHandler";
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
        toast.success('Created successfully')
     })
     .catch((e)=>{toast.error('Error Occured')}) ;
}
export async function deleteProduct(id) {
  const tid = toast.loading('Loading')
     await AxiosClient.delete(`/prompts/${id}`)
     .then((res)=>{
        toast.update(tid, { render: res.data.message, type:'success', isLoading: false ,autoClose:1000 })
     })
     .catch((e)=>{
        toast.update(tid, { render: "Server Error", type: "error", isLoading: false ,autoClose:1000})
     }) ;
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
     toast.error('General Server Error')
  }
}
export async function GetComments(id){
  try {
    const response = await AxiosClient.get(`/prompts/comment/${id}`)
    console.log(response.data.comments)
    return response;
  } catch (error) {
     toast.info('General Server Error')
  }
}
export async function DeleteComments(id){
  try {
    const response = await AxiosClient.delete(`/prompts/comment/${id}`)
    toast.info('Deleted Comment Successfully')
    return response;
  } catch (error) {
    console.log(error)
     toast.info('General Server Error')
  }
}
export async function UpdateComments(id,newContent){
  try {
    const response = await AxiosClient.patch(`/prompts/comment/${id}`,newContent)
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
 export async function getUserPublicProfile(v=''){
  try {
    const response = await AxiosClient.get(`/profile/`+v)
    toast.info(response.data.message)
    return response.data.profile;
  } catch (error) {
    console.log(error)
     toast.info('General Server Error')
  }
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
 export async function followProfile(name,data){
  const id = toast.loading('Loading')
  try {
    const response = await AxiosClient.post(`/profile/${name}`,data)
    toast.update(id, { render: response.data.message, type: "success", isLoading: false ,autoClose:1000});
  } catch (error) {
    toast.update(id, { render: "Server Error", type: "error", isLoading: false })
  }
}

export async function getUserNotifications(){
  try {
    const response  = await AxiosClient.get('/notifications');
    return response.data.notifications
  } catch (error) {
    toast.error('Error occured while reteriving notifications')
  }
}

  

