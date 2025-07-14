import Link from "next/link"
import { ArrowLeft, Calendar, CheckCircle, Heart, Share2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DonationForm } from "@/components/donation-form"

export default function CampaignDetailPage({ params }: { params: { id: string } }) {
  // This would normally fetch campaign data based on the ID
  const campaign = {
    id: params.id,
    title: "Emergency Medical Supplies",
    description: "Providing essential medical supplies to hospitals in Khartoum",
    longDescription: `
      The ongoing crisis in Sudan has severely impacted the healthcare system, with many hospitals in Khartoum facing critical shortages of essential medical supplies. This campaign aims to provide urgently needed medical supplies to these hospitals, including:
      
      - Surgical equipment and supplies
      - Medications for treating common illnesses and injuries
      - First aid kits
      - Personal protective equipment for healthcare workers
      - Basic diagnostic equipment
      
      Your donation will help ensure that doctors and nurses have the tools they need to save lives during this critical time. All supplies will be purchased locally when possible to support the local economy, and distributed directly to verified hospitals in need.
      
      We work with a network of trusted healthcare professionals on the ground who identify the most urgent needs and ensure supplies reach their intended destinations.
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Healthcare",
    raised: 15000,
    goal: 25000,
    daysLeft: 12,
    donors: 128,
    updates: [
      {
        date: "July 10, 2024",
        title: "First shipment delivered",
        content:
          "We're happy to announce that the first shipment of medical supplies has been delivered to Al-Moalem Hospital in Khartoum. Thank you to all our donors for making this possible!",
      },
      {
        date: "July 5, 2024",
        title: "Campaign launched",
        content:
          "We've officially launched our campaign to provide emergency medical supplies to hospitals in Khartoum. The situation is critical, and we appreciate your support.",
      },
    ],
    organizer: {
      name: "Sudan Medical Relief",
      verified: true,
      image: "/placeholder.svg?height=50&width=50",
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="text-xl font-bold">SudanFunds</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/campaigns">
            Campaigns
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Link href="/campaigns" className="flex items-center text-sm text-gray-500 hover:text-gray-900 mb-4">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to campaigns
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <img
                src={campaign.image || "/placeholder.svg"}
                alt={campaign.title}
                className="w-full h-auto rounded-lg mb-6"
              />

              <Tabs defaultValue="about">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="updates">Updates</TabsTrigger>
                  <TabsTrigger value="donors">Donors</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">About this campaign</h2>
                  <div className="prose max-w-none">
                    <p className="whitespace-pre-line">{campaign.longDescription}</p>
                  </div>
                </TabsContent>
                <TabsContent value="updates" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">Campaign Updates</h2>
                  <div className="space-y-6">
                    {campaign.updates.map((update, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4" />
                          {update.date}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{update.title}</h3>
                        <p>{update.content}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="donors" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">Recent Donors</h2>
                  <div className="flex items-center gap-2 mb-6">
                    <Users className="h-5 w-5 text-gray-500" />
                    <span className="font-medium">{campaign.donors} people have donated</span>
                  </div>
                  <div className="space-y-4">
                    {/* This would normally be populated with actual donor data */}
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                        <div>
                          <p className="font-medium">Ahmed M.</p>
                          <p className="text-sm text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <p className="font-semibold">$100</p>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                        <div>
                          <p className="font-medium">Sarah K.</p>
                          <p className="text-sm text-gray-500">5 hours ago</p>
                        </div>
                      </div>
                      <p className="font-semibold">$50</p>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                        <div>
                          <p className="font-medium">Mohammed A.</p>
                          <p className="text-sm text-gray-500">1 day ago</p>
                        </div>
                      </div>
                      <p className="font-semibold">$200</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <div className="border rounded-lg p-6 sticky top-6">
                <h1 className="text-2xl font-bold mb-2">{campaign.title}</h1>
                <p className="text-gray-600 mb-6">{campaign.description}</p>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-lg">${campaign.raised.toLocaleString()}</span>
                    <span className="text-gray-500">raised of ${campaign.goal.toLocaleString()}</span>
                  </div>
                  <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2 mb-2" />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{campaign.donors} donors</span>
                    <span>{campaign.daysLeft} days left</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={campaign.organizer.image || "/placeholder.svg"}
                    alt={campaign.organizer.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{campaign.organizer.name}</p>
                    <div className="flex items-center text-sm text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Verified Organizer
                    </div>
                  </div>
                </div>

                <DonationForm campaignId={campaign.id} />

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 SudanFunds. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
