import Link from "next/link";

export default function FindYourStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Learn & Build
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Master robotics and STEM through hands-on courses, interactive games, and comprehensive learning resources.
          </p>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-gray-600">
            Start your journey with structured courses designed for every skill level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Beginner Path */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
            <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-xl">🌟</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Beginner Basics
            </h3>
            <p className="text-gray-600 mb-4">
              Start with fundamental concepts, basic programming, and simple robotics projects.
            </p>
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Basic Mechanics, Mathematics, and Electronics</span>
            </div>
            <Link href="/courses/beginner" className="text-blue-600 font-semibold hover:text-blue-800">
              Start Learning →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-indigo-100">
            <div className="w-12 h-12 bg-indigo-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-xl">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Intermediate Skills
            </h3>
            <p className="text-gray-600 mb-4">
              Advanced programming, sensor integration, and AI fundamentals for robotics.
            </p>
            <div className="mb-4">
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Advanced Mechanics and Circuit Design</span>
            </div>
            <Link href="/courses/intermediate" className="text-indigo-600 font-semibold hover:text-indigo-800">
              Continue Journey →
            </Link>
          </div>

          {/* <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
            <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Advanced Projects
            </h3>
            <p className="text-gray-600 mb-4">
              Complex systems, machine learning, and cutting-edge robotics research.
            </p>
            <div className="mb-4">
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">15 Courses</span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full ml-2">50+ Hours</span>
            </div>
            <Link href="/courses/advanced" className="text-purple-600 font-semibold hover:text-purple-800">
              Master Skills →
            </Link>
          </div> */}
        </div>
      </section>

      {/* Interactive Games & Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Interactive Learning Games
            </h2>
            <p className="text-lg text-gray-600">
              Play awesome games while learning about robots and coding! Perfect for ages 10-13.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
              <div className="w-16 h-16 bg-blue-500 rounded-full mb-4 flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
                Robot Builder Game
              </h3>
              <p className="text-gray-600 text-sm text-center mb-4">
                Build and control your own virtual robot! Make it walk, talk, and dance!
              </p>
              <Link href="/games/robot-simulator" className="block text-center text-blue-600 font-semibold hover:text-blue-800">
                Coming Soon! →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
              <div className="w-16 h-16 bg-indigo-500 rounded-full mb-4 flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">🧩</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
                Logic Puzzles
              </h3>
              <p className="text-gray-600 text-sm text-center mb-4">
                Programming logic and algorithm challenges
              </p>
              <Link href="/games/logic-puzzles" className="block text-center text-indigo-600 font-semibold hover:text-indigo-800">
                Start Playing →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
              <div className="w-16 h-16 bg-purple-500 rounded-full mb-4 flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
                Circuit Builder
              </h3>
              <p className="text-gray-600 text-sm text-center mb-4">
                Create amazing electronic circuits! Make LEDs blink and buzzers buzz!
              </p>
              <Link href="/games/circuit-builder" className="block text-center text-purple-600 font-semibold hover:text-purple-800">
                Start Building →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources 
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Free Learning Resources
          </h2>
          <p className="text-lg text-gray-600">
            Download handouts, guides, and reference materials to support your learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-indigo-600 text-lg">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Project Blueprints</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Detailed blueprints and assembly instructions for beginner robots.
            </p>
            <Link href="/downloads/project-blueprints" className="text-indigo-600 font-semibold hover:text-indigo-800 text-sm">
              Coming Soon →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-purple-600 text-lg">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Reference Sheets</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Quick reference cards for sensors, components, and troubleshooting.
            </p>
            <Link href="/downloads/reference-sheets" className="text-purple-600 font-semibold hover:text-purple-800 text-sm">
              Download Sheets →
            </Link>
          </div>


          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-orange-600 text-lg">🛠️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Tool Guides</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Software installation and tool setup instructions.
            </p>
            <Link href="/downloads/tool-guides" className="text-orange-600 font-semibold hover:text-orange-800 text-sm">
              Setup Guides →
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-pink-600 text-lg">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Innovation Labs</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Creative project ideas and innovation methodologies.
            </p>
            <Link href="/downloads/innovation-labs" className="text-pink-600 font-semibold hover:text-pink-800 text-sm">
              Coming Soon →
            </Link>
          </div>
        </div>
      </section>*/}

      

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of young women learning robotics through our hands-on platform. 
            Get personalized learning paths and connect with mentors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Create Free Account
            </Link>
            <Link
              href="/mentor-connect"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Wanna be a mentor?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 