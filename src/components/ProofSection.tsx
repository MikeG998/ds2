import { Badge } from "@/components/ui/badge";

interface ProofCardProps {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

function ProofCard({ title, description, stat, statLabel }: ProofCardProps) {
  return (
    <div className="bg-slate rounded-lg p-6 md:p-8 border border-slate/50">
      <div className="space-y-4">
        <h3 
          className="text-xl md:text-2xl font-bold text-graphite"
          style={{
            fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
          }}
        >
          {title}
        </h3>
        
        <p 
          className="text-graphite leading-relaxed"
          style={{
            fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
            fontSize: '16px',
            lineHeight: '1.6',
          }}
        >
          {description}
        </p>
        
        <div className="pt-4">
          <Badge 
            className="bg-lime text-graphite font-bold px-3 py-1 text-sm"
            style={{
              fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
            }}
          >
            {stat}
          </Badge>
          <p className="text-sm text-gunmetal mt-2 font-medium">
            {statLabel}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProofSection() {
  const proofData = [
    {
      title: "Online Education Platform",
      description: "High-intent leads for online learning and workshops. Optimised paid traffic for qualified signups. Increased inquiries into the business by 470% within 60 days.",
      stat: "470%",
      statLabel: "Increase in inquiries within 60 days"
    },
    {
      title: "Financial Services",
      description: "Scaled claim generation and Google Ads from scratch. Dropped CPA from £110 to £55 in 90 days, doubling the amount of business they received.",
      stat: "50%",
      statLabel: "CPA reduction in 90 days"
    },
    {
      title: "Online Coaching",
      description: "Built an engaged audience in the personal growth and coaching space with organic and paid channels. We achieved a CPA of £1.24 which the business engages into sales of high ticket coaching.",
      stat: "£1.24",
      statLabel: "CPA for high-ticket coaching leads"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-graphite mb-6"
            style={{
              fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
              letterSpacing: '-0.01em',
            }}
          >
            Real Experience. Proven Systems.
          </h2>
          
          <p 
            className="text-lg md:text-xl text-gunmetal max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
            }}
          >
            From online education to financial services and beyond, we've delivered, managed, and optimised lead generation—hands-on, not just in theory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {proofData.map((item, index) => (
            <ProofCard
              key={index}
              title={item.title}
              description={item.description}
              stat={item.stat}
              statLabel={item.statLabel}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p 
            className="text-gunmetal font-medium"
            style={{
              fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
            }}
          >
            Every project fully documented, transparent, and built for results you can see.
          </p>
        </div>
      </div>
    </section>
  );
} 