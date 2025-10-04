import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Industrial Equipment Supply',
      items: [
        'Gate Valves, Ball Valves, Strainers',
        'Gaskets, O-Rings, Sealing Materials',
        'Conveyor Belts (PU, PVC, Modular, Timing)',
        'Bearings, Couplings, Industrial Hoses',
        'Sourced from trusted global and local manufacturers',
      ],
    },
    {
      title: 'Engineering Solutions',
      items: [
        'System diagnosis & failure analysis',
        'Equipment retrofitting and replacement',
        'Custom component sourcing based on specification',
        'Process improvement consultation (field-based)',
      ],
    },
    {
      title: 'Maintenance & Modifications',
      items: [
        'Custom cut gaskets or belts',
        'Adaptations for process-specific challenges',
        'Vendor coordination for special jobs',
        'On-site troubleshooting & inspection',
        'Emergency supply and rapid response',
      ],
    },
    {
      title: 'Calibration & Compliance',
      subtitle: '(via sister concern: Quality Calibration)',
      items: [
        'ISO/IEC 17025 accredited labs (NABL & BAB)',
        'On-site & in-lab industrial calibration',
        'Expertise in pharma, FMCG, oil & gas, textiles, power, healthcare',
      ],
    },
  ];

  return (
    <div className="bg-base-100 text-base-content py-16 px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Services
        </h1>
        <h2 className="text-2xl font-semibold text-orange-500">
          Engineering-Driven Supply & Service
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We don’t just supply components—we deliver tailored engineering solutions
          that solve real-world problems in industrial environments.
        </p>
      </div>

      {/* Highlight Block */}
      <div className="text-center max-w-3xl mx-auto mb-10 text-base text-gray-700">
        Whether you're a factory manager dealing with downtime, a procurement lead seeking
        reliable suppliers, or a maintenance engineer needing precision-fit components—
        <span className="font-bold"> we've got you covered.</span>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="card bg-base-200 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="card-body">
              <h3 className="card-title text-lg font-bold">
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="text-sm italic text-gray-500 mt-1">{service.subtitle}</p>
              )}
              <ul className="list-disc list-inside mt-4 space-y-1 text-base text-gray-700">
                {service.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
