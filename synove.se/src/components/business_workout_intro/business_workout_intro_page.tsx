export default function BusinessWorkoutIntroPage() {
  return (
    <div className="w-full grid grid-cols-1 bg-[url('/business-workout-banner.jpg')] bg-cover bg-center bg-local">
      <div className=" text-white p-28 w-full lg:w-3/4 justify-self-center lg:justify-self-end flex flex-col justify-center">
        <h5 className="text-3xl sm:text-4xl md:text-5xl text-center">FÖRETAGSTRÄNING</h5>
        <br/>
        <p className="text-xl text-center">Friskvård och personalvård för ditt företag!
          Tillsammans skapar vi rörelsesglädje och skapar en bra rutin för dina anställda.
          Träningen lägger vi upp efter era önskemål och anpassas så att alla kan vara med oavsätt träningsbakgrund.
          Vi kan träna i stora och fräscha lokaler inne på Stockholm Stadion, utomhus eller på plats hos er beroende på vad ni önskar.</p>
      </div>
    </div>
  )
}