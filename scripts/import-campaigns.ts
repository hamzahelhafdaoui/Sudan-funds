/**
 * This script can be used to import campaigns from a CSV file
 *
 * Format of the CSV file should be:
 * title,description,category,platform,originalUrl,organizer
 *
 * Example usage:
 * 1. Create a CSV file with campaign data
 * 2. Run this script with: node scripts/import-campaigns.js path/to/campaigns.csv
 */

import fs from "fs"
import path from "path"
import { parse } from "csv-parse/sync"

// Function to generate a unique ID based on the title
function generateId(title: string, platform: string): string {
  const cleanTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .substring(0, 20)
  return `${platform.substring(0, 2)}-${cleanTitle}-${Math.floor(Math.random() * 1000)}`
}

// Function to determine platform from URL
function getPlatformFromUrl(url: string): string {
  if (url.includes("gofundme") || url.includes("gofund.me")) return "gofundme"
  if (url.includes("chuffed")) return "chuffed"
  if (url.includes("launchgood")) return "launchgood"
  if (url.includes("paypal")) return "paypal"
  if (url.includes("gogetfunding")) return "gogetfunding"
  if (url.includes("zeffy")) return "zeffy"
  if (url.includes("sadagaat")) return "sadagaat"
  return "other"
}

// Main function to import campaigns
async function importCampaigns(csvFilePath: string) {
  try {
    // Read the CSV file
    const fileContent = fs.readFileSync(csvFilePath, "utf8")

    // Parse the CSV data
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    })

    // Transform the data into campaign objects
    const campaigns = records.map((record: any) => {
      const platform = record.platform || getPlatformFromUrl(record.originalUrl)

      return {
        id: generateId(record.title, platform),
        title: record.title,
        description: record.description || `Support this ${platform} campaign for Sudan`,
        image: record.image || "/placeholder.svg?height=200&width=300",
        category: record.category || "Humanitarian Aid",
        platform,
        originalUrl: record.originalUrl,
        organizer: record.organizer || undefined,
        // Optional fields
        raised: record.raised ? Number(record.raised) : undefined,
        goal: record.goal ? Number(record.goal) : undefined,
        daysLeft: record.daysLeft ? Number(record.daysLeft) : undefined,
      }
    })

    // Output the result
    console.log(`Successfully imported ${campaigns.length} campaigns`)

    // Write to a JSON file
    const outputPath = path.join(process.cwd(), "imported-campaigns.json")
    fs.writeFileSync(outputPath, JSON.stringify(campaigns, null, 2))

    console.log(`Campaigns saved to ${outputPath}`)
    console.log("You can now copy these campaigns to your lib/campaigns.ts file")
  } catch (error) {
    console.error("Error importing campaigns:", error)
  }
}

// Check if a file path was provided
const csvFilePath = process.argv[2]
if (!csvFilePath) {
  console.error("Please provide a path to the CSV file")
  process.exit(1)
}

// Run the import function
importCampaigns(csvFilePath)
