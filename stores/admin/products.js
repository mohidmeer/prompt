import serverErrorHandler from '@/lib/server/serverErrorHandler';
import axios from 'axios';
import {create} from 'zustand';


export const useProducts=create((set)=>({
    products:[],
    fetchProductData: async ()=>{
        axios.get('/api/admin/products')
         .then((res)=>{ set({products:res.data.products}) })
         .catch((error)=>{ serverErrorHandler(205)})
    },
}));