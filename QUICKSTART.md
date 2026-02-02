# 🚀 Quick Start Guide

Get your Multi-Sport Live Tracker running in 5 minutes!

## Prerequisites

- Node.js v16+ installed
- MongoDB (local or Atlas account)
- Git installed

---

## 1️⃣ Clone or Download

```bash
git clone https://github.com/YOUR_USERNAME/Multi-Sports-Live-Tracker.git
cd Multi-Sports-Live-Tracker
```

---

## 2️⃣ Fix PowerShell Execution Policy (Windows Only)

If you get "scripts disabled" error, run PowerShell as Administrator:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd server
npm install
```

---

## 4️⃣ Configure Backend Environment

Create `server/.env`:

```env
MONGODB_URI=mongodb://localhost:27017/sports-tracker
PORT=5000
CRICKET_API_KEY=b7843604-baad-403e-9cde-887bfd0d938a
NODE_ENV=development
```

**For MongoDB Atlas**: Replace `MONGODB_URI` with your Atlas connection string

---

## 5️⃣ Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## 6️⃣ Start MongoDB

### Local MongoDB:
```bash
mongod
```

### MongoDB Atlas:
No need to start anything - it's cloud-based!

---

## 7️⃣ Start Backend Server

Open a terminal:

```bash
cd server
npm run dev
```

You should see:
```
🚀 Server running on port 5000
📊 Environment: development
MongoDB Connected: localhost
```

---

## 8️⃣ Start Frontend

Open a **new** terminal:

```bash
cd client
npm run dev
```

You should see:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

---

## 9️⃣ Open in Browser

Navigate to: **http://localhost:3000**

---

## ✅ Verify It's Working

1. You should see the Multi-Sport Live Tracker homepage
2. Click on different sport tabs (MLB, Cricket, MLS, NHL, NBA, Football)
3. Try changing dates (Yesterday, Today, Tomorrow)
4. Test filtering (All, Live, Final, Scheduled)
5. Search for a team name

---

## 🐛 Troubleshooting

### Backend won't start

**Error**: `Cannot connect to MongoDB`
- Make sure MongoDB is running
- Check your connection string in `.env`

**Error**: `Port 5000 already in use`
- Change `PORT` in `.env` to 5001
- Update frontend proxy in `client/vite.config.js`

### Frontend won't start

**Error**: `npm: command not found`
- Install Node.js from nodejs.org

**Error**: `Cannot find module`
- Run `npm install` again in the client directory

### API calls failing

**Error**: `Network Error` or `CORS Error`
- Make sure backend is running on port 5000
- Check `client/vite.config.js` proxy settings

### No games showing

**Possible reasons**:
- No games scheduled for selected date
- API rate limits reached
- Check browser console for errors

---

## 📁 Project Structure

```
Multi-Sports-Live-Tracker/
├── server/              # Backend (Express + MongoDB)
│   ├── config/         # Database configuration
│   ├── controllers/    # API logic
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API routes
│   ├── utils/          # Utilities (caching)
│   └── server.js       # Entry point
├── client/             # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Page components
│   │   ├── context/    # State management
│   │   ├── services/   # API calls
│   │   └── styles/     # CSS
│   └── index.html
└── README.md
```

---

## 🎯 Next Steps

1. ✅ **Explore the app** - Try all features
2. 📖 **Read README.md** - Learn about features
3. 🚀 **Deploy** - See DEPLOYMENT.md
4. 🔧 **Customize** - Make it your own!

---

## 📚 Documentation

- [README.md](./README.md) - Full documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deploy to production
- [GITHUB_SETUP.md](./GITHUB_SETUP.md) - Push to GitHub

---

## 🆘 Need Help?

- Check the troubleshooting section above
- Review the full README.md
- Open an issue on GitHub
- Check browser console for errors
- Check server logs in terminal

---

**Happy Coding! 🎉**
