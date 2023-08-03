import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tippy.js/dist/tippy.css'
import useScrollRestoration from '@/utils/useScrollRestoration';

export default function App({ Component, pageProps ,router}) {

  useScrollRestoration(router)
  return (
    
   <SessionProvider session={pageProps.session}>
    
    <ToastContainer
      position="bottom-left"
      theme='dark'
      autoClose={1000}
      limit={5}
    />
    <NextNProgress />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
