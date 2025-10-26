javascript
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      videoUrl: "https://example.com/testimonial-1.mp4",
      thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
      name: "Sarah Mitchell",
      title: "Marketing Manager",
      quote: "I've tried other gyms before, but the instructors here actually remember your name and check your form. I finally feel confident doing exercises I used to skip."
    },
    {
      id: 2,
      videoUrl: "https://example.com/testimonial-2.mp4",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      name: "Marcus Chen",
      title: "Software Developer",
      quote: "The 6am classes fit perfectly before work, and I love that they're small groups. I'm not just another face in a crowded room—the trainers actually adjust things for my shoulder injury."
    },
    {
      id: 3,
      videoUrl: "https://example.com/testimonial-3.mp4",
      thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
      name: "Jennifer Okafor",
      title: "High School Teacher",
      quote: "After having two kids, I needed something that didn't feel intimidating. The beginner-friendly classes helped me rebuild strength without feeling overwhelmed or judged."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">
            Real Stories from Our Members
          </h2>
          <p className="text-lg text-slate-600">
            Hear directly from people who've made fitness a sustainable part of their lives
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-colors duration-300 flex items-center justify-center">
                  <button
                    className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300"
                    aria-label={`Play testimonial from ${testimonial.name}`}
                  >
                    <svg
                      className="w-7 h-7 text-slate-900 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  1:24
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <blockquote className="text-slate-700 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <span className="text-slate-600 font-medium text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Join hundreds of members who've found their fitness home
          </p>
          <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-colors duration-300 shadow-sm hover:shadow-md">
            Start Your Free Trial
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}