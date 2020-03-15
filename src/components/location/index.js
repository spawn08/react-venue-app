import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d38077935.42003796!2d-100.17251468529835!3d2.613686331808782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d19.1871883!2d72.8633633!4m5!1s0x864e9918e993c711%3A0xa9073cfe6d9a606a!2smagnolia%20dallas%20downtown%20map!3m2!1d32.7800294!2d-96.79923989999999!5e0!3m2!1sen!2sin!4v1584212425970!5m2!1sen!2sin" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen
            ></iframe>
        <div className="location_tag">
            <div>Location</div>
        </div>
        </div>
    );
};

export default Location;