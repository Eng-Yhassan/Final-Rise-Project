import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Discover Your <span className="text-yellow-500">Next</span> <br />
            Favorite <span className="text-yellow-600">Book</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Explore thousands of titles across genres.  
            Dive into stories, knowledge, and inspiration.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-yellow-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600">
              Shop Now
            </button>
            <button className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600">
              Browse Categories
            </button>
          </div>

          {/* Features */}
          <div className="mt-8 flex gap-10">
            <div className="flex flex-col items-center text-gray-700">
              <i className="fa-solid fa-book-open text-2xl text-yellow-500"></i>
              <p className="mt-2 text-sm">New Releases</p>
            </div>
            <div className="flex flex-col items-center text-gray-700">
              <i className="fa-solid fa-star text-2xl text-yellow-500"></i>
              <p className="mt-2 text-sm">Top Rated</p>
            </div>
            <div className="flex flex-col items-center text-gray-700">
              <i className="fa-solid fa-truck-fast text-2xl text-yellow-500"></i>
              <p className="mt-2 text-sm">Fast Delivery</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center">
          <img
            src="https://via.placeholder.com/350x350.png"
            alt="Book Lover"
            className="rounded-full shadow-lg"
          />

          {/* Small Tags Around Image */}
          <div className="absolute top-4 right-4 bg-white shadow-md px-3 py-1 rounded-md text-sm">
            Discounts <span className="text-green-500">Up to 50%</span>
          </div>
          <div className="absolute left-0 top-1/3 bg-white shadow-md px-3 py-1 rounded-md text-sm">
            Genres <span className="text-yellow-500">20+</span>
          </div>
          <div className="absolute bottom-6 right-0 bg-white shadow-md px-3 py-1 rounded-md text-sm">
            Orders <span className="text-blue-500">1k+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
