import Image from "next/image"

const Card = ({src,alt,label,model}) => {


  return (
    <div className="  shadow-lg shadow-black/50
    relative 
    cursor-pointer
    pop-up">
    <Image   
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
        text-sm 
        rounded p-1 
        font-bold 
        text-white 
        inline">{model}</p>
        
    <p className="bg-black px-2 text-white font-bold text-xl">{label}</p>
</div>
  )
}

export default Card