import { getProducts } from '@/ApiRequests/explore';
import serverErrorHandler from '@/lib/server/serverErrorHandler';
import axios from 'axios';
import {create} from 'zustand';


export const useExplore=create((set)=>({
    categories:[],
    products:[],
    fetchProductData: async (v) =>{
       const p =await getProducts();
       set({products:p})
       console.log(p)
    },
    fetchCategoryData: async ()=>{
        axios.get('/api/categories')
         .then((res)=>{ set({categories:res.data.categories}) })
         .catch((error)=>{ serverErrorHandler(205)})
    },
    
}));