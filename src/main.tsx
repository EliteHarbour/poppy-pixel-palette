
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"

// Preload ALL important hero/project images for fastest load
const preloadImages = () => {
  const imagesToPreload = [
    // User's hero photo
    "/lovable-uploads/2ad85604-131e-48ce-9d08-2ee4455921fa.png",
    // Project images (in user-specified order)
    "/lovable-uploads/7563ced7-1326-47c6-86ed-2882a3913fa1.png", // Clipsy
    "/lovable-uploads/echocomfort-screenshot.svg", // EchoComfort
    "/lovable-uploads/2a39adcf-4595-4697-83e3-31bdeba09dc9.png", // Eliteharbur
    "/lovable-uploads/66cd5996-1505-4ab1-a76a-957635cc0dfa.png", // Elder Care
    "/lovable-uploads/b6d48e18-014c-440d-a2f6-f2034b689cf7.png", // BotanIQ
    "/lovable-uploads/54a5335b-0e37-4755-bad8-7b3190c26528.png", // Business Analysis / Coursera
    "/lovable-uploads/2717389b-a8fc-4483-aab7-2dd20f17e15a.png", // MediVerse
    "/lovable-uploads/867f07c3-2caa-41ee-aef0-7cd319b5ab4d.png", // Plug IT
    "/lovable-uploads/dfc28735-190a-425b-8e34-bde4ee4fbf97.png", // GalaxyRide (Interplanetary)
    "/lovable-uploads/315fb446-1f42-48c3-8761-ad3b92690fec.png", // Vivah
    "/lovable-uploads/1af44227-f669-4179-b3c3-2645c31e9972.png", // Acessup (Kit Lead Magnet)
    "/lovable-uploads/11391f00-db89-4744-a2a5-0b4de5744119.png", // Google Ads / Dinora
  ];
  
  imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

preloadImages();

createRoot(document.getElementById("root")!).render(<App />);
