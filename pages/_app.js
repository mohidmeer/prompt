import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tippy.js/dist/tippy.css'

export default function App({ Component, pageProps }) {
  return (
   <SessionProvider session={pageProps.session}>
    <ToastContainer/>
    <NextNProgress />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
