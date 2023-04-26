import SideBar from "@/components/Admin/sidebar";
import AdminLayout from "@/layout/AdminLayout";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { SlBag } from "react-icons/sl";
const dashboard = () => {
  return (
    <AdminLayout>
        <div className=" grid grid-cols-4 gap-4 ">

        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <SlBag className="w-10 h-10 mb-4"/>
            <div className="flex justify-between">
                <p class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Total Prompts</p>
                <p class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">320</p>
            </div>
        </div>
        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <AiOutlineShoppingCart className="w-10 h-10 mb-4"/>
            <div className="flex justify-between">
                <p class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Orders Received</p>
                <p class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">17</p>
            </div>
        </div>
        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <BiDollar  className="w-10 h-10 mb-4"/>
            <div className="flex justify-between">
                <p class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Overall Sales</p>
                <p class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 flex items-center">2000 <BiDollar/> </p>
            </div>
        </div>
        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <SlBag className="w-10 h-10 mb-4"/>
            <div className="flex justify-between">
                <p class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Personal Sales</p>
                <p class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 flex items-center">300 <BiDollar/></p>
            </div>
        </div>
        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <SlBag className="w-10 h-10 mb-4"/>
            <div className="flex justify-between">
                <p class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Vendors Sales</p>
                <p class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 flex items-center">1700 <BiDollar/> </p>
            </div>
        </div>





        </div>   
    </AdminLayout>
  )
}

export default dashboard