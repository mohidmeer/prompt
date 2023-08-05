import { getUserFavourites, getUserProducts, getUserPurchases, getUserSales,getUserProfile } from '@/ApiRequests/user';
import serverErrorHandler from '@/lib/server/serverErrorHandler';
import axios from 'axios';
import {create} from 'zustand';


export const useUserStore=create((set)=>({
    products:[],
    categories:[],
    favourites:[],
    purchases:[],
    profile:[],
    sales:[],
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
        let p = await getUserPurchases()
        set({purchases:p})
    },
    fetchProfile: async (v)=>{
        let profile = await getUserProfile(v)
        set({profile:profile})
    },
    fetchSales: async ()=>{
        let sales =await getUserSales()
        set({sales:sales})
    }
}));