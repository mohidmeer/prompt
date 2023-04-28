import { NextResponse } from 'next/server'

export function isAdmin(req){
     console.log('ADMIN MIDDLEWARE ')
     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);






     
    return  NextResponse.next();
}


