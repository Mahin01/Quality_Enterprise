import React from "react";

const AboutUs = () => {
    return (
        <section className="py-16 bg-gray-900 rounded-xl shadow-2xl p-6 md:p-10">
            <div className="max-w-6xl mx-auto">
                {/* About Us Section */}
                {/* Border color changed from orange-500 to amber-400 for consistency */}
                <div className="border-l-8 border-amber-400 pl-6 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
                        About <span className="text-gray-100">Us</span> {/* Text color adjusted for dark theme */}
                    </h2>
                    <p className="text-gray-300 leading-relaxed"> {/* Text color adjusted for dark theme */}
                        <span className="font-semibold">Quality Enterprise</span> is a trusted name in
                        industrial equipment supply and engineering solutions, founded by a
                        team of industry veterans with over <span className="font-semibold text-amber-200">90+ years</span> of {/* Accent color added */}
                        combined experience. After decades of working with leading companies
                        like Unilever Bangladesh, our founding partners established Quality
                        Enterprise to serve as a bridge between quality products and
                        real-world industrial needs.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4"> {/* Text color adjusted for dark theme */}
                        We specialize in sourcing premium-grade equipment like gate valves,
                        gaskets, O-rings, and conveyor belts, and combine that with
                        solution-based services that ensure performance, reliability, and
                        compliance in your operations.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4"> {/* Text color adjusted for dark theme */}
                        At Quality Enterprise, we don’t just deliver products —{" "}
                        <span className="font-semibold text-amber-200">we deliver confidence.</span> Every item we {/* Accent color added */}
                        supply is backed by deep technical knowledge, supplier integrity,
                        and a relentless commitment to customer satisfaction.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                    {/* Mission */}
                    <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
                        <h3 className="text-2xl font-bold text-amber-400 mb-3"> {/* Color changed to amber */}
                            Our Mission
                        </h3>
                        <p className="text-gray-300 leading-relaxed"> {/* Text color adjusted for dark theme */}
                            To empower industries with reliable products and engineering
                            solutions that reduce downtime, improve safety, and optimize
                            performance.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
                        <h3 className="text-2xl font-bold text-amber-400 mb-3"> {/* Color changed to amber */}
                            Our Vision
                        </h3>
                        <p className="text-gray-300 leading-relaxed"> {/* Text color adjusted for dark theme */}
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
