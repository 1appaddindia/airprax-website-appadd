import React from "react";
import Form from "../../components/contact/contact-form/Form";
import Address from "../../components/contact/address/Address";
import Map from "../../components/contact/map/Map";

const Contact = () => {
  return (
    <div className="lg:container lg:max-w-9xl">
      <h1 className="m-3">Contact Here</h1>
      <div className="lg:mt-5 lg:flex lg:items-center lg:justify-evenly">
        <Form />
        <Address />
      </div>
      <Map />
    </div>
  );
};

export default Contact;
