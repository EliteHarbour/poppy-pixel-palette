
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Icon } from '@/components/Icon';

interface ToolCardProps {
  name: string;
  icon: LucideIcon | string;
}

const ToolCard = ({ name, icon }: ToolCardProps) => {
  return (
    <div className="sticker-card p-4 flex flex-col items-center justify-center hover-lift">
      <div className="h-12 w-12 mb-3 flex items-center justify-center">
        {typeof icon === 'string' ? (
          <Icon name={icon} size={32} />
        ) : (
          React.createElement(icon, { size: 32 })
        )}
      </div>
      <p className="text-sm font-medium text-center">{name}</p>
    </div>
  );
};

export default ToolCard;
