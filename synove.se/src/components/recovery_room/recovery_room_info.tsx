export default function RecoveryRoomInfo() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1 w-full md:w-4/5 justify-self-center align-self-middle p-8 mt-12 md:mt-0 md:py-12 flex items-center justify-center">
        <div className="aspect-w-4 aspect-h-3 flex items-center justify-center">
          <img src="/recovery-room.jpg" alt="Recovery room sauna"></img>
        </div>
      </div>
      <div className="col-span-1 p-8 text-center lg:text-left lg:py-12 w-full lg:w-4/5 justify-self-center">
        <h5 className="text-2xl lg:text-3xl mb-5">Recovery Room</h5>
        <p>Hyr en stund för dig själv i vårat recovery room!</p>
        <br/>
        <p>Rummet är utrustat med infraröd bastu, ljusterapi, massagepistol, compression boots, 
          foamroller och fler redskap för att maximera din återhämtning och öka din prestation.</p>
        <br/>
        <p>Infraröda bastun har en dokumenterad positiv effekt på värk och rörlighet 
          i muskulatur och leder samt påskyndar återhämtning.</p>
        <br/>
        <p>Den är också känd för att reducera stress, starka immunförsvar, förbättra sömn, 
          ge ökad blodcirkulation som stimulerar kollageproduktionen, detoxa samt öka din förbränning.</p>
      </div>
    </div>
  )
}