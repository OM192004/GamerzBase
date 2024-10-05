export default function GameCard() {
  return (
    <div className="w-64 h-100 m-4 rounded-lg overflow-hidden shadow-lg hover:scale-102">
      {/* Header with logo */}
      <div className="bg-shade text-white p-1 flex items-center ">
        <img
          src="data:image/png;base64,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"
          alt="EA Sports Logo"
          className="h-8 mr-2"
        />
        <span className="font-bold text-lg">VALORANT</span>
      </div>

      {/* Image Section with Centered Title */}

      <div>
        <div className="relative h-full overflow-hidden ">
          <img
            src="https://w0.peakpx.com/wallpaper/11/443/HD-wallpaper-jett-games-riot-games-valorant.jpg"
            alt="VALORANT Image"
            className="w-full h-full object-cover"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-line text-4xl font-bold bg-black bg-opacity-10 hover">
            VALORANT
          </h1>
        </div>

        {/* <div className="absolute inset-0 bg-red-800 opacity-0 transition-opacity duration-700 ease-in-out hover:opacity-30"></div> */}
      </div>
    </div>
  );
}
