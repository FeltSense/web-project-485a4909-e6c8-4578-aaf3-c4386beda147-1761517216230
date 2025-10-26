typescript
export default function Pricing() {
  const plans = [
    {
      name: "Flex",
      price: "49",
      description: "Perfect for getting started on your fitness journey",
      features: [
        "8 classes per month",
        "Access to all fitness disciplines",
        "Open gym access (off-peak hours)",
        "Mobile app with class booking",
        "Complimentary fitness assessment",
        "Guest pass (1 per month)",
      ],
      cta: "Start Flex Plan",
      popular: false,
    },
    {
      name: "Unlimited",
      price: "89",
      description: "Our most popular plan for dedicated fitness enthusiasts",
      features: [
        "Unlimited classes per month",
        "Access to all 50+ weekly classes",
        "24/7 open gym access",
        "Priority class booking",
        "2 personal training sessions/month",
        "Nutrition consultation (quarterly)",
        "Guest passes (4 per month)",
        "Locker rental included",
      ],
      cta: "Go Unlimited",
      popular: true,
    },
    {
      name: "Elite",
      price: "149",
      description: "Premium experience with personalized coaching",
      features: [
        "Everything in Unlimited, plus:",
        "6 personal training sessions/month",
        "Customized workout programming",
        "Monthly body composition analysis",
        "Nutrition coaching & meal planning",
        "Recovery suite access (sauna, cold plunge)",
        "Unlimited guest passes",
        "Exclusive workshops & seminars",
        "Dedicated member concierge",
      ],
      cta: "Elevate to Elite",
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Flexible Membership Plans
          </h2>
          <p className="text-lg text-slate-600">
            No long-term contracts. Cancel anytime. All plans include access to our certified trainers and state-of-the-art facilities.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? "shadow-xl scale-105 border-2 border-slate-900"
                  : "shadow-md hover:shadow-lg border border-slate-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 text-sm mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-slate-900">
                      ${plan.price}
                    </span>
                    <span className="text-slate-600">/month</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold transition-all duration-200 mb-8 ${
                    plan.popular
                      ? "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    What's Included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <svg
                          className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="text-slate-600 text-sm leading-relaxed">
            All memberships include a 7-day free trial. No credit card required to start. 
            <span className="block mt-2">
              Corporate and family plans available.{" "}
              <a href="#" className="text-slate-900 font-semibold hover:underline">
                Contact us
              </a>{" "}
              for custom pricing.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}