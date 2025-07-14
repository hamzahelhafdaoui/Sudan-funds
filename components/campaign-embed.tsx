"use client"

import { useEffect, useRef } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Campaign } from "@/lib/campaigns"

interface CampaignEmbedProps extends Campaign {}

export function CampaignEmbed({
  id,
  title,
  description,
  category,
  platform,
  originalUrl,
  embedCode,
  organizer,
  isEmbeddable,
}: CampaignEmbedProps) {
  const embedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isEmbeddable && platform === "gofundme" && embedRef.current) {
      // Load GoFundMe widget script
      const script = document.createElement("script")
      script.src = "https://www.gofundme.com/static/js/embed.js"
      script.async = true
      document.head.appendChild(script)

      // Extract campaign ID from URL for GoFundMe embed
      const campaignId = extractCampaignId(originalUrl)
      if (campaignId) {
        // Create GoFundMe embed
        embedRef.current.innerHTML = `
          <div class="gfm-embed" data-url="https://www.gofundme.com/f/${campaignId}/widget/large"></div>
        `

        // Trigger GoFundMe embed initialization
        if ((window as any).gfmEmbed) {
          ;(window as any).gfmEmbed.init()
        }
      }

      return () => {
        // Cleanup
        const existingScript = document.querySelector('script[src="https://www.gofundme.com/static/js/embed.js"]')
        if (existingScript) {
          document.head.removeChild(existingScript)
        }
      }
    }
  }, [isEmbeddable, platform, originalUrl])

  // Extract campaign ID from GoFundMe URL
  function extractCampaignId(url: string): string | null {
    const patterns = [/gofundme\.com\/f\/([^/?]+)/, /gofund\.me\/([^/?]+)/]

    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match) return match[1]
    }
    return null
  }

  // Determine platform badge color and label
  const getPlatformInfo = (platform: Campaign["platform"]) => {
    switch (platform) {
      case "gofundme":
        return { color: "bg-green-100 text-green-800 hover:bg-green-200", label: "GoFundMe" }
      case "chuffed":
        return { color: "bg-blue-100 text-blue-800 hover:bg-blue-200", label: "Chuffed" }
      case "launchgood":
        return { color: "bg-purple-100 text-purple-800 hover:bg-purple-200", label: "LaunchGood" }
      case "paypal":
        return { color: "bg-blue-100 text-blue-800 hover:bg-blue-200", label: "PayPal" }
      case "gogetfunding":
        return { color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200", label: "GoGetFunding" }
      case "zeffy":
        return { color: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200", label: "Zeffy" }
      case "sadagaat":
        return { color: "bg-orange-100 text-orange-800 hover:bg-orange-200", label: "Sadagaat" }
      default:
        return { color: "bg-gray-100 text-gray-800 hover:bg-gray-200", label: "Other" }
    }
  }

  const platformInfo = getPlatformInfo(platform)

  if (isEmbeddable && platform === "gofundme") {
    return (
      <div className="border rounded-lg overflow-hidden bg-white">
        <div className="p-4 border-b">
          <div className="flex gap-2 flex-wrap mb-2">
            <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
              {category}
            </Badge>
            <Badge variant="outline" className={platformInfo.color}>
              {platformInfo.label}
            </Badge>
          </div>
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          {organizer && <p className="text-xs text-gray-500">Organized by {organizer}</p>}
        </div>

        {/* GoFundMe Embed */}
        <div ref={embedRef} className="gofundme-embed-container">
          {/* GoFundMe widget will be inserted here */}
        </div>

        <div className="p-4 border-t bg-gray-50">
          <a href={originalUrl} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full bg-red-600 hover:bg-red-700">
              View Full Campaign <ExternalLink className="ml-2 h-3 w-3" />
            </Button>
          </a>
        </div>
      </div>
    )
  }

  // Fallback for non-embeddable campaigns
  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <div className="p-6">
        <div className="flex gap-2 flex-wrap mb-2">
          <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
            {category}
          </Badge>
          <Badge variant="outline" className={platformInfo.color}>
            {platformInfo.label}
          </Badge>
        </div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        {organizer && <p className="text-xs text-gray-500 mb-4">Organized by {organizer}</p>}

        <a href={originalUrl} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full bg-red-600 hover:bg-red-700">
            Donate Now <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
        </a>
      </div>
    </div>
  )
}
