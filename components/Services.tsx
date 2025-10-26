'use client'

export default function Services() {
  const [activeTab, setActiveTab] = React.useState('classes');

  const services = {
    classes: {
      title: 'Group Fitness Classes',
      description: 'Over 50 weekly classes designed to challenge, inspire, and transform. From high-intensity interval training to restorative yoga, our diverse schedule ensures you'll find the perfect workout for your goals and fitness level.',
      features: [
        'HIIT & Bootcamp sessions for maximum calorie burn',
        'Yoga & Pilates for flexibility and core strength',
        'Cycling & cardio classes for endurance building',
        'Strength training & functional fitness programs',
        'Dance-based workouts including Zumba & Barre',
        'Small class sizes (max 20) for personalized attention'
      ],
      highlight: '50+ weekly classes across 8+ disciplines'
    },
    training: {
      title: 'Personal Training',
      description: 'Work one-on-one with certified trainers who bring specialized expertise in strength conditioning, athletic performance, injury rehabilitation, and body transformation. Every session is tailored to your unique goals and fitness journey.',
      features: [
        'Customized workout programs based on your goals',
        'Form correction and technique optimization',
        'Nutrition guidance and meal planning support',
        'Progress tracking with regular assessments',
        'Flexible scheduling including early morning & evening',
        'Specialized training: sports performance, pre/postnatal, senior fitness'
      ],
      highlight: 'Certified trainers with 5+ years average experience'
    },
    membership: {
      title: 'Flexible Memberships',
      description: 'No long-term contracts, no hidden fees. Choose the membership that fits your lifestyle with the freedom to pause, upgrade, or cancel anytime. All plans include full access to our facilities and equipment during open hours.',
      features: [
        'Unlimited monthly access with no commitment',
        'Class pack options (5, 10, or 20 classes)',
        'Drop-in rates for occasional visitors',
        'Free guest passes to bring friends',
        'Member-only workshops and wellness events',
        'Discounted rates for students, seniors, and families'
      ],
      highlight: 'Cancel or pause anytime—no questions asked'
    },
    facilities: {
      title: 'Premium Facilities',
      description: 'Train in a space designed for performance and comfort. Our 8,000 sq ft studio features top-tier equipment, dedicated training zones, and amenities that elevate your workout experience from start to finish.',
      features: [
        'State-of-the-art cardio machines with entertainment screens',
        'Full range of free weights and resistance equipment',
        'Dedicated functional training area with turf zone',
        'Spacious group fitness studio with premium sound system',
        'Clean, modern locker rooms with complimentary toiletries',
        'Smoothie bar and recovery lounge'
      ],
      highlight: 'Equipment refreshed and maintained weekly'
    }
  };

  const tabs = [
    { id: 'classes', label: 'Group Classes', icon: '🏃' },
    { id: 'training', label: 'Personal Training', icon: '💪' },
    { id: 'membership', label: 'Memberships', icon: '🎫' },
    { id: 'facilities', label: 'Facilities', icon: '🏢' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
            Everything You Need to Reach Your Goals
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From beginner-friendly classes to advanced personal training, we provide the expertise, 
            equipment, and environment to help you build strength, confidence, and lasting results.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12 border-b border-slate-200">
          <div className="flex flex-wrap gap-2 -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-6 py-4 text-sm font-medium transition-all duration-300 rounded-t-lg
                  ${activeTab === tab.id
                    ? 'text-slate-900 border-b-2 border-slate-900 bg-white'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }
                `}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {Object.entries(services).map(([key, service]) => (
            <div
              key={key}
              className={`
                transition-all duration-500 ease-in-out
                ${activeTab === key ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'}
              `}
            >
              <div className="p-10 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-3xl font-semibold text-slate-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-slate-50 rounded-full border border-slate-200">
                      <svg className="w-4 h-4 text-slate-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium text-slate-700">
                        {service.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Right Column - Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-6">
                      What's Included
                    </h4>
                    <ul className="space-y-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start group">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mt-0.5 group-hover:bg-slate-200 transition-colors duration-200">
                            <svg className="w-3.5 h-3.5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="ml-3 text-slate-700 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors duration-200 shadow-sm">
                    Get Started Today
                  </button>
                  <button className="px-6 py-3 bg-white text-slate-700 rounded-lg font-medium border border-slate-200 hover:bg-slate-50 transition-colors duration-200">
                    Schedule a Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            First class is always free. No credit card required. 
            <a href="#" className="text-slate-700 font-medium hover:text-slate-900 ml-1 underline underline-offset-2">
              Book your trial →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}