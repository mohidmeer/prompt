import { CldImage } from "next-cloudinary"
import Image from "next/image"
import Link from "next/link"

const Card = ({src,alt,label,model}) => {


  return (
    <Link href={`/prompt/${label}`}>
          <div className="pop-up  shadow-lg shadow-black/50
          relative 
          cursor-pointer
          ">
          <CldImage   
              src={src}
              alt={alt}
              width={500}
              height={250}
              draggable='false'
              unselectable='off' 
              />

          <p  className="
              bg-black/80 
              absolute top-2 left-2 
              text-xs 
              rounded p-1 
              
              text-white 
              inline">{model}</p>
              
          <p className="bg-black px-2 text-white font-bold line-clamp-1 ">{label}</p>
      </div>
    </Link>
  )
}

export default Card