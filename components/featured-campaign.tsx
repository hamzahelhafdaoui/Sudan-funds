import { Calendar, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import type { Campaign } from "@/lib/campaigns"

interface FeaturedCampaignProps {
  title: string
  description: string
  image: string
  raised: number
  goal: number
  daysLeft: number
  originalUrl: string
  platform: Campaign["platform"]
}

export function FeaturedCampaign({
  title,
  description,
  image,
  raised,
  goal,
  daysLeft,
  originalUrl,
  platform,
}: FeaturedCampaignProps) {
  const percentRaised = (raised / goal) * 100

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

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <img
          alt={title}
          className="h-48 w-full object-cover"
          height="200"
          src={image || "/placeholder.svg"}
          width="300"
        />
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-2">
          <Badge variant="outline" className={platformInfo.color}>
            {platformInfo.label}
          </Badge>
        </div>
        <CardTitle className="line-clamp-1 mb-2">{title}</CardTitle>
        <p className="line-clamp-2 text-sm text-gray-500 mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">${raised.toLocaleString()}</span>
            <span className="text-gray-500">raised of ${goal.toLocaleString()}</span>
          </div>
          <Progress value={percentRaised} className="h-2" />
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="mr-1 h-3 w-3" />
            <span>{daysLeft} days left</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <a href={originalUrl} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full bg-red-600 hover:bg-red-700">
            Donate Now <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
