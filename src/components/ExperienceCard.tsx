
import React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  color: string;
}

const colors = {
  blue: "bg-pastel-blue",
  pink: "bg-pastel-pink",
  purple: "bg-pastel-purple",
  yellow: "bg-pastel-yellow",
  green: "bg-pastel-green",
  peach: "bg-pastel-peach",
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  duration,
  description,
  color,
}) => {
  return (
    <div className={`sticker-card ${colors[color as keyof typeof colors]} p-6 mb-6`}>
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold">{company}</p>
        <p className="text-sm bg-white px-3 py-1 rounded-full border border-black">{duration}</p>
      </div>
      <ul className="list-disc pl-5 space-y-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
