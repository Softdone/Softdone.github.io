// ServicesSection.js
import React from 'react';


export const ServiceCategory = ({ icon, title, services }) => (

<div className="service-category">
    <div className="service-icon">{icon}</div>
    <h2>{title}</h2>
    <ul>
      {services.map(service => (
        <li key={service}>{service}</li>
      ))}
    </ul>
  </div>
);

const ServicesSection = () => (
  <div className="services-wrapper">
    <h1 className="services-title">Our Services</h1> {/* Title added here */}
    <div className="services-section">
      <ServiceCategory
         icon={<span class="material-symbols-outlined">
         view_in_ar
         </span>}
        title="Design UX-UI"
        services={['Exploration', 'Recherche utilisateur', 'Maquettage']}
      />
      <ServiceCategory
        icon={<span class="material-symbols-outlined">
        code
        </span>}
        title="Web & Mobile"
        services={['Web & mobile', 'Reprise de code', 'Gestion d\'APIs complexes']}
      />

      <ServiceCategory
       icon={<span class="material-symbols-outlined">
       construction
       </span>}
        title="Maintenance"
        services={['Audit UX', 'Amélioration continue', 'Data Management']}
      />
    </div>
  </div>
);

export default ServicesSection;
