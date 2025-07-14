# Deploying SudanFunds to Your IONOS Domain

This guide will walk you through the process of deploying your SudanFunds website to your IONOS domain.

## Option 1: Deploy with Vercel (Recommended)

### Step 1: Prepare Your Code
1. Make sure your code is in a GitHub repository
   - Create a GitHub account if you don't have one
   - Create a new repository
   - Push your code to the repository

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login (you can use your GitHub account)
2. Click "Add New..." > "Project"
3. Import your GitHub repository
4. Configure your project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: (leave as default)
   - Output Directory: (leave as default)
5. Click "Deploy"

### Step 3: Connect Your IONOS Domain
1. After deployment, go to your project dashboard
2. Click on "Settings" > "Domains"
3. Add your domain (e.g., sudanfunds.com)
4. Vercel will provide you with DNS records to add to IONOS

### Step 4: Configure DNS in IONOS
1. Log in to your IONOS account
2. Go to Domains & SSL > Domains
3. Select your domain
4. Go to DNS settings
5. Add the DNS records provided by Vercel:
   - Usually an A record pointing to Vercel's IP (76.76.21.21)
   - And CNAME records for www subdomain

### Step 5: Wait for DNS Propagation
- DNS changes can take up to 48 hours to propagate globally
- Usually, it's much faster (30 minutes to a few hours)
- Vercel will automatically issue an SSL certificate for your domain

## Option 2: Self-Hosting (Advanced)

If you prefer to self-host the website:

### Step 1: Build Your Next.js Project
\`\`\`bash
npm run build
\`\`\`

### Step 2: Choose a Hosting Provider
Options include:
- DigitalOcean
- AWS
- Linode
- Any hosting provider that supports Node.js

### Step 3: Deploy Your Build
1. Set up a server with Node.js installed
2. Upload your build files
3. Install dependencies and start the server
4. Set up a reverse proxy (Nginx or Apache)

### Step 4: Point Your IONOS Domain to Your Server
1. In IONOS, add an A record pointing to your server's IP address
2. Configure your server to respond to requests for your domain

## Option 3: Static Export (Simpler Hosting)

If you want to host on a simple static hosting service:

### Step 1: Configure Next.js for Static Export
Add to your next.config.js:
\`\`\`javascript
module.exports = {
  output: 'export',
}
\`\`\`

### Step 2: Build Your Project
\`\`\`bash
npm run build
\`\`\`
This will create a static export in the "out" directory.

### Step 3: Upload to Any Static Hosting
Options include:
- IONOS webhosting
- Netlify
- GitHub Pages
- Amazon S3

### Step 4: Configure Your Domain
Point your IONOS domain to your static hosting provider according to their instructions.

## Need Help?

If you encounter any issues during deployment, feel free to:
1. Check Vercel's documentation: https://vercel.com/docs
2. Check Next.js deployment documentation: https://nextjs.org/docs/deployment
3. Contact IONOS support for domain-specific questions
