import { ProfileProductData, getFeaturedProduct, getProducts } from '@/ApiRequests/explore';
import serverErrorHandler from '@/lib/server/serverErrorHandler';
import axios from 'axios';
import { toast } from 'react-toastify';
import {create} from 'zustand';


export const useExplore=create((set)=>({
    categories:[],
    products:[],
    models:[],
    ProductLoading:true,
    PaginationLoading:false,
    ProductLimit:false,
    profileProducts:[] ,

    fetchProfileProductData: async (id)=>{
        const p = await ProfileProductData(id)
        set({profileProducts:p})
    },
    fetchProductData: async (v,page) =>{
       const p =await getProducts(v,page);
       set({products:p})
    },
    fetchProductPaginationData: async (v,page,limit) =>{
        if (useExplore.getState().PaginationLoading===true){
            return
        }
        set({PaginationLoading:true})
        await new Promise(resolve => setTimeout(resolve, 2000));
        const newProducts =await getProducts(v,page,limit);
        if (newProducts.length===0){
            console.log('Limit reached')
            set({PaginationLoading:false})
            set({ProductLimit:true})
            return;
        }
        const currentProducts = useExplore.getState().products;
        const updatedProducts = [...currentProducts , ...newProducts]
        set({products:updatedProducts})
        set({PaginationLoading:false})
        
     
        
    },
    setProductLoading: (v) => set({ ProductLoading: v }),
    setPaginationLoading: (v) => set({ PaginationLoading: v }),
    
    fetchCategoryData: async ()=>{
        axios.get('/api/explore/categories')
         .then((res)=>{ set({categories:res.data.categories}) })
         .catch((error)=>{ toast.error('Server error while loading categories')})
    },
    fetchModelData: async ()=>{
        axios.get('/api/explore/models')
         .then((res)=>{ set({models:res.data.models}) })
         .catch((error)=>{toast.error('Server error while loading models')})
    },
    
}));