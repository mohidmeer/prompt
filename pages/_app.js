import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tippy.js/dist/tippy.css'

export default function App({ Component, pageProps }) {
  return (
   <SessionProvider session={pageProps.session}>
    <ToastContainer/>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
