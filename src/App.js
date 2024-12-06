import React, { useState } from "react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-scroll";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu

  const blogData = [
    {
      title: "The Psychology of Friendships: What Makes a True Friend?",
      content: `
        Friendships are one of the most comforting parts of life...
      `,
      author: "Arshiya Razvi",
    },
    {
      title: "How Pop Culture Is Changing the Way We Talk About Mental Health?",
      content: `
        Ever heard a song or watched a scene in a movie...
      `,
      author: "Saira Kalra",
    },
  ];

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-secondary">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">
            <img
              src="logo.jpg"
              alt="Logo"
              className="h-16 w-16 object-cover rounded-full mr-2"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 text-primary">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="blogs"
                  smooth={true}
                  duration={500}
                  className="hover:underline"
                >
                  Our Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="footer"
                  smooth={true}
                  duration={500}
                  className="hover:underline"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger Menu */}
          <button
            className="block lg:hidden text-primary"
            onClick={() => setIsMenuOpen(true)} // Open menu
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white w-3/4 p-6 rounded-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-primary"
              onClick={() => setIsMenuOpen(false)} // Close menu
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Navigation */}
            <nav className="flex flex-col items-start space-y-6 text-primary">
              <ul className="space-y-6 text-left">
                {" "}
                {/* Left-align the text */}
                <li>
                  <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="hover:underline"
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="hover:underline"
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="blogs"
                    smooth={true}
                    duration={500}
                    className="hover:underline"
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  >
                    Our Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="footer"
                    smooth={true}
                    duration={500}
                    className="hover:underline"
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="bg-primary text-white text-center py-20">
        <h1 className="text-4xl font-bold">
          Empowering Teens to Thrive Beyond Challenges
        </h1>
        <p className="text-lg mt-4">
          Supporting teenagers as they navigate high school and life by sharing
          actionable insights...
        </p>
        <button
          className="mt-6 px-6 py-2 bg-secondary text-primary font-bold rounded hover:bg-white hover:text-secondary border border-primary"
          onClick={() =>
            window.open("https://www.instagram.com/800.unblurred", "_blank")
          }
        >
          Learn More About Us
        </button>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full py-16 px-6 bg-secondary">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Team Members */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-white text-center p-4 rounded-lg shadow-md border border-primary">
              <div className="bg-gray-300 h-40 w-full rounded-md mb-4">
                <img
                  src="/arshiyaRazvi.jpeg"
                  alt="Arshiya Razvi"
                  className="h-40 w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-primary">Arshiya Razvi</h3>
              <p className="text-gray-700">Co-Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white text-center p-4 rounded-lg shadow-md border border-primary">
              <div className="bg-gray-300 h-40 w-full rounded-md mb-4">
                <img
                  src="/krishValecha.JPG"
                  alt="Krish Valecha"
                  className="h-40 w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-primary">Krish Valecha</h3>
              <p className="text-gray-700">Lead Writer / Head of Operations</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white text-center p-4 rounded-lg shadow-md border border-primary">
              <div className="bg-gray-300 h-40 w-full rounded-md mb-4">
                <img
                  src="/sairaKalra.jpeg"
                  alt="Saira Kalra"
                  className="h-40 w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-primary">Saira Kalra</h3>
              <p className="text-gray-700">Co-Founder</p>
            </div>
          </div>

          {/* About Us Text */}
          <div>
            <h2 className="text-3xl font-bold text-primary">About Us</h2>
            <p className="text-gray-600 mt-4">
              We are educational content creators passionate about supporting
              teenagers...
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="w-full py-16 bg-white">
        <h2 className="text-4xl font-bold text-primary text-center">
          Our Blogs
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl cursor-pointer"
              onClick={() => openModal(blog)}
            >
              <h3 className="text-2xl font-bold text-primary">{blog.title}</h3>
              <p className="text-gray-700 mt-4">
                {blog.content.substring(0, 150)}...
              </p>
              <p className="text-gray-500 mt-2">{blog.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer id="footer" className="bg-secondary py-16 text-center text-white">
        <p>&copy; 2024 800 Unblurred</p>
      </footer>

      {/* Modal for blog detail */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white w-3/4 p-6 rounded-lg relative">
            <button
              className="absolute top-4 right-4 text-primary"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-primary">
              {selectedBlog.title}
            </h3>
            <p className="text-gray-700 mt-4">{selectedBlog.content}</p>
            <p className="text-gray-500 mt-2">
              Written by {selectedBlog.author}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
