/**
 * GoFundMe Embed Helper Script
 * This script helps extract campaign IDs and generate embed codes for GoFundMe campaigns
 */

// Function to extract GoFundMe campaign ID from various URL formats
function extractGoFundMeId(url) {
  const patterns = [/gofundme\.com\/f\/([^/?]+)/, /gofund\.me\/([^/?]+)/, /gofundme\.com\/([^/?]+)/]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

// Function to generate GoFundMe embed code
function generateGoFundMeEmbed(campaignId) {
  return `<div class="gfm-embed" data-url="https://www.gofundme.com/f/${campaignId}/widget/large"></div>`
}

// Function to process a list of GoFundMe URLs and generate embed data
function processGoFundMeUrls(urls) {
  return urls.map((url) => {
    const campaignId = extractGoFundMeId(url)
    if (campaignId) {
      return {
        originalUrl: url,
        campaignId: campaignId,
        embedCode: generateGoFundMeEmbed(campaignId),
        isEmbeddable: true,
      }
    }
    return {
      originalUrl: url,
      campaignId: null,
      embedCode: null,
      isEmbeddable: false,
    }
  })
}

// Example usage:
const sampleUrls = [
  "https://gofundme.com/f/help-an-artist-stuck-in-sudanese-war-zone",
  "https://gofund.me/ee296ec5",
  "https://www.gofundme.com/f/fight-hunger-in-sudan-the-khartoum-kitchen-appeal",
]

console.log("Processing GoFundMe URLs:")
console.log(processGoFundMeUrls(sampleUrls))

// Export functions for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    extractGoFundMeId,
    generateGoFundMeEmbed,
    processGoFundMeUrls,
  }
}
