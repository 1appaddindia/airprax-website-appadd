import React from "react";
import Banner from "../../components/global/Banner";

const pages = [
  {
    title: "Centrifugal pump suppliers in Peenya",
    href: "/centrifugal-pump-suppliers-in-peenya",
  },
  {
    title: "High pressure centrifugal pump suppliers in Peenya",
    href: "/high-pressure-centrifugal-pump-suppliers-in-peenya",
  },
  {
    title: "Portable Fire Pumps suppliers in Peenya",
    href: "/portable-fire-pumps-suppliers-in-peenya",
  },
  {
    title: "Diesel Fire Pumps Suppliers in Peenya",
    href: "/diesel-fire-pumps-suppliers-in-peenya",
  },
  {
    title: "Fire Fighting Pumps suppliers in Peenya",
    href: "/fire-fighting-pumps-suppliers-in-peenya",
  },
  // { title: "Pressure-boosting systems suppliers for firefighting in Peenya", href: "/pressure-boosting-systems-suppliers-for-firefighting-in-peenya" },
  {
    title: "Wilo Fire Fighting Pump Suppliers in Peenya",
    href: "/wilo-fire-fighting-pump-suppliers-in-peenya",
  },
  {
    title: "Water pump suppliers for high raise buildings in Peenya",
    href: "/water-pump-suppliers-for-high-raise-buildings-in-peenya",
  },
  {
    title: "Hot water Pump suppliers in Peenya",
    href: "/hot-water-pump-suppliers-in-peenya",
  },
  {
    title: "Chill Water Pump Suppliers in Peenya",
    href: "/chill-water-pump-suppliers-in-peenya",
  },
  {
    title: "Fire alarm systems suppliers in Peenya",
    href: "/fire-alarm-systems-suppliers-in-peenya",
  },
  {
    title: "Water Distribution Pumps suppliers in Peenya",
    href: "/water-distribution-pumps-suppliers-in-peenya",
  },
  {
    title: "Wastewater collection pumps suppliers in Peenya",
    href: "/wastewater-collection-pumps-suppliers-in-peenya",
  },
  {
    title: "Sewage pumps suppliers in Peenya",
    href: "/sewage-pumps-suppliers-in-peenya",
  },
  {
    title: "Waste water treatment pumps suppliers in Peenya",
    href: "/waste-water-treatment-pumps-suppliers-in-peenya",
  },
  {
    title: "Fire Detection Systems Suppliers in Peenya",
    href: "/fire-detection-systems-suppliers-in-peenya",
  },
  {
    title: "Data centres fire alarm system suppliers in Peenya",
    href: "/data-centres-fire-alarm-system-suppliers-in-peenya",
  },
  {
    title: "Automatic Fire Detection System Suppliers in Peenya",
    href: "/automatic-fire-detection-system-suppliers-in-peenya",
  },
  {
    title: "Voice fire alarm system Suppliers in Peenya",
    href: "/voice-fire-alarm-system-suppliers-in-peenya",
  },
  {
    title: "Honeywell fire alarm system Suppliers in Peenya",
    href: "/honeywell-fire-alarm-system-suppliers-in-peenya",
  },
];

const PeenyaSuppliersIndex = () => {
  return (
    <div>
      <Banner
        imageSrc="/images/banners/Downpic.cc-1274417553.jpg"
        currentPage="Peenya Suppliers"
        previousPage="Home"
        pageTitle="Peenya Suppliers"
      />

      <section className="bg-white lg:p-10 p-5">
        <div className="lg:container lg:max-w-9xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="block p-5 border border-gray-200 rounded hover:shadow"
              >
                <h2 className="text-[22px] font-semibold text-[#083465] underline">
                  {p.title}
                </h2>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PeenyaSuppliersIndex;
