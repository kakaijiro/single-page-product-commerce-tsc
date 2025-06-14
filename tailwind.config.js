/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(240, 5%, 9%)",
        "primary-foreground": "hsl(0, 0%, 100%)",
        destructive: "hsl(0, 84%, 60%)",
        "destructive-foreground": "hsl(0, 0%, 100%)",
        accent: "hsl(210, 40%, 90%)",
        "accent-foreground": "hsl(222.2, 47.4%, 11.2%)",
        secondary: "hsl(210, 40%, 96%)",
        "secondary-foreground": "hsl(222.2, 47.4%, 11.2%)",
        ring: "hsl(240, 5%, 64%)",
      },
    },
  },
  plugins: [],
};
