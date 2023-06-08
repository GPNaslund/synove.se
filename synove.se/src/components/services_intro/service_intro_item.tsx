type ServiceIntroItemProps = {
  imgSrc: string;
  serviceName: string;
  serviceDescriptionFirstSection: string;
  serviceDescriptionSecondSection: string;
}

const ServiceIntroItem: React.FC<ServiceIntroItemProps> = ({ imgSrc,serviceName, serviceDescriptionFirstSection, serviceDescriptionSecondSection}) => {
  return (
    <div className="w-full flex flex-col items-center my-16">
      <div className="w-40">
        <img src={imgSrc}></img>
      </div>
      <h5 className="text-2xl underline my-5">{serviceName}</h5>
      <div className="w-4/6">
        <p className="text-center">{serviceDescriptionFirstSection}</p>
        <br/>
        <p className="text-center">{serviceDescriptionSecondSection}</p>
      </div>
    </div>
  )
}

export default ServiceIntroItem;