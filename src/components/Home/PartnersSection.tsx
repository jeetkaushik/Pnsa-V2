import React from "react";
import partner1 from "@/assets/partner1.jpeg";
import partner2 from "@/assets/partner2.jpeg";
import partner3 from "@/assets/partner3.jpeg";
import partner4 from "@/assets/partner4.jpeg";

const partnerLogos = [
  { src: partner1, name: "Partner 1", href: "#" },
  { src: partner2, name: "Partner 2", href: "#" },
  { src: partner3, name: "Partner 3", href: "#" },
  { src: partner4, name: "Partner 4", href: "#" },
];

export default function PartnersSection(): JSX.Element {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud to work with leading organizations in the shooting sports community
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* parent .marquee used for pause-on-hover in CSS below */}
          <div className="marquee">
            {/* inner track: duplicate logos for seamless loop */}
            <div className="marquee-inner flex items-center">
              {partnerLogos.concat(partnerLogos).map((p, idx) => (
                <a
                  key={idx}
                  href={p.href}
                  className="flex-shrink-0 mx-6 min-w-[140px] flex items-center justify-center"
                >
                  <img
                    src={p.src}
                    alt={p.name}
                    className="h-32 w-auto object-contain filter grayscale hover:grayscale-0 transition-transform duration-300 hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
