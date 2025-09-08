import gun from "@/assets/gun.png"

export default function RibbonSection() {
  return (
    <section className="bg-pnsa-dark py-6 overflow-hidden">
      <div className="flex whitespace-nowrap">
        {/* Track A */}
        <div className="flex items-center gap-12 text-white text-2xl md:text-4xl font-bold tracking-widest animate-scroll">
          <RibbonChunk />
          <RibbonChunk />
          <RibbonChunk />
          <RibbonChunk />
        </div>
        {/* Track B (duplicate for seamless loop) */}
        <div className="flex items-center gap-12 text-white text-2xl md:text-4xl font-bold tracking-widest animate-scroll" aria-hidden="true">
          <RibbonChunk />
          <RibbonChunk />
          <RibbonChunk />
          <RibbonChunk />
        </div>
      </div>
    </section>
  );
}

function RibbonChunk() {
  return (
    <>
      <span>
        <span className="text-pnsa-orange">WIN</span> <span className="text-white">IN</span> <span className="text-pnsa-green">MIND</span> <span className="text-pnsa-green">LIFE</span>
      </span>
      <img src={gun} alt="" />
      <span>
        <span className="text-pnsa-orange">WIN</span> <span className="text-white">IN</span> <span className="text-pnsa-green">MIND</span> <span className="text-pnsa-green">LIFE</span>
      </span>
      <img src={gun} alt="" />
      <span>
        <span className="text-pnsa-orange">WIN</span> <span className="text-white">IN</span> <span className="text-pnsa-green">MIND</span> <span className="text-pnsa-green">LIFE</span>
      </span>
      <img src={gun} alt="" />
    </>
  );
}