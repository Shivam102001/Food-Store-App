import React from 'react'

const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 mt-10">
      <h2 className="text-3xl font-semibold text-slate-700 mb-6 text-center">About Us</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-slate-700 mb-4">Our Story</h3>
        <p className="text-slate-600 leading-relaxed">
          Welcome to our restaurant! We started our journey with a passion for great food and a love for bringing people together. Our chefs use the freshest ingredients to create delicious dishes that are both traditional and innovative. Whether you are here for a casual meal or a special occasion, we are committed to making your dining experience memorable.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-slate-700 mb-4">Our Mission</h3>
        <p className="text-slate-600 leading-relaxed">
          Our mission is to provide our guests with an exceptional dining experience that goes beyond great food. We strive to create a welcoming atmosphere where our guests can relax, enjoy, and connect. We are dedicated to sourcing the finest ingredients and delivering the highest level of service.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-slate-700 mb-4">Meet Our Team</h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          Our team is made up of passionate and talented individuals who are dedicated to making your visit special. From our skilled chefs to our friendly waitstaff, everyone at our restaurant is committed to providing you with a wonderful dining experience.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-slate-100 rounded-lg shadow-sm">
            <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
            <h4 className="text-lg font-semibold text-slate-700">Ashok Kumar</h4>
            <p className="text-slate-600">Head Chef</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-slate-100 rounded-lg shadow-sm">
            <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
            <h4 className="text-lg font-semibold text-slate-700">Sanjay rathor</h4>
            <p className="text-slate-600">Sous Chef</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-slate-100 rounded-lg shadow-sm">
            <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
            <h4 className="text-lg font-semibold text-slate-700">Akansha Gupta</h4>
            <p className="text-slate-600">Restaurant Manager</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-slate-100 rounded-lg shadow-sm">
            <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
            <h4 className="text-lg font-semibold text-slate-700">Manish Bansal</h4>
            <p className="text-slate-600">Waitstaff</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
