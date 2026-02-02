# 📋 GitHub Setup and Push Guide

This guide will help you push your MERN stack project to GitHub.

## Prerequisites

- Git installed on your system
- GitHub account
- Repository created on GitHub (or you'll create one)

---

## Step 1: Install Dependencies

Before pushing to GitHub, you need to install dependencies for both frontend and backend.

### PowerShell Execution Policy Issue

If you encounter the error: `running scripts is disabled on this system`, run PowerShell as Administrator and execute:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Install Backend Dependencies

```bash
cd server
npm install
```

This will install:
- express
- mongoose
- axios
- cors
- dotenv
- node-cache
- nodemon (dev dependency)

### Install Frontend Dependencies

```bash
cd client
npm install
```

This will install:
- react
- react-dom
- react-router-dom
- axios
- vite
- @vitejs/plugin-react

---

## Step 2: Test Locally (Optional but Recommended)

### Start MongoDB

If using local MongoDB:
```bash
mongod
```

Or use MongoDB Atlas (see DEPLOYMENT.md)

### Start Backend

```bash
cd server
npm run dev
```

Server should start on `http://localhost:5000`

### Start Frontend

Open a new terminal:
```bash
cd client
npm run dev
```

Frontend should start on `http://localhost:3000`

Test the application to ensure everything works!

---

## Step 3: Verify .gitignore

Make sure your `.gitignore` file is in the root directory and includes:

```
# Dependencies
node_modules/
package-lock.json

# Environment variables
.env
.env.local

# Build outputs
dist/
build/

# IDE
.vscode/
```

**IMPORTANT**: Never commit `.env` files or `node_modules/`!

---

## Step 4: Initialize Git Repository

If not already initialized:

```bash
cd "c:\Users\Siddhant Maurya\Documents\DSA Project"
git init
```

---

## Step 5: Check Git Status

```bash
git status
```

You should see:
- ✅ `server/` directory
- ✅ `client/` directory
- ✅ `README.md`
- ✅ `DEPLOYMENT.md`
- ✅ `.gitignore`
- ✅ `MultipleSportsTracker/` (original vanilla JS version)
- ❌ `node_modules/` (should be ignored)
- ❌ `.env` files (should be ignored)

---

## Step 6: Stage All Files

```bash
git add .
```

---

## Step 7: Commit Changes

```bash
git commit -m "Convert to MERN stack: Complete implementation with React frontend and Express backend"
```

Or use a more detailed commit message:

```bash
git commit -m "feat: Convert Multi-Sport Tracker to MERN stack

- Add Express backend with API routes for all 6 sports
- Implement MongoDB integration with Mongoose
- Create React frontend with Vite
- Add React Router for navigation
- Implement Context API for state management
- Add caching mechanism for API optimization
- Create comprehensive documentation
- Add deployment guides for Render and Vercel"
```

---

## Step 8: Create GitHub Repository

### Option A: Create New Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click **New Repository** (+ icon in top right)
3. Repository name: `Multi-Sports-Live-Tracker`
4. Description: `Real-time multi-sport tracking application built with MERN stack`
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README (you already have one)
7. Click **Create repository**

### Option B: Use Existing Repository

If you already have a repository, get the URL from GitHub.

---

## Step 9: Add Remote Origin

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/Multi-Sports-Live-Tracker.git
```

Or if using SSH:

```bash
git remote add origin git@github.com:YOUR_USERNAME/Multi-Sports-Live-Tracker.git
```

Verify remote:
```bash
git remote -v
```

---

## Step 10: Push to GitHub

### First Push

```bash
git branch -M main
git push -u origin main
```

If you encounter authentication issues:
- Use GitHub Personal Access Token instead of password
- Or set up SSH keys

### Subsequent Pushes

```bash
git push
```

---

## Step 11: Verify on GitHub

1. Go to your repository on GitHub
2. Verify all files are present:
   - ✅ `server/` directory
   - ✅ `client/` directory
   - ✅ `README.md`
   - ✅ `DEPLOYMENT.md`
   - ✅ `.gitignore`
   - ❌ No `node_modules/`
   - ❌ No `.env` files

3. Check that README.md displays properly

---

## Step 12: Add Repository Topics

On GitHub:
1. Click **⚙️ Settings** (gear icon near About)
2. Add topics:
   - `mern`
   - `mern-stack`
   - `react`
   - `nodejs`
   - `mongodb`
   - `express`
   - `sports-tracker`
   - `real-time`
   - `api`
   - `vite`

---

## Step 13: Update Repository Description

1. Click **⚙️ Settings** next to About
2. Description: `Real-time multi-sport tracking application built with MERN stack (MongoDB, Express, React, Node.js)`
3. Website: (add after deployment)
4. Topics: (already added in Step 12)

---

## Common Git Commands

### Check Status
```bash
git status
```

### View Changes
```bash
git diff
```

### Add Specific Files
```bash
git add server/server.js
git add client/src/App.jsx
```

### Commit with Message
```bash
git commit -m "Your commit message"
```

### Push Changes
```bash
git push
```

### Pull Latest Changes
```bash
git pull
```

### View Commit History
```bash
git log --oneline
```

### Create New Branch
```bash
git checkout -b feature/new-feature
```

### Switch Branches
```bash
git checkout main
```

---

## Troubleshooting

### Issue: "Permission denied (publickey)"

**Solution**: Set up SSH keys or use HTTPS with Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `repo`
4. Copy token
5. Use token as password when pushing

### Issue: "Updates were rejected"

**Solution**: Pull first, then push

```bash
git pull origin main --rebase
git push origin main
```

### Issue: "Large files detected"

**Solution**: Make sure `.gitignore` is working

```bash
git rm -r --cached node_modules
git commit -m "Remove node_modules"
git push
```

### Issue: "Accidentally committed .env file"

**Solution**: Remove from Git history

```bash
git rm --cached server/.env
git commit -m "Remove .env from tracking"
git push
```

---

## Next Steps

After pushing to GitHub:

1. ✅ **Install Dependencies** (see Step 1)
2. ✅ **Test Locally** (see Step 2)
3. 🚀 **Deploy to Production** (see DEPLOYMENT.md)
4. 📝 **Update README** with live demo URL
5. ⭐ **Star your own repository**
6. 📢 **Share with others**

---

## GitHub Actions (Optional)

You can set up CI/CD with GitHub Actions:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Render
        run: echo "Deployment triggered"
```

---

## Collaboration

### Inviting Collaborators

1. Go to repository Settings
2. Collaborators → Add people
3. Enter GitHub username or email

### Creating Issues

1. Go to Issues tab
2. New Issue
3. Describe bug or feature request

### Pull Requests

1. Fork repository
2. Create feature branch
3. Make changes
4. Submit pull request

---

**Congratulations! Your project is now on GitHub! 🎉**

Repository URL: `https://github.com/YOUR_USERNAME/Multi-Sports-Live-Tracker`
