import Layout from "@/components/Layout/Layout";
import { useState } from "react";
import founderImage from "@/assets/Hero1.jpeg";
import studentImage from "@/assets/Hero2.jpeg";
import galleryBanner from "@/assets/gallery_banner.png"
import img1 from "@/assets/Hero3.jpeg"
import img2 from "@/assets/Hero4.jpeg"
import img3 from "@/assets/about-us-hero.png"
import img4 from "@/assets/testi1.png"
import img5 from "@/assets/gal1.jpeg"
import img6 from "@/assets/gal2.jpeg"
import img7 from "@/assets/gal3.jpeg"
import img8 from "@/assets/gal4.jpeg"
import img9 from "@/assets/gal5.jpeg"
import img10 from "@/assets/gal6.jpeg"
import img11 from "@/assets/gal7.jpeg"
import img12 from "@/assets/gal8.jpeg"
import img13 from "@/assets/gal9.jpeg"
import img14 from "@/assets/gal10.jpeg"
import img15 from "@/assets/gal11.jpeg"
import img16 from "@/assets/gal12.jpeg"





const galleryItems = [
  {
    id: 1,
    src: founderImage,
    alt: "Prakash Nanjappa",
    title: "Founder & Olympic Champion"
  },
  {
    id: 2,
    src: studentImage,
    alt: "Student Achievement",
    title: "Student Success Story"
  },
  {
    id: 3,
    src: img1,
    alt: "Competition",
    title: "National Competition"
  },
  {
    id: 4,
    src: img2,
    alt: "Awards Ceremony",
    title: "Achievement Recognition"
  },
  {
    id: 5,
    src: img3,
    alt: "Coaching Session",
    title: "Expert Coaching"
  },
  {
    id: 6,
    src: img4,
    alt: "Team Photo",
    title: "PNSA Team"
  },
  {
    id: 7,
    src: img5,
    alt: "Team Photo",
    title: "PNSA Team"
  },
  {
    id: 8,
    src: img6,
    alt: "Team Photo",
    title: "PNSA Team"
  },
  {
    id: 9,
    src: img7,
    alt: "Team Photo",
    title: "PNSA Team"
  },
  {
    id: 10,
    src: img8,
    alt: "Team Photo",
    title: "PNSA Team"
  },
  {
    id: 11,
    src: img9,
    alt: "Team Photo",
    title: "PNSA Team"
  },
  {
    id: 12,
    src: img10,
    alt: "Team Photo",
    title: "PNSA Team"
  },
  {
    id: 13,
    src: img11,
    alt: "Team Photo",
    title: "PNSA Team"
  },
  {
    id: 14,
    src: img12,
    alt: "Team Photo",
    title: "PNSA Team"
  },
  {
    id: 15,
    src: img13,
    alt: "Team Photo",
    title: "PNSA Team"
  },
  {
    id: 16,
    src: img14,
    alt: "Team Photo",
    title: "PNSA Team"
  },
  {
    id: 17,
    src: img15,
    alt: "Team Photo",
    title: "PNSA Team"
  },
  {
    id: 18,
    src: img16,
    alt: "Team Photo",
    title: "PNSA Team"
  },
  
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img src={galleryBanner} alt="" className="w-full h-full object-cover h-1/2" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-64 object-cover"
                />
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
      {/* <section className="py-16 bg-gray-50">
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
      </section> */}
    </Layout>
  );
}