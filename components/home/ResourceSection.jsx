// import resourceSection from "utils/home/data.js";
import ResourceCard from "./Resources";

const resources = [
  {
    title: "Introduction to Pneumatic Principles",
    description:
      "Learn the basic principles of pneumatics and how they are applied in various industries.",
    link: "/articles/introduction-to-pneumatic-principles",
  },
  {
    title: "Pneumatic Component Selection Guide",
    description:
      "Discover how to choose the right pneumatic components for your application.",
    link: "/guides/pneumatic-component-selection-guide",
  },
  {
    title: "Troubleshooting Common Pneumatic Issues",
    description:
      "Find solutions to common problems encountered in pneumatic systems.",
    link: "/articles/troubleshooting-common-pneumatic-issues",
  },
  {
    title: "Best Practices for Pneumatics Maintenance",
    description:
      "Learn essential tips for maintaining and optimizing pneumatic systems for longevity and efficiency.",
    link: "/guides/best-practices-for-pneumatics-maintenance",
  },
];

const ResourcesSection = () => {
  return (
    <section className=" bg-gray-50 lg:p-5  p-2">
      <div className="container mx-auto ">
        <div className="m-9">
          <h6 className=" font-bold text-center ">
            Resources & Knowledge Center
          </h6>
          <h1 className="lg:text-4xl text-lg">  
            Your Gateway to Insightful Resources
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
