export default function Stats() {
  const stats = [
    { number: "120+", label: "Projects Completed" },
    { number: "85+", label: "Happy Clients" },
    { number: "15+", label: "Countries Served" },
    { number: "5★", label: "Customer Rating" },
  ];

  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition"
            >
              <h2 className="text-5xl font-bold">
                {stat.number}
              </h2>

              <p className="mt-3 text-lg">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}