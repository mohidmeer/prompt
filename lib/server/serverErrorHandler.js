import { toast } from 'react-toastify';
export default function serverErrorHandler(v,m='General Server Error'){

    switch(v){
        // case 409:
        //     toast.error(m)
        // break;
        // case 401:
        //     toast.error(m)
        // break;
        
        default:
            toast.error(v+' '+m)
    }

}