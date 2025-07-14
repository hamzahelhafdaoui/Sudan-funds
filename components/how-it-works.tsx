import { CheckCircle, ClipboardCheck, FileSearch, UserCheck } from "lucide-react"

export function HowItWorks() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-8">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-4">
          <FileSearch className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">1. Application Review</h3>
        <p className="text-gray-500">Campaign organizers submit detailed applications with supporting documentation.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-4">
          <UserCheck className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">2. Identity Verification</h3>
        <p className="text-gray-500">We verify the identity of campaign organizers through multiple channels.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-4">
          <ClipboardCheck className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">3. Local Confirmation</h3>
        <p className="text-gray-500">Our team in Sudan confirms the legitimacy of the campaign and its needs.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-4">
          <CheckCircle className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">4. Ongoing Monitoring</h3>
        <p className="text-gray-500">We require regular updates and documentation on how funds are being used.</p>
      </div>
    </div>
  )
}
