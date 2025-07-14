"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CampaignsPage() {
  const [showAll, setShowAll] = useState(false)

  const campaignSections = [
    {
      title: "Newest Verified Campaigns",
      campaigns: [
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
          title: "Sadagaat USA Emergency Relief",
          url: "https://sadagaat-usa.org/?form=FUNECCSESWQ&fundraiser=NHAQASCT&member=SFUYEJDJ&utm_source=qr",
        },
        {
          title: "Sudan Emergency Support",
          url: "https://gofund.me/411bd1f6",
        },
      ],
    },
    {
      title: "Support for Hunger and Basic Needs",
      campaigns: [
        {
          title: "Uncle Hamdan Omdurman Community Kitchen",
          url: "https://gogetfunding.com/commuinty-kitchen/",
        },
        {
          title: "Support Our Community Kitchen",
          url: "https://chuffed.org/project/118514-support-our-community-kitchen",
        },
        {
          title: "Saving AlGeneina (helps so many people)",
          url: "https://t.co/toeyVIDoUF",
        },
        {
          title: "Khartoum Aid Kitchen",
          url: "https://www.gofundme.com/f/fight-hunger-in-sudan-the-khartoum-kitchen-appeal?lang=en_US&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=copy_link",
        },
        {
          title: "Support Omdurman Network's Fight Against Hunger",
          url: "https://gofund.me/4a1b0159",
        },
        {
          title: "Urgent Help Needed to Support Families in Sennar, Sudan (Myadah)",
          url: "https://gofundme.com/f/urgent-help-needed-to-support-families-in-sennar-sudan",
        },
        {
          title: "Help Displaced Sudanese Families Pay for Food and Medicine (Somia Ali)",
          url: "https://gofund.me/6840d58f",
        },
        {
          title: "For Sudan: Help us support families impacted by war",
          url: "https://gofundme.com/f/for-sudan-help-us-feed-families-in-omdurman?utm_medium=copy_link_all&utm_source=customer&utm_campaign=p_cp%2Bshare-sheet",
        },
        {
          title: "Fight Hunger in Sudan: The Khartoum Kitchen appeal",
          url: "https://gofund.me/52bf2ca3",
        },
      ],
    },
    {
      title: "Medical and Health Support",
      campaigns: [
        {
          title: "Help Medical Students in the Sudan war: Sanad Initiative",
          url: "https://gofundme.com/f/help-medical-students-in-the-sudan-war-sanad-initiative?utm_medium=customer&utm_source=copy_link&utm_campaign=fp_sharesheet&lang=en_GB",
        },
        {
          title: "Help Save Lives in Sudan (Sudan Children's Cancer Organization)",
          url: "https://gofund.me/cd73380c",
        },
        {
          title: "Supporting Sukina's Father's Fight Against Cancer",
          url: "https://gofundme.com/f/supporting-sukinas-fathers-fight-against-cancer?utm_medium=customer&utm_source=copy_link&utm_campaign=fp_sharesheet&lang=en_US",
        },
        {
          title: "Emergency Fund: Medical, Shelter, & Edu (Sudanese Refugees)",
          url: "https://gofund.me/0c674d5d",
        },
        {
          title: "Sudan Emergency Medical Appeal- Help Children & War Victims",
          url: "https://launchgood.com/v4/campaign/war_in_sudan_crisis_appeal",
        },
        {
          title: "FAH Supporting Sudan: A Lifeline in Crisis (Sudanese Hospitals)",
          url: "https://gofund.me/b2aebfab",
        },
        {
          title: "Family relocate and medical funds (organized by Modasir)",
          url: "https://gofund.me/d61a7f1c",
        },
        {
          title: "Emergency aid for Ahmed's family to escape warzone in Sudan",
          url: "https://gofund.me/7f76a31e",
        },
        {
          title: "Help ThomaSerena recover from war",
          url: "https://gofund.me/4c1d7282",
        },
        {
          title: "Khartoum aid collective-emergency response rooms",
          url: "https://www.paypal.com/donate/?hosted_button_id=C9GCHUJN37MCG",
        },
      ],
    },
    {
      title: "Education Support",
      campaigns: [
        {
          title: "Help a girl affected by the war finish her university degree (organized by Rawiaa Ahmed)",
          url: "https://gofund.me/13d36750",
        },
        {
          title: "Finish Med school (organized by Sara Ibrahim)",
          url: "https://gofund.me/7395ae1c",
        },
        {
          title: "Help two medical students evacuate Sudan with their family",
          url: "https://gofund.me/7894cc51",
        },
      ],
    },
    {
      title: "Support for Families Escaping the War",
      campaigns: [
        {
          title: "Help Ahmed and his family in Sudan",
          url: "https://gofund.me/85f07ff8",
        },
        {
          title: "Help four Sudanese families escape the horrors",
          url: "https://www.gofundme.com/f/help-four-sudanese-families-escape-the-horrors-of",
        },
        {
          title: "Help My Family Escape War-Torn Khartoum (Razan)",
          url: "https://gofund.me/581185fd",
        },
        {
          title: "Sudan War, Help Asmaa's Family",
          url: "https://gofund.me/71c0ba04",
        },
        {
          title: "Evacuate a family from the war (Samira Omer)",
          url: "https://gofund.me/3c4a27d2",
        },
        {
          title: "The Conflict Is Still Ongoing, Save My Family From The War (family of 6)",
          url: "https://gofundme.com/f/the-conflict-is-still-ongoing-save-my-family-from-the-war?utm_medium=customer&utm_source=copy_link&utm_campaign=fp_sharesheet&lang=en_US",
        },
        {
          title: "Help My Family Flee Sudan's War (Rama Haran)",
          url: "https://gofund.me/2819c4fb",
        },
        {
          title: "Help Sudanese Families escape from war (4 families)",
          url: "https://gofundme.com/f/vwb99n-help-sudanese-families?utm_medium=customer&utm_source=copy_link&utm_campaign=fp_sharesheet&lang=en_US",
        },
        {
          title: "Save my family from Bombardment (Asala)",
          url: "https://gofund.me/64215db0",
        },
        {
          title: "Support for Sudanese Refugees in Cairo",
          url: "https://gofund.me/8e7954e9",
        },
        {
          title: "Help Shahd escape war in Sudan",
          url: "https://gofundme.com/f/help-shahd-escape-war-in-sudan?utm_medium=copy_link_all&utm_source=customer&utm_campaign=p_cp%2Bshare-sheet",
        },
        {
          title: "Help Mujtaba's Family Escape the war in Sudan",
          url: "https://gofundme.com/f/help-mujtabas-family-escape-sudans-war?utm_medium=customer&utm_source=copy_link&utm_campaign=fp_sharesheet&lang=en_US",
        },
        {
          title: "Help Refugee's escape Sudan Conflict (Sai)",
          url: "https://gofund.me/04ab680e",
        },
        {
          title: "Help evacuate a family from War Torn Sudan (Khidir Mahmoud)",
          url: "https://gofundme.com/f/help-evacuate-a-family-from-war-torn-sudan?utm_medium=customer&utm_source=copy_link&utm_campaign=fp_sharesheet",
        },
        {
          title: "Help Family in Sudan Find Urgent Safety (family of 7)",
          url: "https://gofund.me/89cb364d",
        },
        {
          title: "Support the Journey to Safety for a Sudanese Family (Rasheed)",
          url: "https://gofund.me/4fb56d6d",
        },
        {
          title: "Donate to help Lillian's family out",
          url: "https://gofund.me/a776073a",
        },
        {
          title: "Passports to escape Sudan's war",
          url: "https://gofundme.com/f/rbcy43-passports?utm_medium=customer&utm_source=copy_link&utm_campaign=fp_sharesheet",
        },
        {
          title: "Help Aalaa's Family Escape to Safety",
          url: "https://gofund.me/928db7db",
        },
        {
          title: "Help 15 families evacuate El Fashir, Darfur (Sai)",
          url: "https://gofund.me/2ab03f4a",
        },
        {
          title: "Support the Displaced Families of Sudan (Umbada Community)",
          url: "https://gofund.me/227be9e9",
        },
        {
          title: "Urgent Support for Our Family in Sudan (Raouf)",
          url: "https://gofund.me/78189356",
        },
        {
          title: "Join the effort to save Jameela and her family!",
          url: "https://gofundme.com/f/join-the-effort-to-save-jameela-and-her-family?utm_medium=copy_link_all&utm_source=customer&utm_campaign=p_cp%2Bshare-sheet",
        },
        {
          title: "Escaping Hell: A Family's Fight For Survival (Elaf)",
          url: "https://gofund.me/823c1d50",
        },
        {
          title: "Help Abudjana rebuild after war",
          url: "https://gofund.me/8b31c7c0",
        },
        {
          title: "Help Asjad and her Family Escape War in Sudan",
          url: "https://gofund.me/515efb98",
        },
        {
          title: "Help my family escape Sudan's war (Sajida)",
          url: "https://gofundme.com/f/help-my-friend-and-hwr-family-scape-the-war-in-sud?utm_medium=copy_link_all&utm_source=customer&utm_campaign=p_cp%2Bshare-sheet",
        },
        {
          title: "Help a Sudanese family escape the war in Sudan (Dystonia)",
          url: "https://gofund.me/716f3464",
        },
        {
          title: "Our home bombarded and destroyed (Eman Abdel Rahman)",
          url: "https://gofund.me/23057d11",
        },
      ],
    },
    {
      title: "Support for Refugees",
      campaigns: [
        {
          title: "Support for Sudanese Refugees in Cairo",
          url: "https://gofund.me/8e7954e9",
        },
        {
          title: "Sudanese refugees in Cairo",
          url: "https://gofund.me/5cf5e235",
        },
        {
          title: "Support a Community Stuck In Sudan (Abeer)",
          url: "https://gofund.me/621aa61d",
        },
        {
          title: "Sudanese refugees stranded in Olala forests, Ethiopia",
          organizer: "Fundraiser by Bothaina Mustafa Basheer Eltigani",
          url: "https://gofundme.com/f/sudanese-refugees-stranded-in-olala-forests-ethiopia",
        },
      ],
    },
    {
      title: "General and Other Support",
      campaigns: [
        {
          title: "Help the People of Sudan (Amal for Women)",
          url: "https://paypal.com/pools/c/95K1GpgLLI",
        },
        {
          title: "One Million Sustainable Pads Campaign",
          url: "https://gofundme.com/f/37bp8k7p0o?utm_medium=copy_link_all&utm_source=customer&utm_campaign=p_cp%2Bshare-sheet",
        },
        {
          title: "Help Sudan - Sudan Relief",
          url: "https://gofund.me/c00db836",
        },
        {
          title: "The Save El Geneina Initiative",
          url: "https://gofund.me/7ae3d122",
        },
        {
          title: "Safe Passage ممر آمن - Help a mom and her kids escape war!",
          url: "https://gofundme.com/f/safe-passage-mmr-amn?utm_medium=customer&utm_source=copy_link&utm_campaign=fp_sharesheet",
        },
        {
          title: "For Sudan: Help support families in Kassab IDP camp",
          url: "https://gofund.me/48732cef",
        },
        {
          title: "Support Sakina's Family's Journey to Safety",
          url: "https://gofund.me/bdc10e02",
        },
        {
          title: "Assist Firdous's Family Evacuate from Sudan",
          url: "https://gofund.me/c4a259d9",
        },
        {
          title: "Additional Support Initiative",
          url: "https://t.co/Rtrxco7Cao",
        },
        {
          title: "Help a family flee War in Sudan (Musa)",
          url: "https://gofundme.com/f/help-a-family-flee-war?utm_medium=copy_link_all&utm_source=customer&utm_campaign=p_cp%2Bshare-sheet",
        },
        {
          title: "Sudan Solidarity Collective",
          url: "https://www.paypal.com/donate/?hosted_button_id=8PPJTAX5Z5CMY",
        },
        {
          title: "Sudan Crisis Relief Fundraising",
          url: "https://www.zeffy.com/en-CA/fundraising/a14ea68c-6fcd-4136-b320-9cbf826d439d",
        },
      ],
    },
  ]

  const displayedSections = showAll ? campaignSections : campaignSections.slice(0, 2)

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
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Verified Sudan Campaigns</h1>
            <p className="text-gray-600">
              Direct links to verified fundraising campaigns supporting Sudan. Click any link to donate directly.
            </p>
          </div>

          <div className="space-y-8">
            {displayedSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-bold mb-4 text-red-600">{section.title}</h2>
                <div className="space-y-3">
                  {section.campaigns.map((campaign, campaignIndex) => (
                    <div key={campaignIndex} className="border-l-2 border-gray-200 pl-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-1">{campaign.title}</h3>
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
                          className="flex-shrink-0 inline-flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
                        >
                          Donate <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button onClick={() => setShowAll(!showAll)} variant="outline" className="inline-flex items-center gap-2">
              {showAll ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  View All Campaigns <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              All campaigns have been verified by SudanFunds. 100% of donations go directly to the campaign organizers.
              <br />
              Total campaigns listed: {campaignSections.reduce((total, section) => total + section.campaigns.length, 0)}
            </p>
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
