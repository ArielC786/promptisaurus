import React from 'react';
import './styles.css';

export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}) => {
  const baseClass = variant === 'primary' ? 'submit-btn' : 'copy-btn';
  
  return (
    <button 
      className={`${baseClass} ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 