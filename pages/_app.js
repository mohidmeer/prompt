import AppContext from '@/context/context';
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tippy.js/dist/tippy.css'

export default function App({ Component, pageProps }) {

  const [sidebarstate, setSideBarState] = useState(1);

  const userSettings = {
    sidebarstate: sidebarstate,
    setSideBarState,
  };
  return (





   <AppContext.Provider value={userSettings}>
  <SessionProvider session={pageProps.session}>
        <ToastContainer/>
      <Component {...pageProps} />
    </SessionProvider>

   </AppContext.Provider>
  );
}
