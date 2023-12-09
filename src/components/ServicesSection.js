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
  <div className="services-wrapper" id="Services" >
    <h1 className="services-title">Our Services</h1>
    <div className="services-section">
      <ServiceCategory
        icon={<span class="material-symbols-outlined">
          view_in_ar
        </span>}
        title="UX-UI"
        services={['User-centered development', 'Deep User Research', 'Customized Solutions']}
      />
      <ServiceCategory
        icon={<span class="material-symbols-outlined">
          code
        </span>}
        title="Web & Mobile Development"
        services={['Responsive Development', 'Advanced API Integration', 'High Performance Architecture']}
      />

      <ServiceCategory
        icon={<span class="material-symbols-outlined">
          construction
        </span>}
        title="Maintenance"
        services={['Continuous Monitoring', 'Regular Updates', 'Proactive Technical Support']}
      />
    </div>
  </div>
);

export default ServicesSection;
