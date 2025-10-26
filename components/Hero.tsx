export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 sm:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(148,163,184,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
            Elevate Fitness Studio
            <span className="block mt-2 text-slate-700">
              Your Complete Fitness Training Facility
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Train on your schedule with 50+ weekly classes spanning strength training, 
            HIIT, yoga, cycling, and boxing. Work with certified trainers who specialize 
            in everything from injury recovery to competition prep.
          </p>
        </div>

        {/* Floating cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
              <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              50+ Weekly Classes
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Multiple daily sessions across strength, cardio, flexibility, and combat disciplines. Morning, lunch, and evening slots available.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
              <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Certified Specialists
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Trainers with credentials in sports medicine, nutrition, Olympic lifting, and rehabilitation. Not just fitness enthusiasts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
              <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Flexible Memberships
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Month-to-month plans with no annual commitment. Pause or cancel anytime. Add personal training sessions as needed.
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#membership"
            className="inline-flex items-center px-8 py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md"
          >
            View Membership Options
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#schedule"
            className="inline-flex items-center px-8 py-3.5 rounded-xl bg-white text-slate-700 font-medium hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm"
          >
            Browse Class Schedule
          </a>
        </div>

        {/* Trust indicator */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 mb-4">Drop-in for a free trial class</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-slate-400 text-xs font-medium">NASM CERTIFIED</div>
            <div className="w-1 h-1 bg-slate-300 rounded-full" />
            <div className="text-slate-400 text-xs font-medium">ACE ACCREDITED</div>
            <div className="w-1 h-1 bg-slate-300 rounded-full" />
            <div className="text-slate-400 text-xs font-medium">OPEN 5AM–10PM</div>
          </div>
        </div>
      </div>
    </section>
  );
}