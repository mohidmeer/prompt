import React, { useEffect, useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi';
import { useCategoryStore } from '@/stores/categoryStore';
import CheckBox from '../CheckBox';
const SideBar = () => {
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
          class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <div class="h-full px-3 py-4 overflow-y-auto ">
            <CategoryFilter />
          </div>
        </aside>
      </>
    );
}

export default SideBar




const CategoryFilter = () => {

    const { sortBy , 
            setSortBy,
            setSortByDefault,
            time,
            setTime,
            setTimeDefault,
            categories,
            setCategories,
            setCategoriesDefault,
           } = useCategoryStore();
  
      const handleSortChange = (event) => {
        if (event.target.value === sortBy) {
          setSortByDefault();
        } else {
          setSortBy(event.target.value);
        }
      };
      const handleTimeChange = (event) => {
        if (event.target.value === time) {
          setTimeDefault();
        } else {
          setTime(event.target.value);
        }
      };
      const handleCategoriesChange = (event) => {
        if (event.target.value === categories ) {
          setCategoriesDefault();
        } else {
          setCategories(event.target.value);
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
            <p className="font-bold text-xl mb-2">Time</p>
            <div className="gap-1 grid">
              <CheckBox label={'This Month'}  value={'week'}  selected={time}  handle={handleTimeChange}/>
              <CheckBox label={'This Week'}   value={'month'} selected={time}  handle={handleTimeChange}/>           
            </div>
        </div>
        <div className="border-b-2 border-dashed  p-4">
            <p className="font-bold text-xl mb-2">Category</p>
            <div className="gap-1 grid">
              <CheckBox label={'Clothes'} value={'clothes'}  selected={categories} handle={handleCategoriesChange} />
              <CheckBox label={'Animal'}  value={'animal'}  selected={categories} handle={handleCategoriesChange} />
              <CheckBox label={'3D'}      value={'3d'}  selected={categories} handle={handleCategoriesChange} />
              
            </div>
        </div>
      </>
    );
  };