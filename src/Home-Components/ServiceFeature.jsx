import React from 'react';

const ServiceFeature = ({ icon, title, description }) => (
  <div className="col-md-4 mb-4">
    <div className="feature-item">
      <i className={`bi ${icon} feature-icon`}></i>
      <h4 className="mt-3">{title}</h4>
      <p className="text-muted">{description}</p>
    </div>
  </div>
);

const ServiceFeatures = () => {
  const features = [
    {
      icon: 'bi-bag-fill',
      title: 'Free Shipping',
      description: 'Free Shipping is available inside Kathmandu Valley.'
    },
    {
      icon: 'bi-headset',
      title: 'Support Customer',
      description: 'The Customer Support is available on office time. You can contract through call, message or mail.'
    },
    {
      icon: 'bi-shield-lock-fill',
      title: 'Safe Service',
      description: 'Your orders will be delivery safely and within time.'
    }
  ];

  return (
    <div className="container mt-5">
      <div className="row text-center">
        {features.map((feature, index) => (
          <ServiceFeature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;
