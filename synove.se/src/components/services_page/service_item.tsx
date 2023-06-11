import React from "react";

type ServiceItemProps = {
  imgSrc: string;
  serviceName: string;
  serviceDescription: string;
  isTop: boolean;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ imgSrc, serviceName, serviceDescription, isTop }) => {
  return (
    <div className="grid grid-cols-4 items-center">
      <div className={`col-span-1 ${
        isTop ? "border-t" : ""
      } border-b border-l border-r border-gray-300 w-full h-full flex items-center justify-center`}>
        <div>
          <img src={imgSrc} alt="Service icon" />
        </div>
      </div>
      <div
        className={`col-span-3 ${
          isTop ? "border-t" : ""
        } border-b border-r border-gray-300 w-full h-full flex items-center p-10`}
      >
        <div className="w-3/5">
          <h3 className="text-lg font-semibold">{serviceName}</h3>
          <p style={{ whiteSpace: 'pre-line' }}>{serviceDescription}</p>
        </div>
      </div>
    </div>

  );
}

export default ServiceItem;