# 🚀 Deploy to GitHub Pages - Complete Guide

## ✅ What I've Set Up For You

I've created a GitHub Actions workflow that will automatically build and deploy your portfolio to GitHub Pages whenever you push to the main branch.

---

## 📋 **Step-by-Step Deployment**

### **Step 1: Enable GitHub Pages**

1. Go to your repository: https://github.com/hari-haran04/Hari_porfolio
2. Click on **"Settings"** tab (top right)
3. In the left sidebar, click **"Pages"** (under "Code and automation")
4. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"**
   - (NOT "Deploy from a branch")
5. Click **"Save"** if needed

### **Step 2: Push the Workflow File**

The workflow file has been created at `.github/workflows/deploy.yml`. Now push it to GitHub:

```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push
```

### **Step 3: Wait for Deployment**

1. Go to the **"Actions"** tab in your GitHub repository
2. You'll see the workflow running (yellow dot = in progress)
3. Wait 2-3 minutes for it to complete (green checkmark = success)
4. Your site will be live at: **https://hari-haran04.github.io/Hari_porfolio/**

---

## 🌐 **Your Portfolio URL**

Once deployed, your portfolio will be available at:

**https://hari-haran04.github.io/Hari_porfolio/**

---

## 🔄 **Automatic Deployments**

From now on, every time you push to the `main` branch:
- GitHub Actions will automatically build your app
- Deploy it to GitHub Pages
- Your site will update in 2-3 minutes

---

## 🎨 **What the Workflow Does**

1. ✅ Checks out your code
2. ✅ Sets up Node.js 18
3. ✅ Installs dependencies
4. ✅ Builds your Angular app with correct base-href
5. ✅ Deploys to GitHub Pages

---

## 🛠️ **Troubleshooting**

### If the workflow fails:
1. Go to **Actions** tab in GitHub
2. Click on the failed workflow
3. Check the error logs
4. Common issues:
   - Build errors: Check your code compiles locally with `npm run build`
   - Permission errors: Make sure GitHub Pages is enabled in Settings

### If the site shows a blank page:
- The base-href is already configured correctly in the workflow
- Clear your browser cache and try again
- Check browser console for errors

---

## 📝 **Manual Deployment (Alternative)**

If you prefer to deploy manually without GitHub Actions:

```bash
# Build with correct base-href
npm run build -- --base-href=/Hari_porfolio/

# Install angular-cli-ghpages
npm install -g angular-cli-ghpages

# Deploy
npx angular-cli-ghpages --dir=dist/first-ang/browser
```

---

## 🎉 **Benefits of GitHub Pages**

✅ **Free hosting**  
✅ **Automatic HTTPS**  
✅ **Automatic deployments** on push  
✅ **Fast CDN delivery**  
✅ **No server management**  

---

## 🔗 **Next Steps**

After deployment:
1. Share your portfolio: `https://hari-haran04.github.io/Hari_porfolio/`
2. Add it to your resume
3. Share on LinkedIn
4. Update your GitHub profile README with the link

---

**Ready to deploy? Run the commands in Step 2!** 🚀
