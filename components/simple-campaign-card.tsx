import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { Campaign } from "@/lib/campaigns"

interface SimpleCampaignCardProps extends Campaign {}

export function SimpleCampaignCard({
  title,
  description,
  category,
  platform,
  originalUrl,
  organizer,
}: SimpleCampaignCardProps) {
  // Determine platform badge color and label
  const getPlatformInfo = (platform: Campaign["platform"]) => {
    switch (platform) {
      case "gofundme":
        return { color: "bg-green-100 text-green-800", label: "GoFundMe" }
      case "chuffed":
        return { color: "bg-blue-100 text-blue-800", label: "Chuffed" }
      case "launchgood":
        return { color: "bg-purple-100 text-purple-800", label: "LaunchGood" }
      case "paypal":
        return { color: "bg-blue-100 text-blue-800", label: "PayPal" }
      case "gogetfunding":
        return { color: "bg-yellow-100 text-yellow-800", label: "GoGetFunding" }
      case "zeffy":
        return { color: "bg-indigo-100 text-indigo-800", label: "Zeffy" }
      case "sadagaat":
        return { color: "bg-orange-100 text-orange-800", label: "Sadagaat" }
      default:
        return { color: "bg-gray-100 text-gray-800", label: "Other" }
    }
  }

  const platformInfo = getPlatformInfo(platform)

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex gap-2 flex-wrap mb-2">
          <Badge variant="outline" className="bg-gray-100 text-gray-800">
            {category}
          </Badge>
          <Badge variant="outline" className={platformInfo.color}>
            {platformInfo.label}
          </Badge>
        </div>
        <h3 className="font-bold text-lg leading-tight">{title}</h3>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        {organizer && <p className="text-xs text-gray-500 mb-4">Organized by {organizer}</p>}

        <a href={originalUrl} target="_blank" rel="noopener noreferrer" className="block">
          <Button className="w-full bg-red-600 hover:bg-red-700">
            Donate Now <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
        </a>
      </CardContent>
    </Card>
  )
}
