import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { BiFontFamily } from 'react-icons/bi'

// https://vite.dev/config/
export default defineConfig({
  them:{
    extends:{
      fontFamily:{
        sans:['Poppins',' sans-serif'],
        cursive:['Allura','cursive']
      }
      
    }
  },
  plugins: [
    tailwindcss(),
    react()
  ],
})
