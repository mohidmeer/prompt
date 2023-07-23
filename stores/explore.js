import { getFeaturedProduct, getProducts } from '@/ApiRequests/explore';
import serverErrorHandler from '@/lib/server/serverErrorHandler';
import axios from 'axios';
import {create} from 'zustand';


export const useExplore=create((set)=>({
    categories:[],
    products:[],
    featured:[],
    hotest:[],
    latest:[],

    fetchProductData: async (v) =>{
       const p =await getProducts();
       console.log(p)
       set({products:p})
       
    },
    fetchFeatured: async (v) =>{
       const p =await getFeaturedProduct();
       console.log(p)
       set({featured:p})
       
    },
    fetchHotest: async (v) =>{
       const p =await getProducts();
       set({hotest:p})
       
    },
    fetchLatest: async (v) =>{
       const p =await getProducts();
       set({latest:p})
       
    },

    fetchCategoryData: async ()=>{
        axios.get('/api/categories')
         .then((res)=>{ set({categories:res.data.categories}) })
         .catch((error)=>{ serverErrorHandler(205)})
    },
    
}));