import Link from "next/link"
import { ArrowRight, CheckCircle, Heart, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Support Verified Sudanese Campaigns
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Connect with trusted fundraising campaigns helping families and communities affected by the crisis
                    in Sudan. Every donation is verified and goes directly to those in need.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/campaigns">
                    <Button className="bg-red-600 hover:bg-red-700" size="lg">
                      View Campaigns
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <img
                alt="Sudanese refugee camp showing displaced families in temporary shelters"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                height="550"
                src="/sudan-refugee-camp-1.jpg"
                width="550"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Campaigns</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Urgent campaigns that need your support right now
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-1 lg:gap-12">
              <div className="space-y-6">
                <div className="border rounded-lg p-6 bg-white dark:bg-gray-800">
                  <h3 className="text-xl font-bold mb-2">Help An Artist Stuck in Sudanese War zone</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Organized by Dominique Banks</p>
                  <p className="text-blue-600 hover:underline mb-3">
                    <a
                      href="https://www.gofundme.com/f/help-an-artist-stuck-in-sudanese-warzone?attribution_id=sl:d65e0fe8-0b0d-4846-b925-82953c4dd26b&lang=en_US&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=copy_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gofundme.com/f/help-an-artist-stuck-in-sudanese-warzone?attribution_id=sl:d65e0fe8-0b0d-4846-b925-82953c4dd26b&lang=en_US&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=copy_link
                    </a>
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700" size="sm">
                    <a
                      href="https://www.gofundme.com/f/help-an-artist-stuck-in-sudanese-warzone?attribution_id=sl:d65e0fe8-0b0d-4846-b925-82953c4dd26b&lang=en_US&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=copy_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Donate
                    </a>
                  </Button>
                </div>

                <div className="border rounded-lg p-6 bg-white dark:bg-gray-800">
                  <h3 className="text-xl font-bold mb-2">Help A Sudanese Family In Need!!!</h3>
                  <p className="text-blue-600 hover:underline mb-3">
                    <a href="https://gofund.me/ee296ec5" target="_blank" rel="noopener noreferrer">
                      https://gofund.me/ee296ec5
                    </a>
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700" size="sm">
                    <a href="https://gofund.me/ee296ec5" target="_blank" rel="noopener noreferrer">
                      Donate
                    </a>
                  </Button>
                </div>

                <div className="border rounded-lg p-6 bg-white dark:bg-gray-800">
                  <h3 className="text-xl font-bold mb-2">Uncle Hamdan Omdurman Community Kitchen</h3>
                  <p className="text-blue-600 hover:underline mb-3">
                    <a href="https://gogetfunding.com/commuinty-kitchen/" target="_blank" rel="noopener noreferrer">
                      https://gogetfunding.com/commuinty-kitchen/
                    </a>
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700" size="sm">
                    <a href="https://gogetfunding.com/commuinty-kitchen/" target="_blank" rel="noopener noreferrer">
                      Donate
                    </a>
                  </Button>
                </div>

                <div className="border rounded-lg p-6 bg-white dark:bg-gray-800">
                  <h3 className="text-xl font-bold mb-2">Fight Hunger in Sudan: The Khartoum Kitchen appeal</h3>
                  <p className="text-blue-600 hover:underline mb-3">
                    <a
                      href="https://www.gofundme.com/f/fight-hunger-in-sudan-the-khartoum-kitchen-appeal?lang=en_US&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=copy_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gofundme.com/f/fight-hunger-in-sudan-the-khartoum-kitchen-appeal?lang=en_US&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=copy_link
                    </a>
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700" size="sm">
                    <a
                      href="https://www.gofundme.com/f/fight-hunger-in-sudan-the-khartoum-kitchen-appeal?lang=en_US&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=copy_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Donate
                    </a>
                  </Button>
                </div>

                <div className="border rounded-lg p-6 bg-white dark:bg-gray-800">
                  <h3 className="text-xl font-bold mb-2">Help Medical Students in the Sudan war: Sanad Initiative</h3>
                  <p className="text-blue-600 hover:underline mb-3">
                    <a
                      href="https://gofundme.com/f/help-medical-students-in-the-sudan-war-sanad-initiative?utm_medium=customer&utm_source=copy_link&utm_campaign=fp_sharesheet&lang=en_GB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://gofundme.com/f/help-medical-students-in-the-sudan-war-sanad-initiative?utm_medium=customer&utm_source=copy_link&utm_campaign=fp_sharesheet&lang=en_GB
                    </a>
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700" size="sm">
                    <a
                      href="https://gofundme.com/f/help-medical-students-in-the-sudan-war-sanad-initiative?utm_medium=customer&utm_source=copy_link&utm_campaign=fp_sharesheet&lang=en_GB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Donate
                    </a>
                  </Button>
                </div>

                <div className="text-center pt-6">
                  <Link href="/campaigns">
                    <Button variant="outline" size="lg">
                      View All Campaigns
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="Sudanese refugee families with children in a displacement camp with UNHCR tents"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-first"
                height="550"
                src="/sudan-refugee-camp-2.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Making a Real Impact</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Every campaign on SudanFunds is carefully verified to ensure your donations reach families and
                    communities displaced by conflict. We work directly with trusted organizers to provide transparency
                    and accountability.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/about">
                    <Button variant="outline">Learn About Our Process</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose SudanFunds?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We ensure every donation makes a difference through our verification process
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader className="pb-2">
                  <Shield className="h-12 w-12 text-red-600 mb-2" />
                  <CardTitle>Verified Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Every campaign undergoes thorough verification to ensure legitimacy and direct impact for those in
                    need.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CheckCircle className="h-12 w-12 text-red-600 mb-2" />
                  <CardTitle>Transparent Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Track exactly where your donations go with full transparency and regular updates from campaign
                    organizers.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Heart className="h-12 w-12 text-red-600 mb-2" />
                  <CardTitle>Direct Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Your support goes directly to families, medical aid, food assistance, and emergency relief efforts.
                  </CardDescription>
                </CardContent>
              </Card>
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
