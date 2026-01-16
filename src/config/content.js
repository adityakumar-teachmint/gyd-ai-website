/**
 * ============================================
 * GYD AI WEBSITE - CONTENT CONFIGURATION
 * ============================================
 * 
 * 📝 HOW TO EDIT:
 * - All website text is in this file
 * - Just change the text between quotes "like this"
 * - Save the file and the website will update
 * 
 * ⚠️ IMPORTANT:
 * - Don't delete the commas at the end of lines
 * - Keep text inside the quotes
 * - Test after making changes
 * 
 * ============================================
 */

const content = {
  
  // ============================================
  // SITE INFO
  // ============================================
  siteName: "GYD AI",
  siteTagline: "by Teachmint",
  
  // ============================================
  // APP DOWNLOAD LINKS
  // Change these URLs when you have new links
  // ============================================
  appLinks: {
    playStore: "https://play.google.com/store/apps/details?id=com.teachmint.teachmint&pcampaignid=web_share",
    appStore: "https://apps.apple.com/in/app/teachmint-connected-classroom/id1544210597",
  },

  // ============================================
  // HERO SECTION (Top banner)
  // ============================================
  hero: {
    // Main headline - keep it short and impactful
    title: "Master Every Topic, Your Way",
    
    // Subtitle - 1-2 sentences explaining the product
    subtitle: "Your AI-powered study companion with interactive flashcards, instant quizzes, and smart analytics to accelerate your learning journey.",
    
    // Small badge text above the title
    badge: "AI-Powered Learning",
  },

  // ============================================
  // FEATURE CARDS (4 cards)
  // Icon options: chat, cards, quiz, chart, book, brain, target, trophy, sparkles, zap
  // ============================================
  features: [
    {
  icon: "chat",
  title: "Instant Concept Clarity",
  description: "Ask questions anytime and get clear, step-by-step explanations from your AI learning partner.",
},
{
  icon: "cards",
  title: "Learn by Active Recall",
  description: "Reinforce concepts using smart flashcards and exam-focused MCQs built for long-term memory.",
},
{
  icon: "quiz",
  title: "Test What Truly Matters",
  description: "Challenge yourself with adaptive quizzes that reveal exactly what you know and what you don’t.",
},
{
  icon: "chart",
  title: "Visualize Your Growth",
  description: "Monitor progress with detailed insights and compare your performance with other learners.",
},
  ],

  // ============================================
  // STATS SECTION (Numbers that impress)
  // Add/remove items as needed (keep 3-4 for best look)
  // ============================================
  stats: [
    {
      value: "10M+",
      label: "App Downloads",
    },
    {
      value: "4.8",
      label: "Play Store Rating",
      icon: "star", // Shows a star icon
    },
    {
      value: "50K+",
      label: "Daily Active Learners",
    },
    {
      value: "1M+",
      label: "Questions Practiced",
    },
  ],

  // ============================================
  // "ONE APP" SECTION
  // ============================================
  oneApp: {
    title: "One App to Rule Every Exam",
    subtitle: "From quick quizzes to the high-stakes finals that define your future, we provide the tools, insights, and confidence to help you conquer them all.",
    
    // Features list in this section
    features: [
      "AI-powered doubt solving",
      "Personalized study paths",
      "Exam-ready practice tests",
      "Progress tracking & insights",
    ],
  },

  // ============================================
  // SUBJECTS SECTION
  // ============================================
  subjects: {
    title: "Master Any Subject. Ace Every Standard.",
    subtitle: "No more generic study guides. Our tools focus on your specific weak spots, turning your hardest subjects into your biggest strengths.",
    
    // Add or remove subjects as needed
    subjectList: [
      "Mathematics",
      "Physics", 
      "Chemistry",
      "Biology",
      "English",
      "History",
      "Geography",
      "Computer Science",
      "Economics",
      "Accountancy",
    ],
    
    // Exam boards/standards supported
    standards: [
      "CBSE",
      "ICSE",
      "State Boards",
      "JEE",
      "NEET",
      "CUET",
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ⭐ To add new testimonial: Copy one block, paste below, update details
  // ⭐ Avatar can be image path OR use placeholder like shown
  // ============================================
  testimonials: [
    {
      name: "Priya Sharma",
      role: "Class 12, CBSE",
      quote: "GYD AI completely changed how I study. The flashcards are addictive and the AI tutor explains things better than my textbook. Scored 95% in my boards!",
      avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=3B82F6&color=fff",
    },
    {
      name: "Rahul Mehta",
      role: "JEE Aspirant",
      quote: "The quiz feature is insane! It finds exactly where I'm weak and keeps drilling those topics. My mock test scores jumped 40 marks in just 2 months.",
      avatar: "https://ui-avatars.com/api/?name=Rahul+Mehta&background=8B5CF6&color=fff",
    },
    {
      name: "Ananya Iyer",
      role: "Class 11, ICSE",
      quote: "I love the streak feature - it keeps me coming back every day. The community rankings make studying feel like a game. Highly recommend!",
      avatar: "https://ui-avatars.com/api/?name=Ananya+Iyer&background=06B6D4&color=fff",
    },
    // ============================================
    // 📝 TO ADD MORE TESTIMONIALS:
    // 1. Copy the block below (from { to },)
    // 2. Paste it above this comment
    // 3. Update name, role, quote, and avatar
    // ============================================
    // {
    //   name: "Student Name",
    //   role: "Class/Exam",
    //   quote: "Their testimonial quote here...",
    //   avatar: "https://ui-avatars.com/api/?name=Student+Name&background=3B82F6&color=fff",
    // },
  ],

  // ============================================
  // DOWNLOAD CTA (Bottom section)
  // ============================================
  downloadCTA: {
    title: "Start Your Learning Journey Today",
    subtitle: "Join millions of students who are already learning smarter with GYD AI. Download free and unlock your potential.",
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline: "Your AI-Powered Study Companion",
    
    // Footer link columns
    links: {
      product: [
        { label: "Features", url: "#features" },
        { label: "How It Works", url: "#how-it-works" },
        { label: "Testimonials", url: "#testimonials" },
      ],
      company: [
        { label: "About Teachmint", url: "https://www.teachmint.com/about" },
        { label: "Careers", url: "https://www.teachmint.com/careers" },
        { label: "Contact Us", url: "https://www.teachmint.com/contact" },
      ],
      support: [
        { label: "Help Center", url: "https://www.teachmint.com/customer-support" },
        { label: "Community", url: "https://community.teachmint.com/" },
        { label: "Privacy Policy", url: "https://www.teachmint.com/privacy" },
      ],
    },
    
    // Social media links
    social: {
      twitter: "https://twitter.com/teachmint",
      instagram: "https://instagram.com/teachmint",
      linkedin: "https://linkedin.com/company/teachmint",
      youtube: "https://youtube.com/@teachmint",
    },
    
    copyright: "© 2026 Teachmint Technologies Pvt. Ltd. All rights reserved.",
  },

  // ============================================
  // SEO & META
  // ============================================
  seo: {
    title: "GYD AI - Master Every Topic, Your Way | Teachmint",
    description: "AI-powered study companion with flashcards, quizzes, and smart analytics. Join millions learning smarter with GYD AI by Teachmint.",
    keywords: "GYD AI, study app, flashcards, quizzes, AI tutor, Teachmint, CBSE, ICSE, JEE, NEET",
  },
};

export default content;
