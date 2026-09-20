import React from 'react';
import { Phone } from 'lucide-react';
import './CallFloat.css';

export const CallFloat: React.FC = () => {
  return (
    <a
      href="tel:+918306099337"
      className="call-float"
      aria-label="Call us"
    >
      <Phone size={28} className="call-icon" />
    </a>
  );
};
