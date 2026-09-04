/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Claymorphism typography
        nunito: ['Nunito', 'system-ui', '-apple-system', 'sans-serif'],

        // Neumorphic typography
        dmsans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],

        // Playful & Neumorphic Display typography
        jakarta: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        outfit: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],

        // Original ArchitectUI typography
        original: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        sans: ['"DM Sans"', '"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
      },
      colors: {
        // High-Fidelity Claymorphism Colors
        clay: {
          canvas: '#F4F1FA',
          cardBg: 'rgba(255, 255, 255, 0.75)',
          text: '#332F3A',
          muted: '#635F69',
          accent: '#7C3AED',
          accentLight: '#A78BFA',
          pink: '#DB2777',
          sky: '#0EA5E9',
          emerald: '#10B981',
          amber: '#F59E0B',
        },
        // Neumorphism Colors
        neu: {
          clay: '#E0E5EC',
          text: '#3D4852',
          muted: '#6B7280',
          accent: '#6C63FF',
          accentLight: '#8B84FF',
          teal: '#38B2AC',
        },
        // Playful Geometric Colors
        playful: {
          cream: '#FFFDF5',
          slate: '#1E293B',
          muted: '#F1F5F9',
          mutedForeground: '#64748B',
          violet: '#8B5CF6',
          pink: '#F472B6',
          yellow: '#FBBF24',
          mint: '#34D399',
          border: '#1E293B',
        },
      },
      boxShadow: {
        // High-Fidelity Claymorphism Shadows (4-Layer Stacks)
        'clay-card': '16px 16px 32px rgba(160, 150, 180, 0.2), -10px -10px 24px rgba(255, 255, 255, 0.9), inset 6px 6px 12px rgba(139, 92, 246, 0.03), inset -6px -6px 12px rgba(255, 255, 255, 1)',
        'clay-card-hover': '20px 20px 40px rgba(160, 150, 180, 0.28), -12px -12px 28px rgba(255, 255, 255, 0.95), inset 6px 6px 12px rgba(139, 92, 246, 0.04), inset -6px -6px 12px rgba(255, 255, 255, 1)',
        'clay-btn': '12px 12px 24px rgba(139, 92, 246, 0.3), -8px -8px 16px rgba(255, 255, 255, 0.4), inset 4px 4px 8px rgba(255, 255, 255, 0.4), inset -4px -4px 8px rgba(0, 0, 0, 0.1)',
        'clay-btn-hover': '16px 16px 28px rgba(139, 92, 246, 0.4), -10px -10px 20px rgba(255, 255, 255, 0.5), inset 4px 4px 8px rgba(255, 255, 255, 0.5), inset -4px -4px 8px rgba(0, 0, 0, 0.1)',
        'clay-pressed': 'inset 10px 10px 20px #d9d4e3, inset -10px -10px 20px #ffffff',
        'clay-deep': '30px 30px 60px #cdc6d9, -30px -30px 60px #ffffff, inset 10px 10px 20px rgba(139, 92, 246, 0.05), inset -10px -10px 20px rgba(255, 255, 255, 0.8)',
        'clay-orb': '10px 10px 20px rgba(139, 92, 246, 0.25), -6px -6px 14px rgba(255, 255, 255, 0.8), inset 3px 3px 6px rgba(255, 255, 255, 0.6), inset -3px -3px 6px rgba(0, 0, 0, 0.1)',

        // Neumorphic Dual Opposing RGB Shadows
        'neu-flat': '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)',
        'neu-hover': '12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255,0.6)',
        'neu-sm': '5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5)',
        'neu-pressed': 'inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)',
        'neu-well': 'inset 10px 10px 20px rgb(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6)',
        'neu-inset-sm': 'inset 3px 3px 6px rgb(163,177,198,0.6), inset -3px -3px 6px rgba(255,255,255,0.5)',
        'neu-accent': '6px 6px 14px rgb(163,177,198,0.6), -6px -6px 14px rgba(255,255,255,0.4)',
        'neu-accent-active': 'inset 4px 4px 8px rgba(0,0,0,0.25), inset -4px -4px 8px rgba(255,255,255,0.25)',

        // Playful Geometric "Pop" Hard Shadows
        'pop-sm': '2px 2px 0px 0px #1E293B',
        'pop-md': '4px 4px 0px 0px #1E293B',
        'pop-lg': '6px 6px 0px 0px #1E293B',
        'pop-pink': '6px 6px 0px 0px #F472B6',
        'pop-violet': '6px 6px 0px 0px #8B5CF6',
        'pop-mint': '6px 6px 0px 0px #34D399',
        'pop-yellow': '6px 6px 0px 0px #FBBF24',
      }
    },
  },
  plugins: [],
}
