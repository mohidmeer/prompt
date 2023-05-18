import Link from "next/link";
import { MdCancel } from "react-icons/md";

export default function cancel() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <MdCancel className="h-24 w-24 text-red-500" />
        <h1 className="mt-4 text-3xl font-bold text-gray-800">Payment Cancelled</h1>
        <p className="mt-2 text-lg text-gray-600">Your payment has been cancelled.</p>
        <Link href="/" className="mt-4 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">Go
            back to the website</Link>
    </div>
  )
}
