import React from "react";

type ServiceItemProps = {
  imgSrc: string;
  serviceName: string;
  serviceDescription: string;
  isTop: boolean;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ imgSrc, serviceName, serviceDescription, isTop }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 items-center">
      <div className={`col-span-1 ${
        isTop ? "border-t" : ""
      } md:border-b border-l border-r border-gray-300 w-full h-full flex items-center justify-center`}>
        <div>
          <img src={imgSrc} alt="Service icon" className="mt-10 md:mt-0"/>
        </div>
      </div>
      <div
        className={`col-span-1 md:col-span-3 ${
          isTop ? "md:border-t" : ""
        } border-b border-r border-l md:border-l-0 border-gray-300 w-full h-full flex items-center justify-center md:justify-start text-center md:text-left p-10`}
      >
        <div className="md:w-3/5">
          <h3 className="text-lg font-semibold">{serviceName}</h3>
          <p style={{ whiteSpace: 'pre-line' }}>{serviceDescription}</p>
        </div>
      </div>
    </div>

  );
}

export default ServiceItem;