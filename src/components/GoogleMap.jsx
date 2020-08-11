import React from 'react';

const GoogleMap = () => {
  return (
    <section className="ttm-row map-section res-991-p-0 clearfix">
      <div className="map-wrapper">
        <iframe
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30396.513405374746!2d-63.144212!3d-17.765163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcdca1225df7093cd!2sESE!5e0!3m2!1sen!2sus!4v1596459029180!5m2!1sen!2sus"
          frameBorder="0"
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
    </section>
  );
};

export default GoogleMap;
