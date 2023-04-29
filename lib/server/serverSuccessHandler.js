import { toast } from 'react-toastify';
export default function serverSuccessHandler(v,message){

    switch(v){
        case 201:
            toast.success(message)
        break;
        
        default:
            toast.success(v+' '+message)
    }

}