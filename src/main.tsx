
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"

// Add a preload trigger for all critical images
const preloadImages = () => {
  const imagesToPreload = [
    // Hero image
    "/lovable-uploads/b7213a9b-69ed-47d1-addf-5f9f5654cd83.png",
    
    // Project thumbnails (first few that will appear in the viewport)
    "/lovable-uploads/156c91ab-7d06-49ef-ad9d-e562799d28fb.png", // Clipsy
    "/lovable-uploads/ab6e591f-333e-401d-af9a-199b4e78b60e.png", // Eliteharbur
    "/lovable-uploads/0f0dcb4c-a86e-4e03-92fb-c25369c58c9f.png", // Elder Care
    "/lovable-uploads/01314520-7fb1-4bbd-8856-63cdda87c3d4.png", // BotanIQ
  ];
  
  // Create an Image object for each URL to trigger preloading
  imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Preload critical images immediately when the site loads
preloadImages();

createRoot(document.getElementById("root")!).render(<App />);
