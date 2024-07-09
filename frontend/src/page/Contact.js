import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 mt-10">
    <h2 className="text-3xl font-semibold text-slate-700 mb-6 text-center">Contact Us</h2>
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-lg font-medium text-slate-700 mb-2">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>
      <div>
        <label className="block text-lg font-medium text-slate-700 mb-2">Email</label>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>
      <div>
        <label className="block text-lg font-medium text-slate-700 mb-2">Message</label>
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-yellow-500 py-3 rounded-lg hover:bg-yellow-600 font-semibold text-white transition duration-200"
      >
        Send Message
      </button>
    </form>
  </div>
  );
};

export default Contact;
