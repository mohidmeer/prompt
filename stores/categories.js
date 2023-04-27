import serverErrorHandler from '@/lib/serverErrorHandler';
import axios from 'axios';
import {create} from 'zustand';


export const useCategory=create((set)=>({
    categories:[],
    fetchCategoryData: async ()=>{
        axios.get('/api/admin/category')
         .then((res)=>{ set({categories:res.data.categories}) })
         .catch((error)=>{ serverErrorHandler(205)})
    },
}));