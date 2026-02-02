# 🚀 Deployment Guide - Multi-Sport Live Tracker

This guide will walk you through deploying your MERN stack application to production.

## Table of Contents
1. [MongoDB Atlas Setup](#mongodb-atlas-setup)
2. [Backend Deployment (Render)](#backend-deployment-render)
3. [Frontend Deployment (Vercel)](#frontend-deployment-vercel)
4. [Alternative Deployment Options](#alternative-deployment-options)

---

## MongoDB Atlas Setup

### 1. Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Create a new cluster (select Free Tier - M0)

### 2. Configure Database Access
1. Go to **Database Access** in the left sidebar
2. Click **Add New Database User**
3. Create a username and password (save these!)
4. Set privileges to **Read and write to any database**

### 3. Configure Network Access
1. Go to **Network Access** in the left sidebar
2. Click **Add IP Address**
3. Click **Allow Access from Anywhere** (0.0.0.0/0)
4. Confirm

### 4. Get Connection String
1. Go to **Database** in the left sidebar
2. Click **Connect** on your cluster
3. Choose **Connect your application**
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Example: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/sports-tracker?retryWrites=true&w=majority`

---

## Backend Deployment (Render)

### 1. Prepare Your Code
1. Make sure your `server/package.json` has a start script:
   ```json
   "scripts": {
     "start": "node server.js",
     "dev": "nodemon server.js"
   }
   ```

2. Ensure your server listens on the correct port:
   ```javascript
   const PORT = process.env.PORT || 5000;
   ```

### 2. Create Render Account
1. Go to [Render](https://render.com)
2. Sign up with GitHub

### 3. Deploy Backend
1. Click **New +** → **Web Service**
2. Connect your GitHub repository
3. Configure:
   - **Name**: `sports-tracker-api`
   - **Environment**: `Node`
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Instance Type**: Free

4. Add Environment Variables:
   - Click **Advanced** → **Add Environment Variable**
   - Add:
     ```
     MONGODB_URI=your_mongodb_atlas_connection_string
     PORT=5000
     CRICKET_API_KEY=your_cricket_api_key
     NODE_ENV=production
     ```

5. Click **Create Web Service**

6. Wait for deployment (5-10 minutes)

7. Your backend URL will be: `https://sports-tracker-api.onrender.com`

---

## Frontend Deployment (Vercel)

### 1. Update API URL
1. Create `client/.env.production`:
   ```
   VITE_API_URL=https://sports-tracker-api.onrender.com/api
   ```

2. Update `client/src/services/api.js` if needed:
   ```javascript
   const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
   ```

### 2. Create Vercel Account
1. Go to [Vercel](https://vercel.com)
2. Sign up with GitHub

### 3. Deploy Frontend
1. Click **Add New** → **Project**
2. Import your GitHub repository
3. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. Add Environment Variables:
   - Click **Environment Variables**
   - Add:
     ```
     VITE_API_URL=https://sports-tracker-api.onrender.com/api
     ```

5. Click **Deploy**

6. Your frontend URL will be: `https://your-project-name.vercel.app`

### 4. Update CORS in Backend
1. Go to your backend code (`server/server.js`)
2. Update CORS configuration:
   ```javascript
   app.use(cors({
     origin: ['https://your-project-name.vercel.app', 'http://localhost:3000'],
     credentials: true
   }));
   ```

3. Commit and push changes
4. Render will auto-deploy the update

---

## Alternative Deployment Options

### Backend Alternatives

#### Railway
1. Go to [Railway](https://railway.app)
2. Sign up with GitHub
3. **New Project** → **Deploy from GitHub repo**
4. Select your repository
5. Add environment variables
6. Deploy

#### Heroku
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create sports-tracker-api`
4. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI=your_connection_string
   heroku config:set CRICKET_API_KEY=your_api_key
   ```
5. Deploy:
   ```bash
   git subtree push --prefix server heroku main
   ```

### Frontend Alternatives

#### Netlify
1. Go to [Netlify](https://netlify.com)
2. **Add new site** → **Import from Git**
3. Select your repository
4. Configure:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/dist`
5. Add environment variables
6. Deploy

---

## Post-Deployment Checklist

- [ ] Backend is accessible at your Render URL
- [ ] Frontend is accessible at your Vercel URL
- [ ] MongoDB Atlas is connected
- [ ] All environment variables are set correctly
- [ ] CORS is configured properly
- [ ] API endpoints are working
- [ ] Test all sports data fetching
- [ ] Test filtering, sorting, and search
- [ ] Check mobile responsiveness

---

## Troubleshooting

### Backend Issues

**Problem**: Server not starting
- Check Render logs
- Verify environment variables
- Ensure MongoDB connection string is correct

**Problem**: CORS errors
- Update CORS origin in `server.js`
- Redeploy backend

### Frontend Issues

**Problem**: API calls failing
- Check `VITE_API_URL` environment variable
- Verify backend URL is correct
- Check browser console for errors

**Problem**: Build failing
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### Database Issues

**Problem**: Cannot connect to MongoDB
- Check IP whitelist in MongoDB Atlas
- Verify connection string
- Check database user credentials

---

## Monitoring and Maintenance

### Render
- Free tier: Server sleeps after 15 minutes of inactivity
- First request after sleep may take 30-60 seconds
- Upgrade to paid tier for always-on service

### Vercel
- Free tier: Unlimited bandwidth
- Automatic HTTPS
- Automatic deployments on git push

### MongoDB Atlas
- Free tier: 512MB storage
- Monitor usage in Atlas dashboard
- Upgrade if needed

---

## Custom Domain (Optional)

### Vercel
1. Go to your project settings
2. **Domains** → **Add**
3. Enter your domain
4. Follow DNS configuration instructions

### Render
1. Go to your service settings
2. **Custom Domains** → **Add Custom Domain**
3. Enter your domain
4. Update DNS records

---

## Continuous Deployment

Both Vercel and Render support automatic deployments:

1. Push to GitHub
2. Automatic build and deploy
3. Check deployment status in dashboard

---

## Security Best Practices

1. **Never commit `.env` files**
2. **Use environment variables** for all sensitive data
3. **Enable HTTPS** (automatic on Vercel/Render)
4. **Restrict CORS** to your frontend domain only
5. **Rotate API keys** regularly
6. **Monitor API usage** to prevent abuse

---

## Cost Breakdown

### Free Tier Limits

**MongoDB Atlas (M0)**
- 512MB storage
- Shared RAM
- Shared vCPU

**Render (Free)**
- 750 hours/month
- 512MB RAM
- Sleeps after 15 min inactivity

**Vercel (Hobby)**
- Unlimited bandwidth
- 100GB bandwidth
- Automatic SSL

**Total Cost**: $0/month for hobby projects

---

## Need Help?

- Check deployment logs
- Review documentation
- Open an issue on GitHub
- Contact support for your hosting provider

---

**Congratulations! Your Multi-Sport Live Tracker is now live! 🎉**
