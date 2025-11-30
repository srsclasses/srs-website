import Link from 'next/link';

export default function BpscEnglishPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
              English Medium
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              BPSC Complete Course (English)
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Ace the Bihar Public Service Commission exams with our structured English medium curriculum. Expert guidance at every step.
            </p>
            
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-gray-700">Comprehensive English Study Material</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-gray-700">Interactive Live Classes</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-gray-700">Mock Tests & Performance Analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-gray-700">One-on-One Mentorship</span>
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
             <div className="h-full w-full rounded-xl bg-blue-50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Course Modules</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Ancient, Medieval & Modern History</li>
                  <li>• Indian Polity & Constitution</li>
                  <li>• Geography of India & World</li>
                  <li>• Economy & Budget</li>
                  <li>• Science & Technology</li>
                  <li>• Bihar Special GK</li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
