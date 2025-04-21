
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"

// Add a small preload trigger for images
const preloadImages = () => {
  const imagesToPreload = [
    "/lovable-uploads/2280fb79-c359-4370-a903-15f4866b24da.png",
    "/lovable-uploads/aa899d1a-1055-4896-829b-127e87af0314.png",
    "/lovable-uploads/4e583a2c-c699-4674-af8e-fc3603843c69.png",
  ];
  
  imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Preload critical images
preloadImages();

createRoot(document.getElementById("root")!).render(<App />);
