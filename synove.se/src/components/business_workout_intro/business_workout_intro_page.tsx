export default function BusinessWorkoutIntroPage() {
  return (
    <div className="w-full grid grid-cols-1 bg-[url('/business-workout-banner.jpg')] bg-cover bg-center bg-local">
      <div className=" text-white m-36 px-5 sm:px-32 w-full lg:w-3/4 text-center lg:text-right justify-self-center lg:justify-self-end flex flex-col justify-center">
        <h5 className="text-2xl sm:text-4xl md:text-5xl">FÖRETAGSTRÄNING</h5>
        <br/>
        <p className="text-l lg:pl-48">Friskvård och personalvård för ditt företag!
          Tillsammans skapar vi rörelsesglädje och skapar en bra rutin för dina anställda.
          Träningen lägger vi upp efter era önskemål och anpassas så att alla kan vara med oavsätt träningsbakgrund.
          Vi kan träna i stora och fräscha lokaler inne på Stockholm Stadion, utomhus eller på plats hos er beroende på vad ni önskar.</p>
      </div>
    </div>
  )
}