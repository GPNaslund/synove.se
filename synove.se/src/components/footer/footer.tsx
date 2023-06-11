export default function Footer() {
  return (
    <div className="w-full p-16 flex flex-col justify-center text-center bg-white">
    <div>
      <p className="font-bold mb-3">Kontakta mig</p>
      <p>Lidingövägen 1</p>
      <p>114 33, Stockholm</p>
      <p>Mail: hej@synove.se</p>
      <p>Tel: 070-794 38 73</p>
    </div>
    <div className="mt-8 grid grid-cols-3 justify-center">
      <a href="https://www.instagram.com/">@synove_asplund</a>
      <a href="https://www.instagram.com/">@recoveryroom</a>
      <a href="https://www.instagram.com/">@proaktividrottscenter</a>
    </div>
  </div>
  )
}