import Image from "next/image"
import Link from "next/link"


const Item = ({description,image}) => {
  return (
<div className='item  '>
     <div className="grid lg:grid-cols-3  grid-cols-1  gap-10 items-center">
              <div class=" order-last lg:order-first md:order-last mt-4 lg:pl-8  flex flex-col justify-center ">
                <div className=' '>
                  <h2 class="text-4xl  lg:text-4xl font-extrabold text-center ">
                    {description}
                  </h2>
                  <p class="mt-3 text-lg text-gray-600">
                    Prompts are becoming a powerful new way of programming AI models like DALL·E, Midjourney & GPT.
                    However, its hard to find good quality prompts online
                  </p>
                  <div  className=' flex justify-center'>
                    <Link className="mt-10 py-4 w-1/3  text-center rounded-md font-bold text-white px-4  bg-green" href='http://localhost:5900/'>
                      Hire
                    </Link>
                  </div>
              </div>
             </div>
            <div className=" col-span-2  ">
              <Image className="rounded-xl" src={image} width={1000} height={800} />
            </div>
     </div>

    </div>
  )
}

export default Item