import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A modern online shopping platform with secure payments and responsive design.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      tech: "Next.js • Tailwind CSS • Stripe",
      link: "/portfolio/ecommerce",
    },
    {
      title: "Creative Agency",
      description:
        "A premium digital agency website with animations and modern UI/UX.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      tech: "React • Framer Motion • Tailwind",
      link: "/portfolio/creative-agency",
    },
    {
      title: "Mobile App UI",
      description:
        "A clean and intuitive mobile application interface for Android and iOS.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      tech: "Figma • Flutter • Firebase",
      link: "/portfolio/mobile-app",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-indigo-600 uppercase tracking-widest font-semibold">
            Our Work
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Explore some of our recent projects designed to help businesses
            grow with modern technology and creative design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
            >
              <div className="overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {project.description}
                </p>

                <p className="mt-4 text-sm text-indigo-600 font-semibold">
                  {project.tech}
                </p>

                <Link
                  href={project.link}
                  className="mt-6 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all"
                >
                  View Project
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}