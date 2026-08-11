import React from 'react';

interface UserAvatarProps {
  name: string;
  avatarUrl?: string;
  sizeClassName?: string;
}

// Background colors for Google Review style DPs based on name
const DP_COLORS = [
  'bg-gradient-to-tr from-[#F7941D] to-amber-500 text-white',
  'bg-gradient-to-tr from-[#E91E63] to-pink-500 text-white',
  'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white',
  'bg-gradient-to-tr from-emerald-600 to-teal-500 text-white',
  'bg-gradient-to-tr from-purple-600 to-indigo-500 text-white',
];

export const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  avatarUrl,
  sizeClassName = 'w-11 h-11 text-base',
}) => {
  // If a valid HTTP image URL is supplied and starts with http, render image
  if (avatarUrl && avatarUrl.startsWith('http')) {
    return (
      <img
        src={avatarUrl}
        alt={name}
        className={`${sizeClassName} rounded-full object-cover shadow-sm`}
      />
    );
  }

  // Otherwise render Google-style First Letter DP
  const firstLetter = name ? name.trim().charAt(0).toUpperCase() : 'U';
  
  // Pick deterministic color based on name string length & charcode
  const colorIndex = (name ? name.charCodeAt(0) + name.length : 0) % DP_COLORS.length;
  const colorClass = DP_COLORS[colorIndex];

  return (
    <div
      className={`${sizeClassName} rounded-full ${colorClass} font-extrabold flex items-center justify-center shadow-md shrink-0 uppercase tracking-wider select-none`}
    >
      {firstLetter}
    </div>
  );
};
