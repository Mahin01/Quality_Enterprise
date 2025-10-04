import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        {/* About Us Section */}
        <div className="border-l-8 border-orange-500 pl-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            About <span className="text-gray-800">Us</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">Quality Enterprise</span> is a trusted name in
            industrial equipment supply and engineering solutions, founded by a
            team of industry veterans with over <span className="font-semibold">90+ years</span> of
            combined experience. After decades of working with leading companies
            like Unilever Bangladesh, our founding partners established Quality
            Enterprise to serve as a bridge between quality products and
            real-world industrial needs.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            We specialize in sourcing premium-grade equipment like gate valves,
            gaskets, O-rings, and conveyor belts, and combine that with
            solution-based services that ensure performance, reliability, and
            compliance in your operations.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            At Quality Enterprise, we don’t just deliver products —{" "}
            <span className="font-semibold">we deliver confidence.</span> Every item we
            supply is backed by deep technical knowledge, supplier integrity,
            and a relentless commitment to customer satisfaction.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To empower industries with reliable products and engineering
              solutions that reduce downtime, improve safety, and optimize
              performance.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become a nationwide leader in industrial equipment supply and
              services — known for quality, speed, and technical excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
