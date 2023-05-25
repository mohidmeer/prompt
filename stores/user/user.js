import { getUserFavourites, getUserProducts, getUserPurchases, getUserSales, } from '@/ApiRequests/user';
import {  getUserProfile } from '@/ApiRequests/explore';
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
    fetchProfile: async ()=>{
        let profile = await getUserProfile()
        set({profile:profile})
    },
    fetchSales: async ()=>{
        let sales =await getUserSales()
        set({sales:sales})
    }
}));