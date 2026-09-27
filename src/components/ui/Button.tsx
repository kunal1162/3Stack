import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClass = `btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon left">{icon}</span>}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon right">{icon}</span>}
    </>
  );

  if (href) {
    // If it's an external link
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={baseClass} onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    // If it's an internal route
    return (
      <Link to={href} className={baseClass} onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {content}
    </button>
  );
};
