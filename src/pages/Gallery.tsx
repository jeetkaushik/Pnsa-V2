import Layout from "@/components/Layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import founderImage from "@/assets/Hero1.jpeg";
import studentImage from "@/assets/Hero2.jpeg";
import galleryBanner from "@/assets/gallery_banner.png"

const galleryItems = [
  {
    id: 1,
    src: founderImage,
    alt: "Prakash Nanjappa",
    category: "Awards",
    title: "Founder & Olympic Champion"
  },
  {
    id: 2,
    src: studentImage,
    alt: "Student Achievement",
    category: "Students",
    title: "Student Success Story"
  },
  {
    id: 3,
    src: founderImage,
    alt: "Competition",
    category: "Events",
    title: "National Competition"
  },
  {
    id: 4,
    src: studentImage,
    alt: "Awards Ceremony",
    category: "Awards",
    title: "Achievement Recognition"
  },
  {
    id: 5,
    src: founderImage,
    alt: "Coaching Session",
    category: "Training",
    title: "Expert Coaching"
  },
  {
    id: 6,
    src: studentImage,
    alt: "Team Photo",
    category: "Students",
    title: "PNSA Team"
  }
];

const categories = ["All", "Facilities", "Training", "Students", "Awards", "Events"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      {/* <section className="bg-gradient-hero py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Apply Scientific Methods And Create World Class Training Environment 
              For Marksmen To Unleash Their Full Potential
            </p>
          </div>
        </div>
      </section> */}
        <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img src={galleryBanner} alt="" className="w-full h-full object-cover h-1/2" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "orange" : "outline"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs bg-pnsa-orange px-2 py-1 rounded mb-2 inline-block">
                      {item.category}
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="text-sm bg-pnsa-orange px-3 py-1 rounded mb-2 inline-block">
                {selectedImage.category}
              </div>
              <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
            </div>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Achievement Stats */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600">
              A legacy of excellence in shooting sports
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-pnsa-orange mb-2">50+</div>
              <div className="text-gray-600">National Medals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pnsa-green mb-2">25+</div>
              <div className="text-gray-600">International Medals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Olympic Qualifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Trained Athletes</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}