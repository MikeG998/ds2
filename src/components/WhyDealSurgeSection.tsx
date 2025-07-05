export function WhyDealSurgeSection() {
  const benefits = [
    "No SaaS lock-in: 100% self-hosted, full data ownership",
    "Modular by design: Scale what works, swap what doesn't",
    "Transparent, operator-first: Built by practitioners, not consultants",
    "Flexible partnership: Choose a model that fits your business:",
  ];

  const partnershipModels = [
    {
      title: "Pay-Per-Lead",
      description: "Predictable, scalable—pay only for qualified leads delivered. Pay-as-you-go contracts available."
    },
    {
      title: "Revenue Share", 
      description: "90-day pilot with clear budgets and targets. We deliver qualified leads—your team closes, we share the upside."
    },
    {
      title: "Fully Managed",
      description: "Bespoke, all-in. We build, run, and scale everything for you—white-glove operator service."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-graphite mb-8 text-center"
            style={{
              fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
              letterSpacing: '-0.01em',
            }}
          >
            Why DealSurge.co?
          </h2>

          {/* Main Benefits */}
          <div className="space-y-4 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-3 h-3 bg-yellow rounded-full mt-2"></div>
                <p 
                  className="text-gunmetal leading-relaxed"
                  style={{
                    fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.6',
                  }}
                >
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Partnership Models */}
          <div className="space-y-6">
            {partnershipModels.map((model, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-3 h-3 bg-yellow rounded-full mt-2"></div>
                <div className="space-y-2">
                  <h3 
                    className="font-bold text-graphite"
                    style={{
                      fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
                      fontSize: '18px',
                    }}
                  >
                    {model.title}:
                  </h3>
                  <p 
                    className="text-gunmetal leading-relaxed"
                    style={{
                      fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                      fontSize: '16px',
                      lineHeight: '1.6',
                    }}
                  >
                    {model.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 