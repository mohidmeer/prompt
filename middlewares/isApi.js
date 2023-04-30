import { NextResponse } from 'next/server'

export function isApi(req){
     console.log('API MIDDLEWARE WORKING')
     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
     
     return  NextResponse.next()
}


 // JSON.stringify({ success: false, message: 'authentication failed' }),
// { status: 401, headers: { 'content-type': 'application/json' } }