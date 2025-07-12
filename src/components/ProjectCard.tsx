
import { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
  imageLoading?: "lazy" | "eager";
}

const ProjectCard = ({ title, description, image, link, color, imageLoading = "lazy" }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const handleClick = () => {
    window.open(link, '_blank');
  };
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  return (
    <div 
      className={`sticker-card overflow-hidden hover-lift cursor-pointer ${color}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden relative group">
        <div className={`w-full h-full bg-gray-100 flex items-center justify-center ${imageLoaded ? 'hidden' : 'block'}`}>
          <div className="animate-pulse rounded-full h-12 w-12 bg-gray-200"></div>
        </div>
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'} ${imageLoaded ? 'block' : 'hidden'}`} 
          loading={imageLoading}
          fetchPriority={imageLoading === "eager" ? "high" : "auto"}
          onLoad={handleImageLoad}
          decoding="async"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="text-white" size={24} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
