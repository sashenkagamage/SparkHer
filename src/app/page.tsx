import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              SparkHer
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Inspiring the next generation of female roboticists through powerful stories and shared journeys
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#stories"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Explore Stories
              </Link>
              <Link
                href="/find-your-story"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating spark icons */}
        <div className="absolute top-20 left-10 opacity-20 animate-pulse">
          <div className="w-12 h-12 bg-white rounded-lg"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 animate-bounce">
          <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Building the Future, One Story at a Time
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every breakthrough in robotics started with curiosity, determination, and inspiration. 
            We're here to share the incredible journeys of female roboticists and young innovators 
            who are shaping our technological future.
          </p>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section id="stories" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
            The Place to Start
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pioneer Stories */}
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">🔥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Female Pioneers
              </h3>
              <p className="text-gray-600 mb-4">
                Discover the groundbreaking women who paved the way in robotics and AI, 
                from early computing to modern automation.
              </p>
              <Link href="/pioneers" className="text-blue-600 font-semibold hover:text-blue-800">
                Read Their Stories →
              </Link>
            </div>

            {/* Young Innovators */}
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Rising Stars
              </h3>
              <p className="text-gray-600 mb-4">
                Follow the journeys of young women and girls who are already making their mark 
                in robotics competitions, research, and innovation.
              </p>
              <Link href="/rising-stars" className="text-indigo-600 font-semibold hover:text-indigo-800">
                See Their Journey →
              </Link>
            </div>

            {/* Getting Started */}
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Your Journey Starts Here
              </h3>
              <p className="text-gray-600 mb-4">
                Resources, programs, and communities to help you take your first steps 
                into the exciting world of robotics.
              </p>
              <Link href="/find-your-story" className="text-purple-600 font-semibold hover:text-purple-800">
                Start Exploring →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="get-started" className="py-16 bg-gradient-to-r from-blue-950 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Share Your Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're just starting out or you're already making waves in robotics, 
            your story could inspire the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/submit-story"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Share Your Story
            </Link>
            <Link
              href="/find-your-story"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                SparkHer
              </h3>
              <p className="text-gray-300">
                Inspiring young girls to pursue their dreams in robotics and engineering.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/pioneers" className="hover:text-blue-400">Female Pioneers</Link></li>
                <li><Link href="/rising-stars" className="hover:text-indigo-400">Rising Stars</Link></li>
                <li><Link href="/get-started" className="hover:text-purple-400">Get Started</Link></li>
                <li><Link href="/resources" className="hover:text-blue-400">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
                <li><Link href="/submit-story" className="hover:text-indigo-400">Submit a Story</Link></li>
                <li><Link href="/contact" className="hover:text-purple-400">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SparkHer. Sparking the next generation of female innovators.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
