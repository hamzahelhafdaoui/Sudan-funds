import Link from "next/link"
import { ArrowRight, CheckCircle, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  const featuredCampaigns = [
    {
      title: "Help An Artist Stuck in Sudanese War zone",
      organizer: "Fundraiser by Dominique Banks",
      url: "https://www.gofundme.com/f/help-an-artist-stuck-in-sudanese-warzone?attribution_id=sl:d65e0fe8-0b0d-4846-b925-82953c4dd26b&lang=en_US&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=copy_link",
    },
    {
      title: "Help A Sudanese Family In Need!!!",
      url: "https://gofund.me/ee296ec5",
    },
    {
      title: "Uncle Hamdan Omdurman Community Kitchen",
      url: "https://gogetfunding.com/commuinty-kitchen/",
    },
    {
      title: "Help Medical Students in the Sudan war: Sanad Initiative",
      url: "https://gofundme.com/f/help-medical-students-in-the-sudan-war-sanad-initiative?utm_medium=customer&utm_source=copy_link&utm_campaign=fp_sharesheet&lang=en_GB",
    },
    {
      title: "Help Ahmed and his family in Sudan",
      url: "https://gofund.me/85f07ff8",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Shield className="h-6 w-6 text-red-600" />
          <span className="ml-2 text-xl font-bold">SudanFunds</span>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Support Verified Sudanese Campaigns
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    SudanFunds connects you with verified campaigns that directly help Sudanese communities in need.
                    Every campaign is thoroughly vetted to ensure your donation makes a real impact.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/campaigns">
                    <Button className="bg-red-600 hover:bg-red-700">
                      Browse Campaigns <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </div>
              <img
                alt="Sudan Funds"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg?height=550&width=800"
                width="800"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Featured Campaigns
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Make an Impact Today</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  These campaigns have been thoroughly verified and are in urgent need of support.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl mt-8">
              <div className="space-y-4">
                {featuredCampaigns.map((campaign, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-white">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{campaign.title}</h3>
                        {campaign.organizer && <p className="text-sm text-gray-500 mb-2">{campaign.organizer}</p>}
                        <a
                          href={campaign.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 break-all"
                        >
                          {campaign.url}
                        </a>
                      </div>
                      <a
                        href={campaign.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition-colors"
                      >
                        Donate Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/campaigns">
                <Button variant="outline">View All Campaigns</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <img
                alt="Impact Stories"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg?height=310&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Real Impact, Real Stories</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Through the generosity of donors like you, we've been able to make a significant difference in the
                    lives of thousands of Sudanese people.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Over 80 verified campaigns listed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Multiple platforms supported including GoFundMe, Chuffed, and more</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>100% of funds go directly to campaign organizers</span>
                  </li>
                </ul>
                <div>
                  <Link href="/about">
                    <Button variant="outline">Learn About Our Impact</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
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
