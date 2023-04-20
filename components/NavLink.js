import Link from 'next/link'
import { useRouter } from 'next/router';


const NavLink = ({href ,label,active=false}) => {
    const router = useRouter();
  return (
        <li>
          <Link href={href}
          className={`
          block 
          py-2 pl-3 pr-4 
          text-gray-600 rounded 
          font-bold
          hover:bg-gray-100 
          md:hover:bg-transparent md:border-0 
          md:hover:text-black 
          md:p-0
          ${router.pathname==href ? 'link-active':''} 
          `}>{label}</Link>
        </li>
  )
}


export default NavLink