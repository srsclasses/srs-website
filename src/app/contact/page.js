export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Get in Touch
            </h1>
            <p className="text-lg text-foreground/70">
              Have questions? We'd love to hear from you. Here's how you can reach us.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mx-auto max-w-lg rounded-2xl bg-background p-8 shadow-sm border border-foreground/10">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Address</h3>
                  <p className="text-foreground/70">The SRS Classes, 3rd floor Central Bank Building, NayaTola, Patna, Bihar, India (800001)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <p className="text-foreground/70">teamsrs26@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Phone</h3>
                  <p className="text-foreground/70">+91 97175 27200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
