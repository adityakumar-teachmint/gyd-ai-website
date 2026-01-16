# Content Editing Guide

This document provides detailed instructions for editing all content on the GYD AI website.

---

## 📝 Main Content File: `src/config/content.js`

All website text is organized in this single file. Here's what each section controls:

---

### 1. Hero Section (Top Banner)

```javascript
hero: {
  title: "Master Every Topic, Your Way",        // Main headline
  subtitle: "Choose your path to mastery...",   // Description below headline
}
```

**Tips:**
- Keep title under 8 words for impact
- Subtitle can be 1-2 sentences

---

### 2. App Download Links

```javascript
appLinks: {
  playStore: "https://play.google.com/store/apps/details?id=...",
  appStore: "https://apps.apple.com/in/app/..."
}
```

**To update:** Just replace the URLs with new ones.

---

### 3. Feature Cards (4 cards)

```javascript
features: [
  {
    icon: "chat",                              // Icon name (see icon list below)
    title: "Study Smarter, Not Harder",        // Card title
    description: "Chat with your AI tutor..." // Card description
  },
  // ... 3 more cards
]
```

**Available icons:** `chat`, `cards`, `quiz`, `chart`, `book`, `brain`, `target`, `trophy`

---

### 4. Stats Section (Numbers)

```javascript
stats: [
  {
    value: "10M+",        // The number to display
    label: "Downloads"    // Label below the number
  },
  // ... more stats
]
```

**Tips:**
- Use abbreviations like "10M+" or "4.8" for cleaner look
- Keep to 3-4 stats maximum

---

### 5. "One App" Section

```javascript
oneApp: {
  title: "One App to Rule Every Exam",
  subtitle: "From quick quizzes to high-stakes finals...",
}
```

---

### 6. Subjects Section

```javascript
subjects: {
  title: "Master Any Subject. Ace Every Standard.",
  subtitle: "No more generic study guides...",
  subjectList: ["Mathematics", "Physics", "Chemistry", ...]
}
```

**To add/remove subjects:** Edit the `subjectList` array

---

### 7. Testimonials ⭐ (Important for editing)

```javascript
testimonials: [
  {
    name: "Priya Sharma",           // Student name
    role: "Class 12, CBSE",         // Their class/board
    quote: "GYD AI helped me...",   // Their review (keep under 100 words)
    avatar: "/images/avatar1.png"   // Photo path (optional)
  },
  // ... more testimonials
]
```

**To add a new testimonial:**
1. Copy an existing testimonial block
2. Paste it after the last one (before the `]`)
3. Add a comma after the previous testimonial's `}`
4. Update all fields

**Example of adding 4th testimonial:**
```javascript
testimonials: [
  { name: "Priya", ... },
  { name: "Rahul", ... },
  { name: "Ananya", ... },
  {                              // ← New testimonial
    name: "Vikram Singh",
    role: "Class 11, ICSE",
    quote: "The flashcards are amazing!",
    avatar: "/images/avatar4.png"
  }                              // ← No comma on last item
]
```

---

### 8. Download CTA (Bottom Section)

```javascript
downloadCTA: {
  title: "Start Your Learning Journey Today",
  subtitle: "Join millions of students..."
}
```

---

### 9. Footer

```javascript
footer: {
  tagline: "Your AI Study Companion",
  links: {
    company: [
      { label: "About Teachmint", url: "https://teachmint.com/about" },
      // ... more links
    ],
    support: [
      { label: "Help Center", url: "..." },
      // ... more links
    ]
  },
  copyright: "© 2025 Teachmint. All rights reserved."
}
```

---

## 🎨 Changing Colors: `src/config/theme.js`

```javascript
colors: {
  primary: "#3B82F6",      // Main brand color (blue)
  secondary: "#8B5CF6",    // Secondary color (purple)
  background: "#0a0a0a",   // Page background (dark)
  cardBg: "rgba(255,255,255,0.05)",  // Card backgrounds
  text: "#ffffff",         // Main text color
  textMuted: "#9ca3af"     // Subtle text color
}
```

**To change colors:**
1. Find the color you want to change
2. Replace the hex code (e.g., `#3B82F6`)
3. Save the file

**Color picker tools:** [coolors.co](https://coolors.co), [colorhunt.co](https://colorhunt.co)

---

## 🖼 Adding/Changing Images

### Logo
- Current file: `public/images/gyd-logo.png`
- Replace with new file using same name, OR update path in `content.js`

### Phone Mockups
- Location: `public/images/phone-mockup.png`
- Recommended size: 400x800px PNG with transparency

### Testimonial Avatars
- Location: `public/images/avatar1.png`, `avatar2.png`, etc.
- Recommended size: 100x100px
- Can use placeholder service: `https://ui-avatars.com/api/?name=Priya+Sharma`

---

## 🚨 Common Mistakes to Avoid

1. **Missing quotes:** All text must be in quotes `"like this"`
2. **Missing commas:** Each item needs a comma after it (except the last one)
3. **Broken links:** Always test URLs after updating
4. **Large images:** Compress images before uploading (use [tinypng.com](https://tinypng.com))

---

## ✅ After Making Changes

1. Save all files
2. Test locally if possible (`npm run dev`)
3. Commit and push to GitHub
4. Vercel will auto-deploy in ~1 minute
5. Check the live site to verify changes
