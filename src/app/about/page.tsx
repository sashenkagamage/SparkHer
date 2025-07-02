import Image from "next/image";

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

        <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet the Founder</h2>
         
         <div className="flex flex-col lg:flex-row gap-6 items-center">
           <div className="lg:w-1/3 flex-shrink-0">
             <Image 
               src="/my-image.jpg" 
               alt="Sashenka, Founder of SparkHer" 
               width={256}
               height={256}
               className="w-64 h-64 lg:w-full lg:h-auto object-cover rounded-xl shadow-lg mx-auto"
             />
           </div>
           <div className="lg:w-2/3">
             <p className="text-gray-700 leading-relaxed">
               Hi, I&apos;m <strong>Sashenka</strong>, founder of SparkHer — a small space I created to show that robotics can be creative, people-centered, and built with empathy. 
             </p>
             <p className="text-gray-700 leading-relaxed mt-4">
               I&apos;ve always been curious about how things move and connect, but I never imagined myself &ldquo;belonging&rdquo; in robotics until I really started building things that felt meaningful. Through research projects, community work, and a lot of trial and error, I found my passion not just in technology, but in how we can use it to make life better. 
             </p>
             <p className="text-gray-700 leading-relaxed mt-4">
               SparkHer is my way of passing that on — especially to young girls who might feel like they don&apos;t quite fit the mold. You don&apos;t have to. If you&apos;re curious, you&apos;re already halfway there. Let&apos;s build something — together.
             </p>
         
         </div>
       </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            SparkHer is dedicated to inspiring and empowering young women to pursue careers in robotics, 
            engineering, and STEM fields. We believe that diversity drives innovation, and we&apos;re committed 
            to breaking down barriers and creating opportunities for the next generation of female leaders 
            in technology.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Do</h2>
          <p className="text-gray-600 mb-6">
            Through inspiring stories, hands-on learning resources, and comprehensive educational programs, 
            we provide young women with the tools, knowledge, and confidence they need to succeed in STEM. 
            Our platform offers everything from beginner-friendly courses to advanced robotics projects.
          </p>


        </div>
      </section>
    </div>
  );
} 