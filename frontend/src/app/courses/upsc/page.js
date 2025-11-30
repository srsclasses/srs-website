import Link from 'next/link';

export default function UpscPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-800">
              Civil Services
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              UPSC Foundation Course
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              A holistic approach to cracking the Civil Services Examination. Build a strong foundation with our integrated Prelims and Mains preparation.
            </p>
            
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-gray-700">NCERT Foundation Classes</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-gray-700">Daily Answer Writing Practice</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-gray-700">Current Affairs Analysis (The Hindu/Indian Express)</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-gray-700">Essay & Ethics Modules</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-lg bg-blue-600 px-8 py-3 text-center font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Enroll Now
              </button>
              <button className="rounded-lg border border-gray-300 bg-white px-8 py-3 text-center font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200">
                Download Syllabus
              </button>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-xl">
             <div className="h-full w-full rounded-xl bg-purple-50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Key Subjects</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• History & Art and Culture</li>
                  <li>• Geography & Environment</li>
                  <li>• Polity & Governance</li>
                  <li>• Economy & Social Development</li>
                  <li>• Science & Tech</li>
                  <li>• Ethics, Integrity & Aptitude</li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
