const Hero = () => {
  return (
    <div className="bg-[#f7f8f9] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-green-100 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Find Everything Near You
            </h2>

            <p className="text-gray-700 text-lg">
              Buy and sell products easily like OLX.
            </p>
          </div>

          <img
            src="https://i.imgur.com/WbQnbas.png"
            alt="banner"
            className="w-[300px] mt-6 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;