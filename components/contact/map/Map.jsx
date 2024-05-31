import React from "react";

const Map = () => {
  return (
    <div className="m-2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15022.505612466508!2d77.522366!3d13.021328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d5b9788ddff%3A0x80923d84f06b4819!2sT%20T%20T%20Academy!5e1!3m2!1sen!2sus!4v1716453097616!5m2!1sen!2sus"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
    </div>
  );
};

export default Map;
