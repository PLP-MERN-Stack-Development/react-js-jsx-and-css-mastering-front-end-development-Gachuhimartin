import React from 'react';

const Button = ({ variant = 'primary', size = 'md', className = '', children, ...props }) => {
    const baseStyles = 'font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50';
    
    const sizeStyles = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg'
    };

    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300',
    };

    return (
        <button 
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;