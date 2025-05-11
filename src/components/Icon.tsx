
import React from 'react';
import { 
  LucideProps,
  Canva, 
  Figma, 
  Shopify, 
  Wordpress, 
  Excel, 
  Trello, 
  Jira, 
  MessageSquare,
  Code,
  Headphones
} from 'lucide-react';

// Icons that Lucide might not have directly
const CustomIcons: Record<string, React.ComponentType<LucideProps>> = {
  'meta-ads-manager': (props: LucideProps) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width="24" 
      height="24"
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      <path d="M9 8l7 8" />
      <path d="M9 16l7-8" />
    </svg>
  ),
  'google-analytics': (props: LucideProps) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width="24" 
      height="24"
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 20h-8V4h8v16zM12 20H4v-6h8v6z" />
    </svg>
  ),
  'kit': (props: LucideProps) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width="24" 
      height="24"
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  'semrush': (props: LucideProps) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width="24" 
      height="24"
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      <path d="M12 6v12" />
      <path d="M8 9h8" />
      <path d="M8 15h8" />
    </svg>
  ),
  'google-ads-manager': (props: LucideProps) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width="24" 
      height="24"
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L4 6v12l8 4 8-4V6l-8-4z" />
      <path d="M4 6l8 4 8-4" />
      <path d="M12 22V10" />
    </svg>
  ),
  'bubble': (props: LucideProps) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width="24" 
      height="24"
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="8" cy="12" r="2" />
      <circle cx="16" cy="12" r="2" />
    </svg>
  ),
  'message-square': MessageSquare,
  'code': Code,
  'headphones': Headphones
};

interface IconProps extends LucideProps {
  name: string;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = CustomIcons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return <div className="w-6 h-6 bg-gray-200 rounded" />;
  }
  
  return <IconComponent {...props} />;
};
