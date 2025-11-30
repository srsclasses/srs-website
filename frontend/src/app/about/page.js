import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              About SRS Classes
            </h1>
            <p className="text-xl text-gray-600">
              Empowering students to achieve excellence through quality education and mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mb-4 text-lg text-gray-600">
                To provide accessible, high-quality education to every aspirant dreaming of serving the nation. We aim to bridge the gap between potential and success through innovative teaching methodologies and personalized guidance.
              </p>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="mb-4 text-lg text-gray-600">
                To be the most trusted institute for competitive exam preparation, known for our integrity, student-centric approach, and consistent results. We envision a society where every deserving student has the opportunity to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                SRS Classes was founded in 2015 by a group of passionate educators who saw a need for a more structured and supportive approach to competitive exam preparation. Starting with a small batch of 20 students, we have grown into a premier institute guiding thousands of aspirants every year.
              </p>
              <p>
                Over the years, we have constantly evolved our curriculum and teaching methods to keep pace with the changing patterns of exams like BPSC, UPSC, and Bihar Daroga. Our commitment to excellence has resulted in hundreds of selections and countless success stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Meet Our Mentors</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Dr. S.R. Singh", role: "Founder & History Expert", bio: "20+ years of experience in guiding Civil Services aspirants." },
              { name: "Priya Verma", role: "Polity & Governance", bio: "Ex-Civil Servant with a passion for teaching constitution and law." },
              { name: "Rahul Deshmukh", role: "Geography & Environment", bio: "Renowned author and expert in mapping and environmental sciences." },
            ].map((member, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gray-200"></div>
                <h3 className="mb-1 text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-blue-600">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
