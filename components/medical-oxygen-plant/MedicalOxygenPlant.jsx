import React from "react";
import { product } from "../../utils/medical-oxygen-plant/data";

const MedicalOxygenPlant = () => {
  return (
    <div className="lg:container lg:max-w-9xl m-5">
      <h1>Medical Oxygen Plant</h1>
      {product.map((ele, i) => (
        <>
          <div
            key={i}
            className="lg:flex lg:items-center lg:justify-center lg:flex-col"
          >
            <img src={ele.img} alt="" className="h-80 w-96" />
          </div>
          <h3>{ele.source}</h3>
          <p>{ele.sourceDescription}</p>
          <br />
          <h3>{ele.quality}</h3>
          <p>{ele.qualityDescription}</p>
          <br />
          <h3>{ele.monitoring}</h3>
          <p>{ele.monitoringDescription}</p>
          <br />
          <h3>{ele.compliant}</h3>
          <p>{ele.compliantDescription}</p>
          <br />
          <h3>{ele.supply}</h3>
          <p>{ele.supplyDescription[0]}</p>
          <p>{ele.supplyDescription[1]}</p>
        </>
      ))}
    </div>
  );
};

export default MedicalOxygenPlant;
