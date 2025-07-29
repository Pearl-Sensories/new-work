export default function Home() {
  return (
    <div className="min-h-fit bg-[#FAF9F6] px-4 sm:px-6 lg:px-8 pt-8">
      {/* Hero Section – PEARL */}
      <div className="flex flex-col items-center justify-center h-[80vh] sm:h-screen mt-[-6rem] sm:mt-[-8rem] px-4">
        <div className="grid grid-cols-5 gap-2 sm:gap-4 w-full max-w-5xl text-[#0e2010] font-extrabold text-center">
          {[
            { letter: "P", label: "" },
            { letter: "E", label: "Front-End\nDeveloper" },
            { letter: "A", label: "and" },
            { letter: "R", label: "Video\nEditor" },
            { letter: "L", label: "" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-end sm:justify-center">
              {item.label && (
                <span className="text-[9px] sm:text-sm text-gray-600 whitespace-pre-line mb-1 sm:mb-2">
                  {item.label}
                </span>
              )}
              <span className="leading-none" style={{ fontSize: "clamp(2.2rem, 7vw, 5rem)" }}>
                {item.letter}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Image + QR Code Block */}
      <div className="w-full max-w-md mx-auto bg-gradient-to-r from-[#0e2010] to-[#355E3B] rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-6 -mt-20 sm:-mt-28">
        <img
          src="/dp.png"
          alt="Profile"
          className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-[#355E3B] shadow-lg"
        />
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://yourwebsite.com"
          alt="QR Code"
          className="w-16 h-16 sm:w-24 sm:h-24 bg-white p-2 object-contain rounded-lg shadow-md"
        />
      </div>

      {/* About Me Section */}
      <div className="w-full max-w-3xl mx-auto mt-16 px-4 sm:px-6 md:px-8 text-left">
        <h2 className="text-4xl font-bold text-[#355E3B] mb-4">About Me</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          I’m a passionate front-end developer who enjoys creating beautiful, responsive websites with clean and intuitive user interfaces.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          I’m also a creative video editor who loves telling compelling stories through visuals, cuts, and sound.
        </p>
        <a
          href="/Resume-2.pdf"
          download
          className="inline-block bg-[#355E3B] hover:bg-[#2d4e2f] text-white px-6 py-3 rounded-2xl transition-colors animate-bounce"
        >
          Download Resume
        </a>
      </div>

      {/* Skills Overview */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm sm:text-base text-[#0e2010] px-4">
        <div className="text-center">
          <span className="block font-bold">Junior Web Developer</span>
          (front-end)
        </div>
        <span>|</span>
        <div className="text-center">
          <span className="block font-bold">About 10</span>
          projects completed
        </div>
        <span>|</span>
        <div className="text-center">
          <span className="block font-bold">Video Editing</span>
          1 year of experience
        </div>
      </div>

      <hr className="w-[90%] mx-auto mt-10 border-t-2 border-[#355E3B]" />

      {/* Recent Work */}
      <div className="max-w-3xl mx-auto mt-16 px-4">
        <h2 className="text-4xl font-bold text-[#355E3B] mb-2">Recent Work</h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Whether you need a striking portfolio, a functional website, or a custom solution, I'm here to deliver results that align with your vision.
        </p>
      </div>

      {/* Projects */}
      <div className="w-full max-w-6xl mx-auto mt-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F2F1EB] rounded-xl shadow-lg p-2">
            <img src="/image1.png" alt="Project 1" className="w-full h-auto rounded-lg" />
            <p className="text-center text-sm mt-2 text-gray-600">Website (Desktop View)</p>
          </div>
          {["/image2.png", "/image3.png", "/image4.png"].map((img, i) => (
            <div key={i} className="bg-[#F2F1EB] rounded-xl shadow-md p-2">
              <img src={img} alt={`Project ${i + 2}`} className="w-full h-auto rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Video Showcase */}
      <div className="w-full max-w-6xl mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((n) => (
            <div key={n}>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video controls className="w-full h-full object-cover">
                  <source src={`/inshotvid-${n}.mp4`} type="video/mp4" />
                </video>
              </div>
              <p className="text-center text-sm mt-2 text-gray-600">Project Demo {n}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="w-full text-center mt-24 px-4">
        <p className="text-xl font-semibold text-gray-600 max-w-3xl mx-auto leading-relaxed">
          I design and build beautiful, user-friendly web experiences — and bring stories to life through creative video editing. Let’s create something exceptional together.
        </p>
      </div>

      <hr className="w-[90%] mx-auto mt-10 border-t-2 border-[#355E3B]" />

      {/* Service */}
      <div className="w-full max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold text-[#355E3B] mb-4">My Service</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          I provide responsive front-end development using modern tools like React, Next.js and Tailwind CSS, as well as creative video editing services — blending functionality with visual storytelling.
        </p>
      </div>

      {/* Skills */}
      <div className="w-full max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-xl font-bold text-[#355E3B] mb-4">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Video Editing"].map((skill, i) => (
            <div
              key={i}
              className="bg-[#f3f4f6] rounded-xl p-6 flex items-center justify-center text-[#355E3B] font-semibold text-lg shadow-md hover:scale-105 active:scale-100 transition-transform"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Stay Updated */}
      <div className="w-full max-w-5xl mx-auto mt-24 px-6 py-12 bg-[#F2F1EB] rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-[#355E3B] mb-6">Stay Updated on My Progress</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          My journey in tech is ever-evolving — from crafting seamless user experiences to shaping visual stories. I’m currently building an <span className="font-semibold text-[#355E3B]">innovative app</span> combining creativity and code.
        </p>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#0e2010] text-white px-6 pt-12 pb-6 mt-24 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 flex-wrap">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold">Let's Connect</h3>
            <a href="mailto:pearlsensory01@gmail.com" className="text-sm text-gray-200 hover:underline">
              pearlsensory01@gmail.com
            </a>
            <p className="text-sm text-gray-300 max-w-sm">
              Available for freelance projects, collaborations, and creative problem solving.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-gray-300">
            <a href="https://www.linkedin.com/in/pearl-sensory" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href="https://www.github.com/pearl-sensories" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Github
            </a>
            <a href="/Resume-2.pdf" className="hover:text-white">
              Resume
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full text-center md:text-right pr-4">
          <h1 className="text-[12vw] md:text-[7vw] font-extrabold text-white opacity-10 tracking-widest select-none">Pearl</h1>
        </div>
      </footer>
    </div>
  );
}
