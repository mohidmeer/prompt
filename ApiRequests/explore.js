import serverErrorHandler from "@/lib/server/serverErrorHandler";
import serverSuccessHandler from "@/lib/server/serverSuccessHandler";
import axios from "axios";



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




