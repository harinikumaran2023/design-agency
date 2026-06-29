import Link from "next/link";
import {
  Globe,
  Smartphone,
  Cloud,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Website Design",
      description:
        "Modern, responsive and visually stunning websites tailored to your business.",
      icon: Globe,
      color: "text-blue-600",
      bg: "bg-blue-100",
      link: "/services/web-design",
    },
    {
      title: "Mobile App Design",
      description:
        "Beautiful Android & iOS app interfaces focused on user experience.",
      icon: Smartphone,
      color: "text-pink-600",
      bg: "bg-pink-100",
      link: "/services/mobile-app",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment for modern businesses.",
      icon: Cloud,
      color: "text-green-600",
      bg: "bg-green-100",
      link: "/services/cloud-solutions",
    },
    {
      title: "Cyber Security",
      description:
        "Protecting applications and businesses with advanced security solutions.",
      icon: ShieldCheck,
      color: "text-purple-600",
      bg: "bg-purple-100",
      link: "/services/cyber-security",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="text-5xl font-bold mt-3 text-gray-900">
            What We Can Do For You
          </h2>

          <p className="mt-5 text-lg text-gray-700 max-w-2xl mx-auto">
            We provide creative digital solutions that help startups,
            businesses, and brands build a powerful online presence.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6`}
                >
                  <Icon className={service.color} size={34} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-700 leading-7">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="mt-6 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}