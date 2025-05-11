
import React from 'react';
import { 
  LucideProps,
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
  'canva': (props: LucideProps) => (
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
      <path d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z" />
      <path d="M7 10v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3z" />
    </svg>
  ),
  'figma': (props: LucideProps) => (
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
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  ),
  'shopify': (props: LucideProps) => (
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
      <path d="M20.5 8.5c.24-.6.24-1.37 0-1.99-.73-1.85-3.17-2.62-4.95-1.36-.56-1.62-2.03-2.83-3.77-2.95-2.34-.16-4.45 1.55-4.77 3.86-.33 2.44.68 4.31 2.42 5.11L8 18.5l-1.59.66A2.32 2.32 0 0 0 5 21.34v.16h14v-.15a2.32 2.32 0 0 0-1.41-2.14L16 18.5l-1.39-7.5c1.74.83 3.9.32 5.2-1.47.2-.28.44-.53.69-.86z" />
      <path d="M8 18.5l-4.5 2.88a.82.82 0 0 0-.5.82v.04c0 .48.37.76.84.76H8v-4.5z" />
      <path d="M16 18.5l4.5 2.88a.82.82 0 0 1 .5.82v.04c0 .48-.37.76-.84.76H16v-4.5z" />
    </svg>
  ),
  'wordpress': (props: LucideProps) => (
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
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <path d="M12 2c-2.5 5.5-2.5 14.5 0 20" />
      <path d="M12 2c2.5 5.5 2.5 14.5 0 20" />
    </svg>
  ),
  'excel': (props: LucideProps) => (
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h2" />
      <path d="M14 13h2" />
      <path d="M8 17h2" />
      <path d="M14 17h2" />
    </svg>
  ),
  'trello': (props: LucideProps) => (
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <rect x="7" y="7" width="3" height="9" />
      <rect x="14" y="7" width="3" height="5" />
    </svg>
  ),
  'jira': (props: LucideProps) => (
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
      <path d="M11.68 16.63a1.5 1.5 0 0 1-2.12 0l-5.47-5.63a1.5 1.5 0 0 1 0-2.12l5.47-5.63a1.5 1.5 0 0 1 2.12 0l5.47 5.63a1.5 1.5 0 0 1 0 2.12z" />
      <path d="M19.91 16.63a1.5 1.5 0 0 1-2.12 0l-5.47-5.63a1.5 1.5 0 0 1 0-2.12l5.47-5.63a1.5 1.5 0 0 1 2.12 0l5.47 5.63a1.5 1.5 0 0 1 0 2.12z" />
    </svg>
  ),
  'zapier': (props: LucideProps) => (
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
      <path d="M10 8V7c0-1.7 1.3-3 3-3s3 1.3 3 3v1h2V7c0-2.8-2.2-5-5-5S8 4.2 8 7v1h2z" />
      <path d="M17 8H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z" />
      <path d="m9 15 3 3 3-3" />
      <path d="m15 12-3-3-3 3" />
    </svg>
  ),
  'n8n': (props: LucideProps) => (
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
      <path d="M2 5h8l4 6-4 6H2l4-6-4-6Z" />
      <path d="M14 5h8l-4 6 4 6h-8l4-6-4-6Z" />
    </svg>
  ),
  'mixpanel': (props: LucideProps) => (
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
      <path d="M4 20h16" />
      <path d="M6 16v4" />
      <path d="M10 12v8" />
      <path d="M14 8v12" />
      <path d="M18 4v16" />
    </svg>
  ),
  'chatgpt': (props: LucideProps) => (
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
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    </svg>
  ),
  'claude': (props: LucideProps) => (
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
      <path d="M8 9h8" />
      <path d="M8 15h4" />
    </svg>
  ),
  'gemini': (props: LucideProps) => (
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
      <path d="M7 2h10" />
      <path d="M12 10v12" />
      <path d="M21 7C21 4.79086 16.9706 3 12 3C7.02944 3 3 4.79086 3 7C3 9.20914 7.02944 11 12 11C16.9706 11 21 9.20914 21 7Z" />
    </svg>
  ),
  'midjourney': (props: LucideProps) => (
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
      <path d="M6 3h12l4 6-10 13L2 9z" />
      <path d="m12 22-4-12 8-2-4 14Z" />
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

