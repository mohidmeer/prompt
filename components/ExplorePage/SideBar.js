import React, { useEffect, useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi';
import CheckBox from '../CheckBox';
import { useRouter } from 'next/router';
import { useUserStore } from '@/stores/user/user';
const SideBar = ({pq,spq}) => {
    const [ scrollPosition, setScrollPosition ] = useState(0);
    const [ isScrolled, setIsScrolled ] = useState(false);
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
      setIsScrolled(currentPosition > 55);
    };
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
      <>
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <BiMenuAltLeft className="w-6 h-6" />
        </button>
        <aside
          id="logo-sidebar"
          className={`bg-white
      fixed top-[186px] 
      left-0 z-40 w-60 
      h-screen 
      border-r
      transition-transform 
      -translate-x-full 
      sm:translate-x-0  
      ${isScrolled
              ? "lg:top-[90px] md:top-[90px] top-[85px] "
              : "md:top-[186px] top-[300px]"
            }`}
        >
          <div className="h-full px-3 py-4 overflow-y-auto ">
            <CategoryFilter pq={pq} spq={spq} />
          </div>
        </aside>
      </>
    );
}

export default SideBar




const CategoryFilter = ({pq,spq}) => {


   const router=useRouter();

    const {categories,fetchCategoryData} = useUserStore()
   const [sortBy,setSortBy]=useState('')
    const [category,setCategory]=useState('')

    const removeQueryParam = (param) => {
      const query = new URLSearchParams(router.query)
      query.delete(param)
      router.push({
        pathname: router.pathname,
        search: query.toString(),
      })
    }

    useEffect(()=>{
      if (router.query['sortBy']){
        setSortBy(router.query['sortBy'])
      }
    },[router.query['sortBy']])
    useEffect(()=>{
      if (router.query['category']){
        setCategory(router.query['category'])
      }
    },[router.query['category']])
    useEffect(()=>{
      fetchCategoryData();
      if (sortBy===''){
        removeQueryParam('sortBy')
      }else{
        router.query.sortBy=sortBy
        router.push({
          pathname: router.pathname,
          query:router.query
        })
      }
      spq(window.location.href)
     },[sortBy])
    useEffect(()=>{

      if (category===''){
        removeQueryParam('category')
      }else{
        router.query.category=category
        router.push({
          pathname: router.pathname,
          query:router.query
        })
      }
     },[category])
    
  
      const handleSortChange = (event) => {
        if (event.target.value === sortBy) {
          setSortBy('')

        } else {
          setSortBy(event.target.value);
        }
      };
      
      const handleCategoriesChange = (event) => {
        if (event.target.value === category ) {
          setCategory('');
        } else {
          setCategory(event.target.value);
        }
      };




    return (
      <>
        <div className="border-b-2 border-dashed  p-4"> 
          <p className="font-bold text-xl mb-2">Sort By</p> 
          <div className="grid gap-1">
            <CheckBox label="Latest" value={'latest'} selected={sortBy} handle={handleSortChange} />
            <CheckBox label="Top" value={'top'}       selected={sortBy} handle={handleSortChange} />
          </div>
        </div>
        <div className="border-b-2 border-dashed  p-4">
            <p className="font-bold text-xl mb-2">Category</p>
            <div className="gap-1 grid">
              {categories.map((c)=>(
                  <CheckBox key={c._id} label={c.name} value={c.slug}  selected={category} handle={handleCategoriesChange} />
              ))}
            </div>
        </div> 
      </>
    );
  };