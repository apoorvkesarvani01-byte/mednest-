import React from 'react';
import * as LucideIcons from 'lucide-react';

export default function DynamicIcon({ name, size = 20, className = '', color, style = {} }) {
  // Fallback map for common aliases
  const normalizedName = name || 'Activity';
  const IconComponent = LucideIcons[normalizedName] || 
    LucideIcons[normalizedName.charAt(0).toUpperCase() + normalizedName.slice(1)] || 
    LucideIcons.Activity;

  return <IconComponent size={size} className={className} color={color} style={style} />;
}
