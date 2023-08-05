import { useExplore } from "@/stores/explore";
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

const TagBar = () => {
    const router =useRouter();
    const [Loading,setLoading] =useState(true)
    const [page,setPage] = useState(1);
  
    const {categories,
           fetchCategoryData,
           fetchProductData,
           setProductLoading,
           fetchProductPaginationData,
           PaginationLoading,ProductLimit}=useExplore(); 

           const fetchData= async ()=>{
             await fetchProductPaginationData(router.query.category, page + 1,14) 
             .then(() => {
               setPage((prevPage) => prevPage + 1);
               
             })
             .catch((error) => {
               console.error('Error fetching new products:', error);
               
             });
           }
           const handleScroll = async () => {
            if (PaginationLoading===true){return;}
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            const totalHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            if (scrollPosition + windowHeight >= totalHeight) {
              if (!ProductLimit){
                await fetchData();
              }
                
              }
             
          };
        
          useEffect(() => {
    
                window.addEventListener('scroll', handleScroll);
            
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, [handleScroll]);


    
          useEffect(() => {
            fetchCategoryData().then(()=>{
              setLoading(false);
            })
          },[])


    

        useEffect(()=>{
            setProductLoading(true);
            fetchProductData(router.query.category,page).then(() => {
              setProductLoading(false);
              setPage(1)
            });
            
        },[router.query])


  return (
    <div className="p-2 border-dark-border text-sm">
      <div className="flex gap-1 overflow-x-auto flex-wrap ">
        <Link  href={'/'} className={`font-bold px-3 py-1 rounded bg-dark-button  ${!(router.query.category) ?'!bg-dark-info':'' }`}>
          All
        </Link>
        {!Loading &&
        categories.map((c)=>(
          <Link key={c._id} href={`/?category=${c.slug}`}  className={`font-bold px-3 py-1 rounded bg-dark-button ${router.query.category===c.slug && '!bg-dark-info' } }`}>{c.name} </Link>
        ))
        } 
    
       
      </div>
    </div>
  )
}

export default TagBar