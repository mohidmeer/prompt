import { NextResponse } from 'next/server'
import { isAdmin } from './middlewares/isAdmin';
import { isApi } from './middlewares/isApi';
import { getSession } from 'next-auth/react';
// import { getServerAuthSession } from './pages/api/auth/[...nextauth]';



export default function middleware(req) {

  if (req.url.includes('/api/admin')){



  //  getServerAuthSession(req,res)
   return isAdmin(req)
  }




    
  return NextResponse.next();   
}

