import { toast } from 'react-toastify';
export default function serverErrorHandler(v){

    switch(v){
        case 409:
            toast.error('Name Already Esists ')
        break;
        default:
            toast.error('Serer Error')
    }

}