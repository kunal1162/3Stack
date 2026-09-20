import React from 'react';
import './WhatsAppFloat.css';

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/918306099337?text=Hi%203Stack!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2a13.9 13.9 0 0 0-11.9 21.2L2 30l7-1.8A13.9 13.9 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.2-4.4 1.2 1.2-4.2-.3-.5A11.5 11.5 0 1 1 16 27.5zM22.3 20c-.3-.2-2-.9-2.3-1s-.5-.2-.7.2-.9 1.1-1.1 1.4-.4.3-.7.2-1.4-.5-2.7-1.6c-1-1-1.7-2.1-1.9-2.5s0-.5.2-.7c.2-.2.3-.4.5-.6s.3-.4.4-.7c.1-.3 0-.5 0-.7s-.7-1.6-1-2.2c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.3 3.4 1.4 3.6 2.4 3.7 5.9 5.2c.8.3 1.5.5 2 .7.8.2 1.6.2 2.2.1.7-.1 2-.8 2.3-1.6s.3-1.5.2-1.6-.4-.2-.7-.4z"/>
      </svg>
    </a>
  );
};
