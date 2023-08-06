import axios from "axios";
import { toast } from "react-toastify";
const buildQueryString = (queryParams) => {
  const queryString = Object.keys(queryParams)
    .map((key) => {
      const value = queryParams[key];
      return value !== undefined ? `${encodeURIComponent(key)}=${encodeURIComponent(value)}` : null;
    })
    .filter(Boolean)
    .join('&');

  return queryString ? `?${queryString}` : '';
};


const AxiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
export async function getProducts(q,p,limit){

  const queryParams = {
    page: p,
    category: q,
    limit:limit
  };  
  const queryString = buildQueryString(queryParams);
  console.log(queryString)
    return await AxiosClient.get(`/products/${queryString}`)
   .then((res)=>{ console.log(res.data.products); return res.data.products; })
   .catch((e)=>{toast.error('General Server Error')})
  }
export async function getProduct(slug){
  await new Promise(resolve => setTimeout(resolve, 1000));
   return await AxiosClient.get(`/products/slug/${slug}`)
   .then((res)=>{ return res.data.products})
   .catch((e)=>{toast.error('General Server Error')})
  }

export async function getUserProfile(){
   return await AxiosClient.get(`/user/profile`)
   .then((res)=>{ return res.data.profile})
   .catch((e)=>{toast.error('Genaral Server Error')})
  }

  export async function ProfileProductData(id){
    return await AxiosClient.get(`/explore/profile/${id}`)
    .then((res)=>{ return res.data.products})
    .catch((e)=>{toast.error('Server Error')})
 }



