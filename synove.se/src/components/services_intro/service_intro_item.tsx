type ServiceIntroItemProps = {
  imgSrc: string;
  serviceName: string;
  serviceDescriptionFirstSection: string;
  serviceDescriptionSecondSection: string;
}

const ServiceIntroItem: React.FC<ServiceIntroItemProps> = ({ imgSrc,serviceName, serviceDescriptionFirstSection, serviceDescriptionSecondSection}) => {
  const imgAlt = serviceName + ' ' + 'icon';
  return (
    <div className="lg:w-full flex flex-col items-center my-10 md:my-16">
      <div className="w-32 md:w-40">
        <img src={imgSrc} alt={imgAlt}></img>
      </div>
      <h5 className="text-xl md:text-2xl bold my-5">{serviceName}</h5>
      <div className="w-4/6">
        <p className="text-center text-sm md:text-base">{serviceDescriptionFirstSection}</p>
        <br/>
        <p className="text-center text-sm md:text-base">{serviceDescriptionSecondSection}</p>
      </div>
    </div>
  )
}

export default ServiceIntroItem;