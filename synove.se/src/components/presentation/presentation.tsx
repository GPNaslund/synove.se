export default function Presentation() {
  return (
    <div className="w-full grid grid-cols-2 bg-[url('/presentation-banner.jpg')] bg-cover bg-center bg-local" >
      <div className="lg:col-start-2 lg:justify-self-end col-span-2 text-right lg:text-left p-24 text-white">
        <h2 className="text-5xl">
          SYNÖVE ASPLUND
        </h2>
        <h3 className="text-2xl mt-3">
          Personlig tränare
        </h3>
        <p className="text-xl lg:w-3/4 mt-8">
          Jag har varit personlig tränare sedan 2017 och verksamhetsansvarig på Kampsportstadion, 
          tävlar aktivt i thaiboxning/ K1 och bedriver en mängd olika projekt inom hälsa, idrott och friskvård.
          <br></br><br></br>
          Min motivation är att inspirera till fysisk aktivitet och hållbar hälsa med fokus på helhet, personlig utveckling, rörelseglädje och välmående.
        </p>
        <button className="mt-8 border-white border-2 py-2 px-4">
          <p>Kontakta mig</p>
        </button>
      </div>
    </div>
  )
}