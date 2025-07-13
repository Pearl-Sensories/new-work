export default function Home() {
  return (
    <div className="min-h-[400vh] border-50 border-[#566459] p-8 ">
      <div className="flex flex-col items-center justify-center h-screen -mt-20">
        <div className="w-full max-w-6xl flex justify-between px-4 text-[#0e2010] font-extrabold">
          {/* P */}
          <div className="flex flex-col items-center">
            <span className="text-[14vw] leading-none mt-2">P</span>
          </div>

          {/* E */}
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-600 mb-2">
              Front-End <br /> Developer
            </span>
            <span className="text-[14vw] leading-none -mt-10">E</span>
          </div>

          {/* A */}
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-600 mb-2">and</span>
            <span className="text-[14vw] leading-none -mt-5">A</span>
          </div>

          {/* R */}
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-600 mb-2">
              Video <br /> Editor
            </span>
            <span className="text-[14vw] leading-none -mt-10">R</span>
          </div>

          {/* L */}
          <div className="flex flex-col items-center">
            <span className="text-[14vw] leading-none mt-2">L</span>
          </div>
        </div>
      </div>

      {/* Image + QR Code Block */}
      <div className="w-full max-w-400 bg-[#0e2010] rounded-xl p-6 flex flex-col md:flex-row items-center justify-center gap-6 h-200 -mt-60">
        {/* Placeholder image (replace with your own) */}
        <img
          src="/dp.png"
          alt="Profile"
          className="w-180 h-180 object-cover rounded-lg shadow-lg"
        />

        {/* QR Code image */}
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://yourwebsite.com"
          alt="QR Code"
          className="w-30 h-30 object-contain bg-white p-2 rounded-lg shadow-md"
        />
      </div>

      {/* About Me Section */}
      <div className=" flex w-full max-w-3xl text-left mt-20 ml-20">
        <span>
          <h2 className="text-4xl font-bold text-[#355E3B] mb-4">About Me</h2>

          <p className="text-gray-700 text-sm leading-relaxed w-1/2 mb-6">
            I’m a passionate front-end developer who enjoys creating beautiful,
            responsive websites with clean and intuitive user interfaces.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed w-1/2">
            I’m also a creative video editor who loves telling compelling
            stories through visuals, cuts, and sound.
          </p>
        </span>
        <a
          href="/Resume-2.pdf"
          download
          className="inline-block w-full sm:w-auto h-20 px-6 py-3 bg-[#355E3B] text-white text-md mt-20 rounded-2xl animate-bounce text-center"
        >
          Download Resume
        </a>
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-6 text-xl text-[#0e2010] ml-180">
        <span className="text-center md:text-left">
          <span className="text-xl font-bold block">Junior Web Developer</span>
          (front-end)
        </span>
        |
        <span className="text-center md:text-left">
          <span className="text-xl font-bold block">About 10</span>
          projects completed
        </span>
        |
        <span className="text-center md:text-left">
          <span className="text-xl font-bold block">Video Editing</span>1 year
          of experience
        </span>
      </div>

      <div className="w-full flex justify-center mt-10">
        <hr className="w-full md:w-[90%] border-t-2 border-[#355E3B]" />
      </div>

      {/* Recent Work Section */}
      <div className="w-full max-w-3xl text-left mt-16 ml-20">
        <h2 className="text-4xl font-bold text-[#355E3B] mb-2">Recent Work</h2>

        <p className="text-md text-gray-600 w-full md:w-1/2 leading-relaxed">
          Whether you need a striking portfolio, a functional website, or a
          custom solution, I'm here to deliver results that align with your
          vision.
        </p>
      </div>

      {/* Project Showcase Section */}
      <div className="w-full max-w-6xl mx-auto mt-16">
        <div className="flex flex-wrap justify-center gap-6">
          {/* Desktop-style project */}
          <div className="bg-gray-100 rounded-xl shadow-lg p-2 w-full md:w-[48%] lg:w-[60%]">
            <img
              src="/image1.png"
              alt="Project 1"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-center text-sm mt-2 text-gray-600">
              Website (Desktop View)
            </p>
          </div>

          {/* Mobile-style projects */}
          <div className="flex gap-6 md:w-[48%] lg:w-[38%]">
            <div className="bg-gray-100 rounded-2xl shadow-md p-2 w-600 mx-auto">
              <img
                src="/image2.png"
                alt="Project 2"
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-gray-100 rounded-2xl shadow-md p-2 w-600 mx-auto">
              <img
                src="/image3.png"
                alt="Project 3"
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-gray-100 rounded-2xl shadow-md p-2 w-600 mx-auto">
              <img
                src="/image4.png"
                alt="Project 4"
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Showcase Section */}
      <div className="w-full max-w-6xl mx-auto mt-16 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Video 1 */}
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video controls className="w-full h-full object-cover">
                <source src="/inshotvid-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center text-sm mt-2 text-gray-600">
              Project Demo 1
            </p>
          </div>

          {/* Video 2 */}
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video controls className="w-full h-full object-cover">
                <source src="/inshotvid-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center text-sm mt-2 text-gray-600">
              Project Demo 2
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center text-center mt-24 px-4">
        <p className="text-xl md:text-xl font-semibold text-gray-600 max-w-3xl leading-relaxed">
          I design and build beautiful, user-friendly web experiences — and
          bring stories to life through creative video editing. Let’s create
          something exceptional together.
        </p>
      </div>

      <div className="w-full flex justify-center mt-10">
        <hr className="w-full md:w-[90%] border-t-2 border-[#355E3B]" />
      </div>

      {/* My Service Section */}
      <div className="w-full max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold text-[#355E3B] mb-4">My Service</h2>

        <p className="text-sm text-gray-700 w-full md:w-1/2 leading-relaxed">
          I provide responsive front-end development using modern tools like
          React, Next.Js and Tailwind CSS, as well as creative video editing
          services for personal brands, businesses, and content creators —
          blending functionality with visual storytelling to bring your ideas to
          life.
        </p>
      </div>

      {/* Skills Section */}
      <div className="w-full max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-xl font-bold text-[#355E3B] mb-4">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Video Editing",
          ].map((skill, i) => (
            <div
              key={i}
              className="bg-[#f3f4f6] rounded-xl p-6 flex items-center justify-center text-center text-[#355E3B] font-semibold text-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Stay Updated Section */}
<div className="w-full max-w-5xl mx-auto mt-24 px-6 py-12 bg-[#F9F9F6] rounded-2xl shadow-lg text-center">
  <h2 className="text-2xl font-bold text-[#355E3B] mb-6">
    Stay Updated on My Progress
  </h2>

  <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
    My journey in tech is an ever-evolving one — from crafting seamless user experiences with code to shaping compelling visual stories through video. Right now, I’m building a <span className="font-semibold text-[#355E3B]">personal, innovative app</span> that brings together everything I’ve learned so far and pushes me to explore new levels of creativity and technical depth.
    <br /><br />
    As I continue to grow and improve as a <span className="font-semibold">front-end developer</span> and <span className="font-semibold">digital creator</span>, I’m committed to sharing my progress, insights, and milestones. This is only the beginning — and I’d love for you to be part of the journey.
  </p>
</div>

{/* Redesigned Footer Section */}
<footer className="w-full bg-[#4c634f] text-white px-6 pt-12 pb-6 mt-24 relative overflow-hidden">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 z-10 relative">

    {/* Contact Info */}
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-semibold">Let's Connect</h3>
      <a
        href="mailto:pearlsensory01@gmail.com"
        className="text-sm sm:text-base text-gray-200 hover:underline"
      >
        pearlsensory01@gmail.com
      </a>
      <p className="text-sm text-gray-300 max-w-sm">
        Available for freelance projects, collaborations, and creative problem solving.
      </p>
    </div>

    {/* Optional Links */}
    <div className="flex flex-col gap-2 text-sm text-gray-300">
          <a
        href="https://www.linkedin.com/in/pearl-sensory"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        LinkedIn
      </a>

          <a
        href="https://www.github.com/pearl-sensories"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        Github
      </a>
      <a href="#" className="hover:text-white">Resume</a>
    </div>
  </div>

  {/* Big name at bottom corner */}
  <div className="absolute bottom-0 left-0 w-full text-center md:text-right pr-4">
    <h1 className="text-[12vw] md:text-[7vw] font-extrabold text-white opacity-10 tracking-widest select-none">
      Pearl
    </h1>
  </div>
</footer>

    </div>
  );
}
