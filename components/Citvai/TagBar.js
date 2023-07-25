import Link from "next/link"
import { useRouter } from "next/router"

const TagBar = () => {

    const router =useRouter();
  return (
    <div className="p-2 border-dark-border text-sm">

      <div className="flex gap-2 overflow-x-auto ">
        <Link href={'/'} className={`font-bold px-3 py-1 rounded bg-dark-button  ${!(router.query.tag) ?'!bg-dark-info':'' }`} >All</Link>
        <Link href={'/?tag=characters'}  className={`font-bold px-3 py-1 rounded bg-dark-button ${router.query.tag==='characters'&& '!bg-dark-info'}`}>Characters</Link>
        <Link href={'/?tag=styles'}      className={`font-bold px-3 py-1 rounded bg-dark-button ${router.query.tag==='styles'&& '!bg-dark-info'}`}>Styles</Link>
        <Link href={'/?tag=celebrity'}   className={`font-bold px-3 py-1 rounded bg-dark-button ${router.query.tag==='celebrity'&& '!bg-dark-info'}`}>Celebrity</Link>
        <Link href={'/?tag=clothings'}   className={`font-bold px-3 py-1 rounded bg-dark-button ${router.query.tag==='clothings'&& '!bg-dark-info'}`}>Clothing</Link>
       
      </div>
    </div>
  )
}

export default TagBar