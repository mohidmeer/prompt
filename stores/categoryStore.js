import {create} from 'zustand';

export const useCategoryStore = create((set) => ({ 
  sortBy:'latest',
  setSortBy : (value)=>set({sortBy:value}),
  setSortByDefault : ()=>set({sortBy:''}),

  categories:'3d',
  setCategories:(value)=>set({categories:value}),
  setCategoriesDefault:()=>set({categories:''}),


  time:'week',
  setTime:(value)=>set({time:value}),
  setTimeDefault:()=>set({time:''}),

}));