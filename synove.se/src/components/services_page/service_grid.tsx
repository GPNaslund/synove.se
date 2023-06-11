import ServiceItem from "./service_item";

export default function ServiceGrid() {
  return (
    <div className="p-10">
      <ServiceItem
        isTop={true}
        imgSrc="/personal-training.svg"
        serviceName="Personlig träning"
        serviceDescription={`Personlig träning där jag utgår ifrån varje individ för att starka, motivera och inspirera till fysisk aktivitet.
      Bygga en stark och hållbar kropp samt skapa goda långsiktiga vanor! \n
      Min drivkraft är att motivera och ge dig verktyg för att kunna må bra, prestera bättre och få en hållbar hälsa. \n
      Vi går igenom dina mål och ditt varför så att vi tillsammans kan skapa dom bästa förutsättningarna för att maximera din personliga utveckling.`}
      />
      <ServiceItem
        isTop={false}
        imgSrc="/rehab.svg"
        serviceName="Rehabilitering"
        serviceDescription={`För att du ska hålla dig smärtfri och funktionell så krävs bra träning i rätt mängd!\n
        I samarbete med leg.Naprapat på Proaktiv Idrottscenter så coachar jag dig genom hela processen från 
        smärta eller skada, till smärtfrihet och rörelseglädje. Du har mig som stöd genom hela resan och tillsammans 
        så ser vi till att du får alla verktyg du behöver för en smärtfri och stark kropp.\n
        Modern rehabilitering liknar vanlig träning till stor del, där mer omsorg om rörelsekvalitet 
        samt träningsmängd ges för att säkerställa ett bättre mående. Det är viktigt för mig att 
        rehabiliteringen inte blir ett tråkigt "måste", fokus ligger på vad du gillar att träna och 
        att hitta sätt att få din favoritträning att fungera rehabiliterande!`}
      />
      <ServiceItem
        isTop={false}
        imgSrc="/group-training.svg"
        serviceName="Gruppträning"
        serviceDescription={`Vill du förbättra din styrka, kondition och uthållenhet?\n
        Vi tränar tillsammans i en grupp för att motivera och pusha varandra till att maximera prestationen och resultat!\n
        Gruppträningen är rolig och utmanande pass där vi utmanar och tränare hela kroppen. 
        Träningen är anpassad så att alla kan vara med och inga förkunskaper krävs!`}
      />
      <div id="corporate-health">
      <ServiceItem
        isTop={false}
        imgSrc="/corporate-health.svg"
        serviceName="Företagsträning"
        serviceDescription={`Friskvård och personalvård för ditt företag.\n
        Vill du starka ditt personal och jobba med team building på ett annorlunda sätt?
        Forskning visar att fysisk aktivitet minskar sjukskrivningar och ökar produktiviteten hos dina anställda. 
        Personalen skapar gemenskap, får en bättre sammanhållning och en bättre hälsa.\n
        Tillsammans skapar vi rörelseglädje och en bra rutin för dina anställda.\n
        Träningen lägger vi upp efter era önskemål och anpassas så att alla kan vara 
        med oavsett träningsbakgrund. Vi tränar i fina lokaler inne på Stockholm Stadion, 
        utomhus eller på plats hos er beroende på vad ni önskar.\n
        Jag har även en naprapat kopplat på mitt team om ni önskar ännu mera friskvård.`}
      />
      </div>
      <ServiceItem
        isTop={false}
        imgSrc="/sports-teams.svg"
        serviceName="Fysträning för idrottslag"
        serviceDescription={`Vill du förbättra styrkan, uthålligheten och konditionen i ditt lag?
        Vi sätter ihop ett roligt, utmanande och tufft träningspass där man jobbar mycket med funktionell 
        styrka, rörlighet, samarbete och flås.\n Ett bra komplement till alla lagsporter och ett grymt 
        sätt att starka lagkänslan och jobba med team building på ett annorlunda sätt en vad man brukar.\n
        Målet är att bygga en stark, hållbar och skadefri kropp samt bygga mestrings-känsla och starka 
        självkänslan. Passen är anpassad efter dom individuella grupperna och kommer utformas efter det 
        nivå där gruppen är.`}
      />
    </div>
  )
}