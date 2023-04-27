import { toast } from 'react-toastify';
export default function serverSuccessHandler(v){

    switch(v){
        case 200:
            toast.success('Successfull')

        default:
            toast.success('Successfull')
    }

}