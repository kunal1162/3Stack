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
    <div className={`service-card animate-fade-in-up delay-${delay}`}>
      <div className="service-card-icon">
        {icon}
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
      <Link to={`/services#${id}`} className="service-card-link">
        Learn more <ArrowRight size={16} />
      </Link>
    </div>
  );
};
