import SideBar from "@/components/Admin/sidebar";
import AdminLayout from "@/layout/AdminLayout";
import { getServerAuthSession } from "../api/auth/[...nextauth]";
const dashboard = () => {
  return (
    <AdminLayout>
    
    </AdminLayout>
  )
}

export default dashboard


export async function getServerSideProps(context) {
  let session = await getServerAuthSession(context.req, context.res)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  if (session.user.role==='ADMIN'){
      session =JSON.stringify(session)

      return {
          props: {
            
          },
        }
  }

  return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }

 
}