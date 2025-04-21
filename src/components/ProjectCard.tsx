
import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
}

const ProjectCard = ({ title, description, image, link, color }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    window.open(link, '_blank');
  };
  
  return (
    <div 
      className={`sticker-card overflow-hidden hover-lift cursor-pointer ${color}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`} 
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
