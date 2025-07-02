export default function FeaturedStories() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured Stories
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Inspiring journeys of women who are shaping the future of robotics and technology.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-white text-3xl">📖</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Coming Soon!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re currently curating amazing stories of female roboticists and innovators. 
            Check back soon for inspiring journeys that will spark your passion for STEM!
          </p>
          <div className="bg-blue-50 rounded-lg p-6 items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-left">
              What to expect:
            </h3>
            <ul className="text-gray-600 space-y-2 text-left">
              <li>• Profiles of pioneering women in robotics</li>
              <li>• Success stories from young innovators</li>
              <li>• Career journey insights and advice</li>
              <li>• Interactive story experiences</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 