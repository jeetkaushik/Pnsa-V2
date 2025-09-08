export default function AimVisionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            PNSA - Prakash Nanjappa Shooting Academy
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto font-inter">
            At PNSA, Our Mission Is Clear: To Unearth And Nurture Young Talents, 
            Molding Them Into Future Olympic Champions. Our State-Of-The-Art Facility, 
            Equipped With Cutting-Edge Weapons And Technology, Sets The Stage For Excellence.
          </p>
        </div>

        {/* Desktop: Show images */}
        <div className="hidden md:flex flex-col md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Our Aim Image */}
          <div className="w-full">
            <img 
              src="/lovable-uploads/12451f5d-d217-4bb0-ae9c-b3790ae0fe21.png"
              alt="Our Aim - Inspire, Guide And Support Youngsters"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Our Vision Image */}
          <div className="w-full">
            <img 
              src="/lovable-uploads/f5dd4abc-cdc8-42e4-a5d3-36d81a1536e6.png"
              alt="Our Vision - Build Young Aspiration Towards Shooting Sports"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Mobile: Show cards */}
        <div className="block md:hidden space-y-6 max-w-6xl mx-auto">
          {/* Our Aim Card */}
          <div className="bg-pnsa-orange p-8 text-white rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Our Aim</h3>
            <p className="text-white/90 font-inter leading-relaxed text-base">
              Inspire, guide and support youngsters to discover their potential in shooting.
              We focus on fundamentals, discipline and consistency to build strong foundations
              for long-term success.
            </p>
          </div>

          {/* Our Vision Card */}
          <div className="bg-pnsa-green p-8 text-white rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Our Vision</h3>
            <p className="text-white/90 font-inter leading-relaxed text-base">
              Build young aspirations towards shooting sports and create champions who
              compete at national and international levels through world-class training
              and infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}