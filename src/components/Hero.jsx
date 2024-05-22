import React from 'react';

// import './Hero.css';

const Hero = ({ toggleNewsletter }) => (
    <div className=' text-black mt-20 h-screen'>
        <div className="relative text-black">
            <img src="https://gyaanarth.com/wp-content/uploads/2021/09/Presidency-University-Bangalore1.jpg" alt="Presidency University" className="w-full" />
            <div className="absolute top-4 left-28 text-white p-6 md:p-12">
                <h1 className="text-4xl md:text-6xl font-bold hidden md:block text-white bg-slate-600 p-2 rounded-lg  backdrop-blur-sm">Presidency University</h1>
                {/* <h1 className="text-2xl md:text-4xl font-bold md:hidden backdrop-blur-sm">Presidency University</h1> */}
                {/* <h2 className="text-2xl md:text-4xl text-bla text-black backdrop-blur-sm">Be the Best!</h2> */}
            </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-4 grayscale">
            {/* Add your product cards here */}
        </div>
    </div>
);

export default Hero;
