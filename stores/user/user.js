import { getUserProducts } from '@/ApiRequests/user';
import serverErrorHandler from '@/lib/server/serverErrorHandler';
import axios from 'axios';
import {create} from 'zustand';


export const useUserStore=create((set)=>({
    products:[],
    categories:[],
    fetchCategoryData: async()=>{
        axios.get('/api/admin/category')
        .then((res)=>{set({categories:res.data.categories})})
        .catch((error)=>{serverErrorHandler(205)})
    },
    fetchProductData: async ()=>{
        let p = await getUserProducts()
        set({products:p})
    },
}));