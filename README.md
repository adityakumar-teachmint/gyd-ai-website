# GYD AI Website

A modern landing page for GYD AI by Teachmint - your AI-powered study companion.

---

## 🎯 Quick Guide for Non-Coders

This document explains how to make changes to the website without knowing how to code.

### Where to Change Text Content

**All website text is in ONE file:** `src/config/content.js`

Open this file and you'll see clearly labeled sections:
- `hero` - The main top section with headline and description
- `features` - The 4 feature cards
- `stats` - Numbers like downloads, ratings, etc.
- `oneApp` - "One App to Rule Every Exam" section
- `subjects` - "Master Any Subject" section
- `testimonials` - User reviews
- `downloadCTA` - Bottom download section
- `footer` - Footer links and text

### Where to Change Colors/Fonts

**All design settings are in:** `src/config/theme.js`

### Where to Change Images

**All images are in:** `public/images/`

---

## 📁 Project Structure Explained

```
gyd-ai-website/
├── README.md              ← You are here! Instructions file
├── CONTENT.md             ← Detailed content editing guide
├── public/
│   └── images/            ← All images (logo, phone mockups, etc.)
├── src/
│   ├── app/
│   │   ├── page.jsx       ← Main landing page (assembles all sections)
│   │   ├── layout.jsx     ← Common wrapper (header, footer, fonts)
│   │   └── globals.css    ← Global styles
│   ├── components/        ← Individual sections of the website
│   │   ├── Header.jsx     ← Top navigation bar
│   │   ├── Hero.jsx       ← Main banner with download buttons
│   │   ├── Features.jsx   ← 4 feature cards section
│   │   ├── Stats.jsx      ← Numbers (downloads, ratings, etc.)
│   │   ├── OneApp.jsx     ← "One App to Rule Every Exam"
│   │   ├── Subjects.jsx   ← "Master Any Subject" section
│   │   ├── Testimonials.jsx ← User reviews
│   │   ├── DownloadCTA.jsx  ← Bottom call-to-action
│   │   └── Footer.jsx     ← Bottom footer
│   └── config/
│       ├── content.js     ← ⭐ ALL TEXT CONTENT HERE
│       └── theme.js       ← Colors and fonts
```

---

## 🔧 Common Changes (Step-by-Step)

### Change the Main Headline

1. Open `src/config/content.js`
2. Find the `hero` section (around line 5)
3. Change the `title` value
4. Save the file

### Add/Edit a Testimonial

1. Open `src/config/content.js`
2. Find the `testimonials` array (around line 80)
3. Copy an existing testimonial block and modify it, OR edit existing ones
4. Each testimonial has: `name`, `role`, `quote`, `avatar`

### Change Stats Numbers

1. Open `src/config/content.js`
2. Find the `stats` section (around line 45)
3. Change `value` and `label` for each stat

### Change App Store Links

1. Open `src/config/content.js`
2. Find `appLinks` section (around line 15)
3. Update `playStore` or `appStore` URLs

---

## 🚀 How to Deploy (Step-by-Step)

### Step 1: Upload to GitHub

1. Go to [github.com](https://github.com) and sign in (or create account)
2. Click the "+" button (top right) → "New repository"
3. Name it `gyd-ai-website`
4. Keep it Public (or Private if you prefer)
5. Click "Create repository"
6. Follow the instructions shown to upload your files

**Or use GitHub Desktop (easier):**
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Sign in with your GitHub account
3. File → Add Local Repository → Select this folder
4. Click "Publish repository"

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New" → "Project"
3. Find and select `gyd-ai-website` from your repositories
4. Click "Deploy" (Vercel auto-detects Next.js settings)
5. Wait 1-2 minutes for deployment
6. You'll get a URL like `gyd-ai-website.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `gydai.teachmint.com`)
4. Follow DNS instructions shown

---

## 🔄 Making Updates After Deployment

1. Make changes to files locally
2. In GitHub Desktop: Write a summary → Click "Commit to main"
3. Click "Push origin"
4. Vercel automatically redeploys (takes ~1 minute)

---

## 📞 Need Help?

- **Preview changes locally:** Run `npm run dev` in terminal, open `localhost:3000`
- **Something broken?** Check the Vercel deployment logs for errors
- **Want to test before going live?** Vercel creates preview URLs for every commit

---

## 🛠 For Developers

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

**Tech Stack:**
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion (animations)
