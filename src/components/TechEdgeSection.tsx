import { Shield, Database, BarChart3, Zap, Scale, Settings } from "lucide-react";

interface TechFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function TechFeature({ icon, title, description }: TechFeatureProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-teal rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 
          className="text-lg font-bold text-graphite"
          style={{
            fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
          }}
        >
          {title}
        </h3>
        <p 
          className="text-gunmetal leading-relaxed"
          style={{
            fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
            fontSize: '16px',
            lineHeight: '1.6',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function TechEdgeSection() {
  const techFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "90% Self-Hosted",
      description: "Run on your infrastructure for full control, privacy, and independence."
    },
    {
      icon: <Database className="w-6 h-6 text-white" />,
      title: "All Your Data in One Place",
      description: "Unified dashboards give you instant insight into every lead and campaign—no spreadsheets, no waiting."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Live Reporting, 24/7",
      description: "Always-on dashboards and notifications. See what's working, spot problems, and move fast."
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Confidential & Accurate",
      description: "No third-party \"black box\"—your pipeline, your numbers, no guesswork."
    },
    {
      icon: <Scale className="w-6 h-6 text-white" />,
      title: "Ready for Scale",
      description: "Modular, future-proof systems—adapt fast as you grow or change direction."
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: "Operator-Grade",
      description: "Every workflow, report, and integration is designed by real operators—so you get actionable insight, not noise."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-graphite mb-6"
              style={{
                fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
                letterSpacing: '-0.01em',
              }}
            >
              The Tech Edge
            </h2>
            
            <p 
              className="text-lg md:text-xl text-gunmetal max-w-3xl mx-auto leading-relaxed mb-8"
              style={{
                fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
              }}
            >
              Your marketing, your data, your decisions—always in your control.
            </p>
          </div>

          {/* Tech Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {techFeatures.map((feature, index) => (
              <TechFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* Closing Statement */}
          <div className="text-center mt-12 md:mt-16">
            <p 
              className="text-xl md:text-2xl font-bold text-graphite"
              style={{
                fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
                letterSpacing: '-0.01em',
              }}
            >
              Faster decisions. Transparent results. Lead generation you truly own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 