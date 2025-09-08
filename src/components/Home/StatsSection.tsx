import { useEffect, useState } from "react";

const stats = [
  { label: "Olympian", value: 2 },
  { label: "International Players", value: 10 },
  { label: "National Players", value: 100 },
  { label: "State Players", value: 200 },
];

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = Math.ceil(end / (duration / 16));
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{target > 99 ? `${count}+` : count}</span>;
}

export default function StatsSection() {
  return (
    <section className="bg-pnsa-dark py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center border-r border-white/20 last:border-r-0"
            >
              <div className="text-4xl lg:text-6xl font-bold text-white mb-2">
                <AnimatedCounter target={stat.value} />
              </div>
              <div className="text-white/80 text-sm lg:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}