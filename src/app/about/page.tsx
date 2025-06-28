export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About SparkHer
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Empowering the next generation of female innovators in robotics and STEM.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            SparkHer is dedicated to inspiring and empowering young women to pursue careers in robotics, 
            engineering, and STEM fields. We believe that diversity drives innovation, and we're committed 
            to breaking down barriers and creating opportunities for the next generation of female leaders 
            in technology.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Do</h2>
          <p className="text-gray-600 mb-6">
            Through inspiring stories, hands-on learning resources, and comprehensive educational programs, 
            we provide young women with the tools, knowledge, and confidence they need to succeed in STEM. 
            Our platform offers everything from beginner-friendly courses to advanced robotics projects.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
          <p className="text-gray-600">
            We envision a future where women are equally represented in all areas of technology and innovation. 
            By sparking interest early and providing ongoing support, we're building a community of female 
            innovators who will shape the future of robotics and engineering.
          </p>
        </div>
      </section>
    </div>
  );
} 