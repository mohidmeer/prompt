import { toast } from 'react-toastify';
export default function serverErrorHandler(v){

    switch(v){
        case 422:
            toast.error('Already Exists')
    }

}