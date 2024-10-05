export default function Main() {
  return (
    <div className="bg-backscreen">
      <div className="relative w-full h-[650px] overflow-hidden ">
        <video
          src="https://esportsworldcup.com/assets/04_Gold_Exploration_01_4_c9e364c783.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 ml-10 mt-8 flex gap-1 ">
          <img src="/newlogo.png" alt="Logo" className="w-16 h-16 m-2" />
          <img src="/newName.png" alt="Logo" className="h-20" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-yellow-400">
            Welcome to Esports World
          </h1>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-12 text-red1">
            GamerzBase
          </h1>
        </div>
      </div>

      <div className="text-1xl md:text-xl font-bold text-line flex justify-center p-4">
        At GamerBase, whether you're a rising star or an established pro, our
        platform is designed to help you achieve greatness. Step into the arena,
        compete for glory, and become a part of the ultimate gaming community!
      </div>
    </div>
  );
}
