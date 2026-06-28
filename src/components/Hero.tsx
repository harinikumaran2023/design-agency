import Image from "next/image";
import { Rocket, FolderOpen } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-36 pb-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white"
    >
      {/* Animated Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-glow"></div>

      <div
        className="absolute top-40 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-glow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 animate-glow"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <span className="inline-block bg-indigo-500/20 border border-indigo-400 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium">
            🚀 Creative Design Agency
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
            Turning
            <span className="text-cyan-400"> Ideas </span>
            Into
            <br />
            Stunning Digital
            <span className="text-pink-400"> Experiences</span>
          </h1>

          <p className="mt-8 text-lg text-gray-300 max-w-xl leading-8">
            We craft modern websites, unforgettable brands,
            engaging digital products that help businesses grow,
            inspire customers, and stand out from the competition.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#contact"
              className="group flex items-center gap-3 bg-cyan-400 text-black px-7 py-4 rounded-xl font-semibold shadow-xl hover:bg-cyan-300 hover:scale-105 transition-all duration-300"
            >
              <Rocket
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
              Start Your Project
            </a>

            <a
              href="#portfolio"
              className="group flex items-center gap-3 border-2 border-gray-400 px-7 py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300"
            >
              <FolderOpen size={20} />
              Explore Portfolio
            </a>

          </div>
                    {/* Why Choose Us */}
          <div className="mt-10 grid grid-cols-2 gap-4 text-gray-200">

            <div className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✔</span>
              <span>Responsive Websites</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✔</span>
              <span>Modern UI/UX Design</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✔</span>
              <span>Cloud Solutions</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✔</span>
              <span>Cyber Security</span>
            </div>

          </div>

          {/* Company Statistics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center hover:bg-white/20 transition duration-300">
              <h3 className="text-3xl font-bold text-cyan-400">120+</h3>
              <p className="text-sm text-gray-300 mt-2">
                Projects
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center hover:bg-white/20 transition duration-300">
              <h3 className="text-3xl font-bold text-pink-400">85+</h3>
              <p className="text-sm text-gray-300 mt-2">
                Clients
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center hover:bg-white/20 transition duration-300">
              <h3 className="text-3xl font-bold text-yellow-400">15+</h3>
              <p className="text-sm text-gray-300 mt-2">
                Countries
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center hover:bg-white/20 transition duration-300">
              <h3 className="text-3xl font-bold text-green-400">5★</h3>
              <p className="text-sm text-gray-300 mt-2">
                Rating
              </p>
            </div>

          </div>

        </div>
                {/* RIGHT CONTENT */}
        <div className="relative flex justify-center">

          {/* Decorative Glow */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-glow"></div>

          <div
            className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-glow"
            style={{ animationDelay: "3s" }}
          ></div>

          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
            alt="Creative Team"
            width={700}
            height={550}
            priority
            className="rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500 w-full h-auto border border-white/10"
          />

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">

        <span className="text-gray-300 text-sm mb-2">
          Scroll Down
        </span>

        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
        </div>

      </div>

    </section>
  );
}