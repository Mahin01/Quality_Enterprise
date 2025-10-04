import React from 'react';

// Sample data structure derived from the uploaded catalog pages.
// You can replace this with data fetched from an API or a local JSON file.
const sealingSolutionsData = {
    category: "Product Categories",
    title: "Sealing Solutions - Gaskets, O-Rings & More",
    intro: "At Quality Enterprise, we provide high-performance gaskets, O-rings, and sealing solutions that prevent leaks, withstand pressure, and resist chemical exposure. Our products are designed for reliable use in steam lines, chemical systems, food-grade equipment, and diverse industrial applications.",
    table: {
        headers: ["Product", "Description", "Material Options", "Application"],
        rows: [
            ["Gaskets", "Used between flanged connections for sealing", "PTFE, Graphite, EPDM, CAF, Spiral Wound", "Steam, water, chemicals"],
            ["O-Rings", "Circular seals for pumps, valves, cylinders", "NBR, Viton, Silicone, EPDM, PU", "Hydraulic, food, chemical lines"],
            ["Rubber Sheets", "Cut-to-size sealing for irregular surfaces or covers", "Neoprene, EPDM, Nitrile, Silicone", "Tank lids, enclosures"],
            ["Washer Seals", "Flat rings for bolt and pipe joints", "Copper, Rubber, Fiber", "Water/gas fittings"],
        ]
    },
    sections: [
        {
            title: "Custom Solutions Available",
            bullets: [
                "Gasket cutting as per drawing/sample",
                "Food-grade O-rings for hygienic applications",
                "Heat and chemical-resistant sealing kits",
                "Reverse engineering of discontinued parts"
            ]
        },
        {
            title: "Our Expertise Ensures",
            bullets: [
                "Leak-free performance",
                "Accurate sizing and material match",
                "Quick replacement to reduce downtime",
                "Stock availability for urgent requirements"
            ]
        }
    ],
    // Placeholder image that follows the dark theme of the original documents.
    imageUrl: "https://placehold.co/1000x800/1e293b/f8fafc?text=Industrial+Components+and+Seals",
    specialNote: "Specialized sealing available for high-temperature, high-pressure, and corrosive environments."
};


/**
 * Reusable component for rendering a structured product category page.
 * @param {object} props - The component props.
 * @param {object} props.data - The product category data to display.
 */
const ProductCategoryPage = ({ data = {} }) => {
    // Component for rendering the list sections
    const BulletSection = ({ title, bullets }) => (
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-amber-400 border-b border-amber-400/50 pb-1">
                {title}
            </h3>
            <ul className="space-y-2 text-gray-300">
                {(bullets || []).map((bullet, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="flex-shrink-0 w-5 h-5 mr-2 text-amber-400 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        {bullet}
                    </li>
                ))}
            </ul>
        </div>
    );
    
    // Safely destructure properties for cleaner access in JSX, providing defaults for clarity
    const { category, title = '', intro, table, sections, imageUrl, specialNote } = data;

    // Handle the case where essential data is missing entirely (e.g., table structure)
    // If data is passed but is an empty object, this will return an error message.
    if (Object.keys(data).length === 0) {
        return <div className="min-h-screen p-4 sm:p-8 bg-gray-800 font-inter text-red-400">Error: Product data is missing or malformed.</div>;
    }


    // Safely split the title for the header
    const [titlePart1, titlePart2] = title.includes(' - ') ? title.split(' - ') : [title, null];


    return (
        <div className="min-h-screen p-4 sm:p-8 bg-gray-800 font-inter">
            <style>{`
                .font-inter { font-family: 'Inter', sans-serif; }
                .product-table th {
                    background-color: #374151; /* Darker header */
                    color: #fef3c7; /* Light text for readability */
                    padding: 1rem;
                    text-align: left;
                    font-weight: 600;
                    border-bottom: 2px solid #fcd34d; /* Amber border */
                }
                .product-table td {
                    padding: 1rem;
                    border-bottom: 1px solid #4b5563; /* Subtle row separator */
                }
                .product-table tr:nth-child(even) {
                    background-color: #1f2937; /* Even row stripe */
                }
            `}</style>
            <div className="max-w-7xl mx-auto rounded-xl shadow-2xl p-6 md:p-10 bg-gray-900">

                {/* Header Section */}
                <header className="mb-10 border-b pb-4 border-gray-700">
                    <p className="text-sm font-medium uppercase tracking-widest text-gray-400">{category}</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold mt-1 text-white">
                        <span className="text-amber-400">{titlePart1}</span>
                        {titlePart2 && <span> - {titlePart2}</span>}
                    </h1>
                </header>

                {/* Introduction Paragraph */}
                <p className="text-lg mb-12 text-gray-300 leading-relaxed max-w-4xl">
                    {intro}
                </p>

                {/* Products Table */}
                {table && table.headers && table.rows && (
                    <div className="mb-12 overflow-x-auto rounded-lg border border-gray-700 shadow-xl">
                        <table className="min-w-full product-table text-sm text-gray-200">
                            <thead>
                                <tr>
                                    {(table.headers || []).map((header, index) => (
                                        <th key={index} className="whitespace-nowrap">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {(table.rows || []).map((row, rowIndex) => (
                                    <tr key={rowIndex} className="hover:bg-gray-700 transition-colors duration-200">
                                        {(row || []).map((cell, cellIndex) => (
                                            <td key={cellIndex} className="whitespace-normal">
                                                {cellIndex === 0 ? <strong className="text-amber-200">{cell}</strong> : cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Layout for Special Note, Image, and Bullet Sections */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                    <div className="mb-8 lg:mb-0">
                        {/* Special Note / Callout */}
                        {specialNote && (
                            <p className="text-xl italic mb-8 p-4 bg-amber-400/10 text-amber-300 rounded-lg border-l-4 border-amber-400">
                                {specialNote}
                            </p>
                        )}
                        
                        {/* Bulleted Sections */}
                        {(sections || []).map((section, index) => (
                            <BulletSection key={index} title={section.title} bullets={section.bullets} />
                        ))}
                    </div>

                    {/* Placeholder Image (Matching the visual aesthetic of the uploaded documents) */}
                    <div className="flex justify-center items-start">
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                alt="Industrial products and components"
                                className="rounded-xl shadow-2xl object-cover w-full h-auto min-h-[300px]"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1000x800/1e293b/f8fafc?text=Image+Load+Failed" }}
                            />
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

// Main App component to demonstrate usage
const Products = () => {
    return (
        // The ProductCategoryPage component is rendered here with the sample data.
        <ProductCategoryPage data={sealingSolutionsData} />
    );
};

export default Products;