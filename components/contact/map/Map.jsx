import React from "react";

const Map = () => {
  return (
    <div className="m-2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15548.900687835954!2d77.522366!3d13.021328!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAxJzE2LjgiTiA3N8KwMzEnMjAuNSJF!5e0!3m2!1sen!2sus!4v1718894417679!5m2!1sen!2sus"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
