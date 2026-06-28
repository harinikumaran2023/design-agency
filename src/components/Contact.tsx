"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_ickqobi",
        "template_srbu1if",
        form.current,
        "qspVqSbWWvVi0GikM"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("✅ Your message has been sent successfully!");
          form.current?.reset();
          setLoading(false);
        },
        (error) => {
          console.error("EMAILJS ERROR:", error);
          setStatus("❌ Failed to send message. Check EmailJS setup.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-8 rounded-xl shadow-lg space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center font-medium mt-4">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}