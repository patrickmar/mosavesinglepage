/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",

        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",

        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",

        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",

        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",

        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",

        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        /* MoSave */
        mosave: {
          indigo: "var(--mosave-indigo)",
          purple: "var(--mosave-purple)",
          red: "var(--mosave-red)",
          cyan: "var(--mosave-cyan)",
          lightCyan: "var(--mosave-light-cyan)",
          neutral50: "var(--mosave-neutral-50)",
          neutral100: "var(--mosave-neutral-100)",
          neutral200: "var(--mosave-neutral-200)",
          neutral700: "var(--mosave-neutral-700)",
          neutral800: "var(--mosave-neutral-800)",
          neutral900: "var(--mosave-neutral-900)",
        },
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};




















// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/app/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require("tailwindcss-animate"),
//   ],
// };

























// /** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin');

// module.exports = {
//   content: [
//     "./src/app/**/*.{ts,tsx}",
//     "./src/components/**/*.{ts,tsx}"
//   ],
//   darkMode: 'class', // Dark mode via .dark class
//   theme: {
//     extend: {
//       colors: {
//         mosave: {
//           indigo: '#4338ca',
//           purple: '#5b21b6',
//           red: '#dc2626',
//           cyan: '#06b6d4',
//           lightCyan: '#22d3ee',
//           neutral50: '#f9fafb',
//           neutral100: '#f3f4f6',
//           neutral200: '#e5e7eb',
//           neutral700: '#374151',
//           neutral800: '#1f2937',
//           neutral900: '#111827',
//         },
//         background: 'var(--background)',
//         foreground: 'var(--foreground)',
//         card: 'var(--card)',
//         'card-foreground': 'var(--card-foreground)',
//         primary: 'var(--primary)',
//         'primary-foreground': 'var(--primary-foreground)',
//         secondary: 'var(--secondary)',
//         'secondary-foreground': 'var(--secondary-foreground)',
//         muted: 'var(--muted)',
//         'muted-foreground': 'var(--muted-foreground)',
//         accent: 'var(--accent)',
//         'accent-foreground': 'var(--accent-foreground)',
//         destructive: 'var(--destructive)',
//         'destructive-foreground': 'var(--destructive-foreground)',
//         border: 'var(--border)',
//         input: 'var(--input)',
//         'input-background': 'var(--input-background)',
//         'switch-background': 'var(--switch-background)',
//         ring: 'var(--ring)',
//       },
//       borderRadius: {
//         DEFAULT: 'var(--radius)',
//         sm: 'calc(var(--radius) - 4px)',
//         md: 'calc(var(--radius) - 2px)',
//         lg: 'var(--radius)',
//         xl: 'calc(var(--radius) + 4px)',
//       },
//       fontSize: {
//         base: 'var(--font-size)',
//       },
//       fontWeight: {
//         normal: 'var(--font-weight-normal)',
//         medium: 'var(--font-weight-medium)',
//       },
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-20px)' },
//         },
//       },
//       animation: {
//         float: 'float 3s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [
//     require('tailwindcss-animate'),
//     plugin(function({ addUtilities }) {
//       addUtilities({
//         // Theme utilities using CSS variables
//         '.bg-theme': { backgroundColor: 'var(--background)' },
//         '.text-theme': { color: 'var(--foreground)' },
//         '.bg-card': { backgroundColor: 'var(--card)' },
//         '.text-card': { color: 'var(--card-foreground)' },
//         '.bg-primary': { backgroundColor: 'var(--primary)' },
//         '.text-primary': { color: 'var(--primary-foreground)' },
//         '.bg-secondary': { backgroundColor: 'var(--secondary)' },
//         '.text-secondary': { color: 'var(--secondary-foreground)' },
//         '.bg-muted': { backgroundColor: 'var(--muted)' },
//         '.text-muted': { color: 'var(--muted-foreground)' },
//         '.bg-accent': { backgroundColor: 'var(--accent)' },
//         '.text-accent': { color: 'var(--accent-foreground)' },
//         '.bg-destructive': { backgroundColor: 'var(--destructive)' },
//         '.text-destructive': { color: 'var(--destructive-foreground)' },
//         '.border-theme': { borderColor: 'var(--border)' },
//         '.ring-theme': { ringColor: 'var(--ring)' },
//       });
//     }),
//   ],
// };




// /** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin');

// module.exports = {
//   content: [
//     "./src/app/**/*.{ts,tsx}",
//     "./src/components/**/*.{ts,tsx}"
//   ],
//   darkMode: 'class', // Enables dark mode with .dark class
//   theme: {
//     extend: {
//       colors: {
//         mosave: {
//           indigo: '#4338ca',
//           purple: '#5b21b6',
//           red: '#dc2626',
//           cyan: '#06b6d4',
//           lightCyan: '#22d3ee',
//           neutral50: '#f9fafb',
//           neutral100: '#f3f4f6',
//           neutral200: '#e5e7eb',
//           neutral700: '#374151',
//           neutral800: '#1f2937',
//           neutral900: '#111827',
//         },
//         background: 'var(--background)',
//         foreground: 'var(--foreground)',
//         card: 'var(--card)',
//         'card-foreground': 'var(--card-foreground)',
//         primary: 'var(--primary)',
//         'primary-foreground': 'var(--primary-foreground)',
//         secondary: 'var(--secondary)',
//         'secondary-foreground': 'var(--secondary-foreground)',
//         muted: 'var(--muted)',
//         'muted-foreground': 'var(--muted-foreground)',
//         accent: 'var(--accent)',
//         'accent-foreground': 'var(--accent-foreground)',
//         destructive: 'var(--destructive)',
//         'destructive-foreground': 'var(--destructive-foreground)',
//         border: 'var(--border)',
//         input: 'var(--input)',
//         'input-background': 'var(--input-background)',
//         'switch-background': 'var(--switch-background)',
//       },
//       borderRadius: {
//         DEFAULT: 'var(--radius)',
//         sm: 'calc(var(--radius) - 4px)',
//         md: 'calc(var(--radius) - 2px)',
//         lg: 'var(--radius)',
//         xl: 'calc(var(--radius) + 4px)',
//       },
//       fontSize: {
//         base: 'var(--font-size)',
//       },
//       fontWeight: {
//         normal: 'var(--font-weight-normal)',
//         medium: 'var(--font-weight-medium)',
//       },
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-20px)' },
//         },
//       },
//       animation: {
//         float: 'float 3s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [
//     require('tailwindcss-animate'),
//     plugin(function({ addUtilities }) {
//       // Optional: map theme CSS variables for easier class use
//       addUtilities({
//         '.bg-theme': { backgroundColor: 'var(--background)' },
//         '.text-theme': { color: 'var(--foreground)' },
//       });
//     }),
//   ],
// };
