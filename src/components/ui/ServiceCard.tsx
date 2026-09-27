import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon, delay = 0 }) => {
  return (
    <Link
      to={`/services#${id}`}
      className={`service-card animate-fade-in-up delay-${delay}`}
      aria-label={`Learn more about ${id.replace(/-/g, ' ')}`}
    >
      {/* Icon — top of card on all breakpoints */}
      <div className="service-card-icon" aria-hidden="true">
        {icon}
      </div>

      {/* Body — holds text and desktop CTA */}
      <div className="service-card-body">
        <div className="service-card-text">
          <h3 className="service-card-title">{title}</h3>
          {/* Description: visible on desktop/tablet, hidden on mobile via CSS */}
          <p className="service-card-description">{description}</p>
        </div>

        {/* Desktop / tablet CTA — hidden on mobile via CSS */}
        <span className="service-card-link" aria-hidden="true">
          Learn more <ArrowRight size={16} />
        </span>
      </div>

      {/* Mobile bento arrow — absolutely positioned bottom-right, hidden on desktop */}
      <span className="service-card-bento-arrow" aria-hidden="true">
        <ArrowRight size={11} />
      </span>
    </Link>
  );
};
