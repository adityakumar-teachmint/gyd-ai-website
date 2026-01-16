/**
 * ============================================
 * GYD AI WEBSITE - THEME CONFIGURATION
 * ============================================
 * 
 * 🎨 HOW TO EDIT:
 * - Change colors using hex codes (e.g., #3B82F6)
 * - Use a color picker: https://coolors.co
 * 
 * ============================================
 */

const theme = {
  
  // ============================================
  // COLORS
  // ============================================
  colors: {
    // Primary brand color (blue) - used for buttons, links, accents
    primary: "#3B82F6",
    
    // Secondary color (purple) - used for gradients, highlights
    secondary: "#8B5CF6",
    
    // Accent color (cyan) - used for special highlights
    accent: "#06B6D4",
    
    // Background colors
    background: "#0a0a0a",           // Main page background
    backgroundLight: "#1a1a1a",      // Card backgrounds
    
    // Text colors
    text: "#ffffff",                  // Main text (white)
    textMuted: "#9ca3af",            // Subtle text (gray)
    textDark: "#6b7280",             // Darker gray text
    
    // Glass effect for cards
    glass: "rgba(255, 255, 255, 0.05)",
    glassBorder: "rgba(255, 255, 255, 0.1)",
    
    // Gradient definitions
    gradients: {
      primary: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
      glow: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
    },
  },

  // ============================================
  // SPACING
  // ============================================
  spacing: {
    sectionPadding: "6rem",      // Space between sections
    containerMaxWidth: "1280px", // Max width of content
  },

  // ============================================
  // BORDER RADIUS
  // ============================================
  borderRadius: {
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
    full: "9999px",
  },

  // ============================================
  // ANIMATIONS
  // ============================================
  animations: {
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
    },
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export default theme;
