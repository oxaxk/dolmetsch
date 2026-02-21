import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  href,
  ...rest
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full';
  
  const variants = {
    primary:
      'bg-[#0F3D8C] text-white border border-[#0F3D8C] shadow-[0_18px_40px_rgba(15,61,140,0.55)] hover:bg-[#0C316F] hover:shadow-[0_22px_55px_rgba(12,49,111,0.7)] focus:ring-[#0F3D8C]',
    secondary:
      'bg-white text-[#0F3D8C] border border-[#0F3D8C]/25 hover:border-[#0F3D8C]/60 hover:bg-white focus:ring-[#0F3D8C]/30',
    outline:
      'bg-transparent text-[#0F3D8C] border border-[#0F3D8C]/60 hover:bg-[#0F3D8C]/5 hover:border-[#0F3D8C] focus:ring-[#0F3D8C]/40'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-7 py-3.5 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    const isExternal = href.startsWith('http');

    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        onClick={(e) => {
          if (rest.onClick) {
            rest.onClick(e as any);
          }
        }}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      type="button"
      className={classes}
      onClick={(e) => {
        if (rest.onClick) {
          rest.onClick(e);
        }
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
