import { getUserFavourites, getUserProducts } from '@/ApiRequests/user';
import serverErrorHandler from '@/lib/server/serverErrorHandler';
import axios from 'axios';
import {create} from 'zustand';


export const useUserStore=create((set)=>({
    products:[],
    categories:[],
    favourites:[],
    purchases:[],
    fetchCategoryData: async()=>{
        axios.get('/api/categories')
        .then((res)=>{set({categories:res.data.categories})})
        .catch((error)=>{serverErrorHandler(205)})
    },
    fetchProductData: async ()=>{
        let p = await getUserProducts()
        set({products:p})
    },
    fetchFavourites: async ()=>{
        let p = await getUserFavourites()
        set({favourites:p})
    },
    fetchPurchases: async ()=>{
        let p = await getUserFavourites()
        set({purchases:p})
    },
}));