import React from "react";
import MedicalOxygenPlant from "../../components/medical-oxygen-plant/MedicalOxygenPlant";
import Banner from "../../components/global/Banner";

const MedicalOxygenPlantPage = () => {
  return (
    <div>
      <Banner
        imageSrc="/images/banners/lava-6-r2-1560x792.png"
        currentPage="Medical Oxygen Plant"
        pageTitle="Medical Oxygen Plant"
        previousPage="Home"
      />
      <MedicalOxygenPlant />
    </div>
  );
};

export default MedicalOxygenPlantPage;
