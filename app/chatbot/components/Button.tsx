import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary: "bg-brand-orange text-white hover:bg-brand-orangeHover shadow-md hover:shadow-lg transition-all duration-200",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200/80",
    ghost: "hover:bg-slate-100 hover:text-slate-900",
    outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 text-slate-700 shadow-sm"
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-9 px-5 py-1",
    lg: "h-10 px-6"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
