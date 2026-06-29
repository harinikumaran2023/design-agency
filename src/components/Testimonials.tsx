export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Solutions",
      review:
        "PixelCraft transformed our business with a modern website. Their team was professional and delivered beyond our expectations.",
    },
    {
      name: "David Smith",
      company: "Creative Studio",
      review:
        "Excellent design quality and outstanding support. We highly recommend PixelCraft for any digital project.",
    },
    {
      name: "Emily Brown",
      company: "Startup Hub",
      review:
        "The team understood our vision perfectly. The website is beautiful, fast, and user-friendly.",
    },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold uppercase tracking-widest">
            TESTIMONIALS
          </span>

          <h2 className="text-5xl font-bold mt-3 text-gray-900">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            We are proud to have helped businesses around the world achieve
            their digital goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <div className="text-yellow-500 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-700 leading-7">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-xl text-gray-900">
                  {item.name}
                </h3>

                <p className="text-indigo-600">
                  {item.company}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}