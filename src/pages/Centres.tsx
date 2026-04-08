import Layout from "@/components/Layout/Layout";
import { MapPin, Phone, Clock, Mail, Plus, ChevronRight } from "lucide-react";
import centersBanner from "@/assets/centers_banner.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const centres = [
  {
    name: "PNSA, Central Bengaluru",
    phone: "+91 9008736935",
    email: "info@pnshooting.in",
    address: "BCU Basecamp by Push Sports, University Campus, Palace Rd, Gandhi Nagar, Bengaluru, Karnataka 560009",
    timing: "Please contact the centre for timings",
    facilities: [],
    image: "https://picsum.photos/seed/pnsa-central-bengaluru/800/500"
  },
  {
    name: "PNSA, Sarjapur, Bengaluru",
    phone: "+91 9008736935",
    email: "info@pnshooting.in",
    address: "Greenwood High International School, No. 8-14, Chikkawadayarapura, Near Heggondahalli Gunjur Post, Varthur - Sarjapur Rd, Varthur, Karnataka 560087",
    timing: "Please contact the centre for timings",
    facilities: [],
    image: "https://picsum.photos/seed/pnsa-sarjapur-bengaluru/800/500"
  },
  {
    name: "PNSA, Bannerghatta, Bengaluru",
    phone: "+91 9008736935",
    email: "info@pnshooting.in",
    address: "Greenwood High International School, No:61, Off Bannerghatta Road, CK Palya Rd, adjacent to Hommaedevenahalli, Bengaluru, Karnataka 560083",
    timing: "Please contact the centre for timings",
    facilities: [],
    image: "https://picsum.photos/seed/pnsa-bannerghatta-bengaluru/800/500"
  },
  {
    name: "PNSA, Vasant Kunj, Delhi",
    phone: "+91 9008736935",
    email: "info@pnshooting.in",
    address: "GD Goenka, The Flagship School, Vasant Kunj, Bhagwan Mahaveer Rd, Pocket 8, Sector B, Vasant Kunj, New Delhi, Delhi 110070",
    timing: "Please contact the centre for timings",
    facilities: [],
    image: "https://picsum.photos/seed/pnsa-vasant-kunj-delhi/800/500"
  },
  {
    name: "PNSA - Pacific Shooting Club, Bareilly, U.P.",
    phone: "+91 9008736935 / 7467000007",
    email: "pacificshootingclub@gmail.com",
    address: "8CV8+X35, Jail Rd, Civil Lines, Bareilly, Uttar Pradesh 243001",
    timing: "Please contact the centre for timings",
    facilities: [],
    image: "https://picsum.photos/seed/pnsa-pacific-bareilly/800/500"
  },
  {
    name: "PNSA, Derabassi, Punjab",
    phone: "+91 9008736935",
    email: "info@pnshooting.in",
    address: "Dikshant International School, Haripur Kuran, Mukandpur Rd, near Dak Bungalow and HP Petrol Pump, Dera Bassi, Punjab 140507",
    timing: "Please contact the centre for timings",
    facilities: [],
    image: "https://picsum.photos/seed/pnsa-derabassi-punjab/800/500"
  }
];

export default function Centres() {
  return (
    <Layout>
      {/* Hero Section */}
      {/* <section className="bg-gradient-hero py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Centres</h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              State-of-the-art facilities designed for Olympic-level training
            </p>
          </div>
        </div>
      </section> */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img src={centersBanner} alt="" className="w-full h-full object-cover h-1/2" />
        </div>
      </section>

      {/* Centres List */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {centres.map((centre) => (
              <div key={centre.name} className="rounded-lg border border-gray-200 overflow-hidden bg-white">
                <img
                  src={centre.image}
                  alt={centre.name}
                  className="w-full h-56 object-cover"
                />

                <Accordion type="single" collapsible>
                  <AccordionItem value={centre.name} className="border-b-0">
                    <AccordionTrigger className="group bg-pnsa-orange hover:no-underline px-3 py-2 text-white min-h-16 [&>svg]:hidden">
                      <div className="w-full flex items-center justify-between gap-2">
                        <div className="flex items-start gap-2 min-w-0">
                          <Plus className="h-4 w-4 shrink-0" />
                          <span className="text-sm font-bold uppercase text-left leading-tight line-clamp-2">
                            {centre.name}
                          </span>
                        </div>
                        <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pt-4 pb-5">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2 text-gray-700">
                          <MapPin className="h-4 w-4 text-pnsa-orange mt-0.5 shrink-0" />
                          <span>{centre.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Phone className="h-4 w-4 text-pnsa-green shrink-0" />
                          <span>{centre.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Mail className="h-4 w-4 text-blue-600 shrink-0" />
                          <span>{centre.email}</span>
                        </div>
                        <div className="flex items-start gap-2 text-gray-700">
                          <Clock className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                          <span>{centre.timing}</span>
                        </div>
                      </div>

                      {centre.facilities.length > 0 && (
                        <div className="mt-4">
                          <h3 className="font-semibold text-gray-900 mb-2">Facilities</h3>
                          <ul className="space-y-1">
                            {centre.facilities.map((facility) => (
                              <li key={facility} className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="mt-1 h-2 w-2 rounded-full bg-pnsa-orange shrink-0" />
                                <span>{facility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-lg text-gray-600">
              Equipment and infrastructure that meets international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-pnsa-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎯
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Professional Ranges
              </h3>
              <p className="text-gray-600">
                Multiple shooting ranges designed to international competition standards
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-pnsa-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚙️
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Advanced Equipment
              </h3>
              <p className="text-gray-600">
                Latest shooting equipment and technology for optimal training experience
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                📹
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Analysis Systems
              </h3>
              <p className="text-gray-600">
                Video analysis and performance tracking systems for technique improvement
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}