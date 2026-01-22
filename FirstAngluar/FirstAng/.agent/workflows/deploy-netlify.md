---
description: Deploy Angular portfolio to Netlify
---

# Deploy to Netlify - Complete Guide

This workflow will guide you through deploying your Angular portfolio to Netlify.

## Prerequisites

1. A GitHub account (create one at https://github.com if you don't have one)
2. A Netlify account (sign up at https://netlify.com - you can use your GitHub account)

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository:
   - Repository name: `portfolio` (or any name you prefer)
   - Description: "My Portfolio Website"
   - Set to **Public** (so it's free to host)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
3. Click "Create repository"

## Step 2: Push Your Code to GitHub

Run these commands in your project directory:

```bash
# Add all files to git
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio website with custom favicon"

# Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main
```

**Note:** If the push fails with "main" branch, try:
```bash
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Netlify

### Option A: Deploy via Netlify UI (Recommended - Easiest)

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Authorize Netlify to access your GitHub account
5. Select your portfolio repository
6. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/first-ang/browser`
   - Click "Deploy site"

7. Wait for deployment (usually 2-3 minutes)
8. Your site will be live at a URL like: `https://random-name-123456.netlify.app`

### Option B: Deploy via Netlify CLI

// turbo-all

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize Netlify in your project:
```bash
netlify init
```

4. Follow the prompts:
   - Create & configure a new site
   - Choose your team
   - Site name: (choose a unique name or leave blank for random)
   - Build command: `npm run build`
   - Publish directory: `dist/first-ang/browser`

5. Deploy:
```bash
netlify deploy --prod
```

## Step 4: Custom Domain (Optional)

1. In Netlify dashboard, go to "Site settings" → "Domain management"
2. Click "Add custom domain"
3. Follow instructions to:
   - Buy a domain through Netlify, OR
   - Connect your existing domain

## Step 5: Update Your Portfolio URL

After deployment, update the Open Graph URL in your `index.html`:
- Replace `https://your-portfolio-url.com` with your actual Netlify URL

## Continuous Deployment

Once connected to GitHub, Netlify will automatically:
- Deploy when you push to the main branch
- Create preview deployments for pull requests
- Show build logs and errors

## Troubleshooting

### Build fails on Netlify:
- Check the build logs in Netlify dashboard
- Ensure `netlify.toml` is in your repository
- Verify Node version compatibility

### Site shows blank page:
- Check browser console for errors
- Verify publish directory is correct: `dist/first-ang/browser`
- Ensure all redirects are configured in `netlify.toml`

### Favicon not showing:
- Clear browser cache
- Check that all favicon files are in the `public` folder
- Verify files are committed to Git

## Quick Deploy Command

For future updates, just run:
```bash
git add .
git commit -m "Your update message"
git push
```

Netlify will automatically rebuild and deploy! 🚀
