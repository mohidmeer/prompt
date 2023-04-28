import { NextResponse } from 'next/server'
import { isAdmin } from './middlewares/isAdmin';
import { isApi } from './middlewares/isApi';

export function middleware(req) {

  // if (req.url.includes('/api')){
  //  return isApi(req)
  // }
  if (req.url.includes('/api/admin')){
   return isAdmin(req)
  }




    
  return NextResponse.next();   
}

