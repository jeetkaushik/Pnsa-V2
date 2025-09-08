import Layout from "@/components/Layout/Layout";
import founderImage from "@/assets/prakash-nanjappa.jpg";
import studentImage from "@/assets/student-success.jpg";

const achievements = [
  {
    category: "Olympic Achievements",
    items: [
      "2012 London Olympics Participation",
      "Olympic Qualifying Scores Multiple Times",
      "Olympic Training Program Development"
    ]
  },
  {
    category: "International Medals",
    items: [
      "World Cup Gold Medal",
      "Asian Games Silver Medal", 
      "Commonwealth Games Bronze Medal",
      "Asian Championship Gold Medal",
      "Commonwealth Championship Silver Medal"
    ]
  },
  {
    category: "National Recognition",
    items: [
      "Arjuna Award Winner",
      "National Champion Multiple Times",
      "Outstanding Contribution to Shooting Sports",
      "Best Coach Award"
    ]
  },
  {
    category: "Academy Success",
    items: [
      "200+ State Level Players Trained",
      "100+ National Level Players Developed", 
      "10+ International Players Produced",
      "2 Olympic Qualifiers Coached"
    ]
  }
];

export default function Achievements() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Achievements</h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              A legacy of excellence spanning decades in shooting sports
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.category} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {achievement.category}
                </h3>
                <ul className="space-y-2">
                  {achievement.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-pnsa-orange mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={founderImage} 
                alt="Prakash Nanjappa Olympic Achievement" 
                className="w-full h-96 object-cover rounded-lg shadow-elegant"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Olympic Excellence
              </h3>
              <p className="text-gray-700 mb-6">
                Prakash Nanjappa's participation in the 2012 London Olympics marked 
                a historic achievement for Indian shooting sports. His dedication 
                and precision have inspired a generation of young shooters.
              </p>
              <div className="bg-pnsa-orange text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">2012</div>
                <div>London Olympics</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}