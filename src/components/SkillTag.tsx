
import React from "react";

interface SkillTagProps {
  skill: string;
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

const SkillTag: React.FC<SkillTagProps> = ({ skill, color }) => {
  return (
    <div className={`${colors[color as keyof typeof colors]} px-4 py-2 rounded-full border-2 border-black font-medium inline-block m-1`}>
      {skill}
    </div>
  );
};

export default SkillTag;
