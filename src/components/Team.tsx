import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

const team = [
  {
    name: "Alex Johnson",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  },
  {
    name: "Sophia Williams",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
  },
  {
    name: "Daniel Smith",
    role: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-indigo-600 font-semibold uppercase tracking-widest">
            Meet Our Team
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Creative Minds Behind Our Work
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Our talented professionals combine creativity and technology
            to deliver exceptional digital experiences.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              <div className="overflow-hidden">

                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6 text-center">

                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="text-indigo-600 mt-2">
                  {member.role}
                </p>

                <div className="flex justify-center gap-4 mt-6">

                  <Linkedin className="cursor-pointer hover:text-blue-600 transition" />

                  <Github className="cursor-pointer hover:text-black transition" />

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}