// import { authOptions } from '@/pages/api/auth/[...nextauth]';
// import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function isAdmin  (req,res){


//    const session = getServerSession(req,res,authOptions);



     console.log('ADMIN MIDDLEWARE')
     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
     return  NextResponse.next();
}


