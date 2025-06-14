
export default {
   content: ["./src/**/*.{html,js}","dist/tailwind project.html"],
   theme: {
     extend: {
         colors: {
            primary: '#1DA1F2',
            secondary: '#14171A',
            accent: '#657786',
            background: '#F5F8FA',
            text: '#14171A',
         },
         fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            body:['inter', 'sans-serif'],
         },
     },
   },
   plugins: [],
 }