import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Monitor,
  Palette,
  Code,
} from "lucide-react";

 export default function MobileAppPage() {
  return (
    <main className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="bg-white/20 px-4 py-2 rounded-full">
              🌐 Professional Mobile App Design
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
              Build Amazing Mobile Apps
              <br />
             For Android & iOS
              </h1>

            <p className="mt-8 text-lg text-gray-200 leading-8">
             We design and develop modern Android and iOS applications
            that deliver exceptional user experiences, high performance,
             and secure functionality. From startups to enterprises, we
            create mobile apps that help businesses grow, engage customers,
            and stay ahead in the digital world.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/#contact"
                className="bg-white text-indigo-700 px-7 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Start Your Project
              </Link>

              <Link
                href="/"
                className="border border-white px-7 py-4 rounded-xl hover:bg-white hover:text-indigo-700 transition"
              >
                Back Home
              </Link>

            </div>

          </div>

          <div>

            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
              alt="Mobile App Design"
              width={700}
              height={500}
              className="rounded-3xl shadow-2xl w-full h-auto"
            />

          </div>

        </div>

      </section>

      {/* About Section */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700"
            alt="Research Team"
            width={650}
            height={500}
            className="rounded-3xl shadow-xl"
          />

          <div>

            <h2 className="text-4xl font-bold">
             Research Driven Mobile App Development
            </h2>
            <p className="mt-6 text-gray-600 leading-8">
              Every successful mobile application begins with understanding
            your business goals, target users, and market trends.
            Our research-driven approach helps us create intuitive,
            secure, and high-performance Android and iOS applications
             that deliver exceptional user experiences and business value.

            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" />
                User Experience Research
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" />
                Responsive Mobile Design
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" />
                SEO Friendly Development
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" />
                Fast Loading Performance
              </div>

            </div>

          </div>

        </div>

      </section>
            {/* What We Offer */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            What We Offer
          </h2>

          <p className="text-center text-gray-500 mt-4 max-w-3xl mx-auto">
            We provide complete website design and development services for
            startups, businesses, and enterprises.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">
              <Monitor size={45} className="text-indigo-600" />

              <h3 className="text-2xl font-bold mt-6">
                Business Websites
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Professional websites designed to build trust and convert
                visitors into customers.
              </p>

              <ul className="mt-6 space-y-2 text-gray-700">
                <li>✔ Company Websites</li>
                <li>✔ Portfolio Websites</li>
                <li>✔ Landing Pages</li>
                <li>✔ SEO Friendly</li>
              </ul>

            </div>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">

              <Palette size={45} className="text-pink-600" />

              <h3 className="text-2xl font-bold mt-6">
                UI / UX Design
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Beautiful interfaces focused on usability and customer
                experience.
              </p>

              <ul className="mt-6 space-y-2 text-gray-700">
                <li>✔ Wireframes</li>
                <li>✔ Prototypes</li>
                <li>✔ Mobile UI</li>
                <li>✔ Dashboard Design</li>
              </ul>

            </div>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">

              <Code size={45} className="text-green-600" />

              <h3 className="text-2xl font-bold mt-6">
                Custom Development
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Secure, scalable and high-performance websites developed
                using the latest technologies.
              </p>

              <ul className="mt-6 space-y-2 text-gray-700">
                <li>✔ React & Next.js</li>
                <li>✔ API Integration</li>
                <li>✔ Database</li>
                <li>✔ Maintenance</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* Technologies */}

      <section className="py-24 bg-slate-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Technologies We Use
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            {[
              "Next.js",
              "React",
              "Tailwind CSS",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "Figma",
              "GitHub",
            ].map((tech) => (

              <div
                key={tech}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition"
              >
                <h3 className="font-bold text-xl text-indigo-600">
                  {tech}
                </h3>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Development Process */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-5 gap-8 mt-16">

            {[
              ["🔍","Research"],
              ["🎨","Design"],
              ["💻","Development"],
              ["🧪","Testing"],
              ["🚀","Launch"],
            ].map(([icon,title]) => (

              <div
                key={title}
                className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
              >
                <div className="text-5xl">{icon}</div>

                <h3 className="font-bold text-xl mt-6">
                  {title}
                </h3>

                <p className="text-gray-500 mt-3">
                  High-quality professional workflow.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* Client Testimonials */}
      <section className="py-24 bg-indigo-900 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            What Our Clients Say
          </h2>

          <p className="text-center text-gray-300 mt-4">
            Trusted by startups, entrepreneurs and businesses worldwide.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md">
              <div className="text-yellow-400 text-2xl">★★★★★</div>

              <p className="mt-6 leading-7">
                "Our business website exceeded our expectations.
                The design is modern, responsive and has helped
                us attract more customers."
              </p>

              <h4 className="mt-6 font-bold">
                Sarah Johnson
              </h4>

              <p className="text-gray-300 text-sm">
                CEO, Bright Solutions
              </p>
            </div>

            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md">
              <div className="text-yellow-400 text-2xl">★★★★★</div>

              <p className="mt-6 leading-7">
                "Professional team, excellent communication,
                and a fantastic website delivered before the
                deadline."
              </p>

              <h4 className="mt-6 font-bold">
                Michael Brown
              </h4>

              <p className="text-gray-300 text-sm">
                Founder, Creative Studio
              </p>
            </div>

            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-md">
              <div className="text-yellow-400 text-2xl">★★★★★</div>

              <p className="mt-6 leading-7">
                "Outstanding UI/UX design and very fast website
                performance. Highly recommended!"
              </p>

              <h4 className="mt-6 font-bold">
                Emily Wilson
              </h4>

              <p className="text-gray-300 text-sm">
                Marketing Director
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Company Statistics */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div className="text-center">
              <h2 className="text-5xl font-bold text-indigo-600">
                120+
              </h2>
              <p className="mt-3 text-gray-500">
                Projects Completed
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-5xl font-bold text-pink-600">
                85+
              </h2>
              <p className="mt-3 text-gray-500">
                Happy Clients
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-5xl font-bold text-green-600">
                15+
              </h2>
              <p className="mt-3 text-gray-500">
                Countries Served
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-5xl font-bold text-yellow-500">
                5★
              </h2>
              <p className="mt-3 text-gray-500">
                Customer Rating
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="py-24 bg-gray-100">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-6">

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-bold">
                How long does it take to build a website?
              </h3>

              <p className="text-gray-600 mt-3">
                Depending on the project, it usually takes
                2–6 weeks from planning to launch.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-bold">
                Will my website be mobile friendly?
              </h3>

              <p className="text-gray-600 mt-3">
                Yes. Every website we build is fully responsive
                and works perfectly on mobiles, tablets and desktops.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-bold">
                Do you provide maintenance?
              </h3>

              <p className="text-gray-600 mt-3">
                Yes, we offer website maintenance, updates,
                backups and technical support after launch.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Contact CTA */}

      <section className="py-24 bg-gradient-to-r from-cyan-600 to-indigo-700 text-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Ready to Build Your Dream Website?
          </h2>

          <p className="mt-6 text-xl text-gray-200">
            Let's work together to create a stunning website
            that grows your business.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 mt-10 bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Start Your Project
            <ArrowRight size={20} />
          </Link>

        </div>

      </section>

    </main>
  );
}