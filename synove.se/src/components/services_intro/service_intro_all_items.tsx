import ServiceIntroItem from "./service_intro_item";

export default function ServiceIntroAllItems() {
  return (
    <div className="grid grid-cols-3 w-full">
      <ServiceIntroItem
        imgSrc="/personal-training.svg"
        serviceName="Personlig träning"
        serviceDescriptionFirstSection="Personlig träning med mål att motivera till fysisk aktivitet och rörelse."
        serviceDescriptionSecondSection="Att stärka individen och möta personen just där den är för att maximera den personliga utvecklingen och jobba mot ett hållbart resultat och god hälsa."
      />
      <ServiceIntroItem
        imgSrc="/rehab.svg"
        serviceName="Rehab/Prehab"
        serviceDescriptionFirstSection="Vill du bygga en stark och hållbar kropp samt förebygga skador?"
        serviceDescriptionSecondSection="I nära samarbete med leg.Naprapat på Proaktiv Idrottscenter så fokuserar vi på dina svaga punkter i rehab, prehab  och i förebyggande syfte."
      />
      <ServiceIntroItem
        imgSrc="/group-training.svg"
        serviceName="Gruppträning"
        serviceDescriptionFirstSection="Variera och få ut mer av din träning genom att träna tillsammans med andra. Rolig, utmanande och tuff träning där vi kör igenom hela kroppen."
        serviceDescriptionSecondSection="Vi kör tillsammans i en grupp för att maximera prestation och resultat samt pusha varandra."
      />

    </div>
  )
}