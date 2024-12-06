import React, { useState } from "react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-scroll";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu
  const blogData = [
    {
      title: "The Psychology of Friendships: What Makes a True Friend?",
      content: `
        Friendships are one of the most comforting parts of life. They’re the people who make you laugh until you cry, who stick around during your hardest moments, and who somehow make everything feel just a little bit easier. But what separates a true friend from just an acquaintance? What is it that makes some friendships so meaningful?
        
        At its core, true friendship is built on trust. Psychologists have found that trust is the foundation of any strong relationship. A true friend is someone you can confide in, knowing they’ll respect your secrets and always have your back. This trust creates a sense of safety, which is essential for a deep connection. Without it, relationships tend to stay surface-level.
        
        Then there’s empathy, which takes a friendship to the next level. Studies show that empathetic friends—those who genuinely try to understand how you feel—help lower your stress and boost your mental health. They don’t just listen to your problems; they feel them with you. This shared emotional experience is what makes you feel truly seen and understood. It’s no wonder psychologists say empathy is one of the strongest predictors of long-lasting friendships.
        
        Another key element is mutual support. Healthy friendships are a two-way street. True friends celebrate your wins as if they were their own and stand by you when things fall apart. Research from evolutionary psychology even suggests that humans are wired to form these supportive bonds because they help us survive and thrive. Back in our ancestors’ time, having a loyal “tribe” meant better protection and resources. Today, it means having people who make life’s ups and downs a little easier to navigate.
        
        Honesty also plays a huge role in what makes a friend real. A true friend isn’t afraid to tell you the truth, even when it’s hard to hear. But it’s not about being harsh—they do it out of love, to help you grow. Studies show that honest communication strengthens relationships because it builds deeper levels of trust and respect over time.
        
        Finally, acceptance is what ties everything together. A true friend loves you for who you are, not for who they want you to be. This unconditional acceptance creates a safe space where you can be your authentic self, quirks and all. Research has shown that these kinds of relationships have a direct impact on mental well-being, helping reduce feelings of loneliness and improving overall happiness.
        
        But not all friendships are healthy, and it’s important to recognize when one is one-sided or even toxic. If someone leaves you feeling drained, judged, or unimportant, it might be time to set boundaries. True friends lift you up—they don’t pull you down.
        
        So, who are the people in your life who make you feel safe, valued, and understood? Those are your true friends. Science proves that these relationships aren’t just good for your soul—they’re good for your health too. Hold onto them tight because, in a world full of fleeting connections, a true friend is something to be cherished.
      `,
      author: "Arshiya Razvi",
    },
    {
      title: "How Pop Culture Is Changing the Way We Talk About Mental Health?",
      content: `
        Ever heard a song or watched a scene in a movie and thought, Wait, are they spying on me? It’s like someone cracked open your brain, stole your thoughts, and put them out there for the world to see. That’s the beauty of pop culture—it can make the most personal things feel universal.
        
        In the past, mental health wasn’t exactly a dinner table topic. It was more like that distant cousin no one talks about. But now, pop culture has kicked down the door and said, “We’re talking about this, whether you like it or not.” Shows like BoJack Horseman didn’t just dip their toes into the mental health conversation; they cannonballed right in. It wasn’t polished or sugar-coated—it was messy, painful, and brutally honest. And somehow, that made it comforting.
        
        But let’s not forget the musicians. Billie Eilish singing about the weight of her thoughts, Kendrick Lamar rapping about battling inner demons—it’s like they’re putting their struggles into words so we don’t have to. And then there’s Logic’s 1-800-273-8255, which didn’t just top charts; it saved lives. Think about that for a second—a song saving lives. If that’s not the coolest superpower, I don’t know what is.
        
        It’s not all deep and heavy, though. Pop culture also brings humor into the mix. Ever shared a meme about anxiety that was so painfully accurate it made you laugh and cry at the same time? Yeah, same. Those little moments of humor remind us that we’re not alone—that it’s okay to laugh at the things that scare us.
        
        And then there’s TikTok. Yes, TikTok. Where else can you find someone breaking down their therapy journey in a 60-second video with captions like, “Why my therapist is tired of me”? It’s relatable, it’s funny, and, more importantly, it’s normalizing conversations about mental health for a whole new generation.
        
        Of course, pop culture doesn’t always nail it. Sometimes it gets things wrong—oversimplifies, overdramatizes, or forgets the nuances. But even when it stumbles, it’s doing something important. It’s starting conversations. And those conversations? They’re game-changers.
        
        So, here’s a question for you: What’s the song, show, or movie that made you feel seen? The one that made you think, Wow, it’s not just me. Whatever it is, hold onto it. Share it. Because maybe your story, or that piece of pop culture, will be the thing that helps someone else feel a little less alone.
        
        And hey, if we’re being honest, isn’t that what we all want? To feel like someone, somewhere, gets it?
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
  const testimonials = [
    {
      quote: `800 UNBLURRED has been a lifesaver for my IB journey. The tips on studying and organization made my year so much easier. It’s like having a personal guide through the chaos of high school.`,
      author: "Rayan Dekkaki",
      rating: 5,
    },
    {
      quote: `I’ve discovered new study methods and feel way more organized. Thanks, to @800.unblurred.`,
      author: "Asma AlZaabi",
      rating: 5,
    },
    {
      quote: `The support from @800.unblurred goes beyond just posts. Saira and Arshiya even scheduled a Zoom call with me to discuss staying motivated and focused, sharing tips they’re currently using. It’s helped me so much—I’m now able to manage my mental health better and balance my studies without feeling overwhelmed. I feel more in control and motivated to prioritize both my well-being and academics!`,
      author: "Marina Amusu",
      rating: 5,
    },
    {
      quote: `Can’t believe how much I’ve learned from this account. Everything from study hacks to motivational quotes keeps me going, especially during exam season. If you're a student, follow now!`,
      author: "Vinay Goenka",
      rating: 5,
    },
    {
      quote: `I didn’t know I needed @800.unblurred until I found it. Their resources and reminders on mental health are exactly what stressed-out students need. Thanks for keeping it real.`,
      author: "Owais Mian",
      rating: 5,
    },
    {
      quote: `Honestly, this account has transformed my approach to studying. I’m finally feeling like I can stay on top of my workload without burning out. 10/10 would recommend to any student.`,
      author: "Zoya Zaidi",
      rating: 5,
    },
    {
      quote: `The posts about the best colleges and career advice have been so helpful in my final year. This account has become a one-stop shop for all things school and motivation!`,
      author: "Aanya Thakkar",
      rating: 5,
    },
    {
      quote: `The guides on helpful apps and websites for students are incredibly useful. I’ve discovered tools that have made studying and organizing my notes so much easier. This account is a must-follow for anyone in school.`,
      author: "Zainab Jeng",
      rating: 5,
    },
  ];

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
          actionable insights, mental health tips, and empowering advice
          tailored for their unique journeys.
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
            {/* Team Member 1 */}
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
              teenagers as they navigate through high school and beyond. Our
              mission is to help teens better understand themselves and their
              challenges by utilizing psychologically-proven tips and tricks.
              Through engaging social media content, we share insights on school
              life, mental health, world news, and pop culture. Additionally, we
              offer one-on-one support to help our peers feel heard, understood,
              and empowered to thrive, regardless of the setbacks they might
              face.
            </p>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="bg-primary py-16 px-8 relative z-0">
        <div className="max-w-7xl mx-auto text-center z-0">
          <h2 className="text-3xl font-bold text-white mb-8">Our Blogs</h2>
          {/* Swiper Carousel */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            className="blog-carousel"
          >
            {blogData.map((blog, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between  min-h-[230px]">
                  <h3 className="text-xl font-bold text-primary">
                    {blog.title}
                  </h3>
                  <div className="text-gray-700 mt-4 text-left flex-grow">
                    {/* Displaying content limited to 150 characters */}
                    <p className="mb-4">
                      {blog.content.slice(0, 150)}
                      {blog.content.length > 150 && "..."}
                    </p>
                  </div>

                  <button
                    onClick={() => openModal(blog)}
                    className="text-blue-500 mt-2"
                  >
                    Read More
                  </button>
                  <p className="text-sm text-gray-500 mt-4">By {blog.author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[9999]"
            onClick={closeModal}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-md max-w-4xl w-full max-h-[80vh] overflow-y-auto relative z-[9999]"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-primary">
                {selectedBlog.title}
              </h3>
              <div className="text-gray-700 mt-4">
                {/* Displaying content with paragraphs in modal */}
                {selectedBlog.content.split("\n").map((para, paraIndex) => (
                  <p key={paraIndex} className="mb-4">
                    {para}
                  </p>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                By {selectedBlog.author}
              </p>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Social Proof Section */}

      <section className="bg-secondary py-16 px-8 z-0 !important">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Testimonials
          </h2>
          {!isModalOpen ? (
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              pagination={false} // Remove pagination control
              navigation={false} // Remove navigation arrows if you don't need them
              className="z-10"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center relative">
                    {/* Title */}
                    <p className="text-lg font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      Testimonial
                    </p>
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    {/* Quote */}
                    <p className="text-gray-800 italic mb-6">
                      &#34;{testimonial.quote}&#34;
                    </p>
                    {/* Author */}
                    <p className="font-medium text-gray-600">
                      — {testimonial.author}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <></>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-primary text-white py-10">
        <div className="container mx-auto grid md:grid-cols-3 gap-6 px-6">
          {/* Social Media */}
          <div>
            <h4 className="font-bold">Contact</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:800.unblurred@gmail.com"
                  className="hover:underline"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/800.unblurred"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Insta
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@800unblurred"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="text-center">
            <div className="text-2xl font-bold">
              <img
                src="logo.jpg"
                alt="Logo"
                className="h-16 w-16 object-cover rounded-full mr-2"
              />
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold">Reach out to us!</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:talk2saira@gmail.com"
                  className="hover:underline"
                >
                  Saira Kalra
                </a>
              </li>
              <li>
                <a
                  href="mailto:arshiyabilquisrazvi2007@gmail.com"
                  className="hover:underline"
                >
                  Arshiya Razvi
                </a>
              </li>
              <li>
                <a
                  href="mailto:ikrishagario@gmail.com"
                  className="hover:underline"
                >
                  Krish Valecha
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
