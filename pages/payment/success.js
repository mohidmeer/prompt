import Link from "next/link";
import { MdCheck } from "react-icons/md";

export default function success() {
  return (
    <div class="flex flex-col items-center justify-center h-screen">
        <MdCheck className="h-24 w-24 text-green-500" />
        <h1 class="mt-4 text-3xl font-bold text-gray-800">Payment Successful</h1>
        <p class="mt-2 text-lg text-gray-600">Thank you for your purchase!</p>
        <Link href={'/'} class="mt-4 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">Continue
            Shopping</Link>
    </div>
  )
}
