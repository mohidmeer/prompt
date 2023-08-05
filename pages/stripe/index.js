import { BsStripe} from "react-icons/bs"
import { getServerAuthSession } from "../api/auth/[...nextauth]"
import { useEffect, useState } from "react"
import { getOnboardingUrl } from "@/ApiRequests/user";


const Index = ({session}) => {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    
    const redirectToStripe = async ()=>{
        const url=  await getOnboardingUrl() 
        window.location.href=url
    }

    useEffect(() => {
        
        if (countdown === 3) {
        if (session.user.payment==true){
          redirectToStripe();
        }
        }
      }, [countdown]);
  return (
    <div className="flex items-center justify-center h-screen">
       <div className="max-w-2xl flex justify-center shadow-2xl text-white p-4 rounded">
        <div className="flex flex-col justify-center items-center">
            <BsStripe className="w-12 h-12 text-indigo-500" />
            <h2 className="text-xl font-bold">Stripe</h2>
            {session.user.payment ? 
                <p className="font-semibold mt-4">Redirecting to Stripe dashboard</p> : 
                <p className="font-semibold mt-4">You must complete Stripe onbaording to sell your products</p>}

            <div className="flex justify-end w-full">
                {session.user.payment ? <p className="mt-2 text-gray-400 text-sm font-semibold">{`Redirecting In ${countdown}` }</p> : 
                <button className="btn mt-4" onClick={()=>{redirectToStripe()}}>Complete Stripe Onboarding</button>
                }
            </div>
        </div>
       </div>
    </div>
  )
}

export default Index


export async function getServerSideProps(context) {
    let session = await getServerAuthSession(context.req, context.res)
  
    if (!session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    session=JSON.parse(JSON.stringify(session))
  
    return {
      props: {
         session
      },
    };
  }
