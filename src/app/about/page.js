import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 border-b border-foreground/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              About SRS Classes
            </h1>
            <p className="text-xl text-foreground/70">
              Empowering students to achieve excellence through quality education and mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="mb-4 text-lg text-foreground/70">
                To provide accessible, high-quality education to every aspirant dreaming of serving the nation. We aim to bridge the gap between potential and success through innovative teaching methodologies and personalized guidance.
              </p>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">Our Vision</h2>
              <p className="mb-4 text-lg text-foreground/70">
                To be the most trusted institute for competitive exam preparation, known for our integrity, student-centric approach, and consistent results. We envision a society where every deserving student has the opportunity to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Story</h2>
            <div className="prose prose-lg mx-auto text-foreground/70">
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


    </div>
  );
}
