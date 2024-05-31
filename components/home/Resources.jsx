const ResourceCard = ({ title, description, link }) => {
  return (
    <div className="bg-white border border-[#018CB5] shadow-lg rounded-lg flex flex-col justify-between overflow-hidden ">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="px-4 py-3 bg-gray-100">
        <a href={link} className="text-[#bf1e2e] font-bold">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
