import { Search, FileText, Rocket, Users } from "lucide-react";

interface WorkflowStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function WorkflowStep({ step, title, description, icon }: WorkflowStepProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {/* Step Number */}
      <div className="relative">
        <div className="w-16 h-16 bg-cyan rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-cyan/20">
          {step}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3 max-w-sm">
        <h3 
          className="text-xl md:text-2xl font-bold text-graphite"
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

export function HowItWorksSection() {
  const workflowSteps = [
    {
      step: 1,
      title: "Discovery",
      description: "We dive into your goals, audience, and funnel—free initial review, no commitment.",
      icon: <Search className="w-4 h-4 text-white" />
    },
    {
      step: 2,
      title: "Blueprint",
      description: "You get a custom lead gen system mapped to your needs: modular, self-hosted, built for growth.",
      icon: <FileText className="w-4 h-4 text-white" />
    },
    {
      step: 3,
      title: "Deploy & Optimise",
      description: "We launch your engine, dial in the campaigns, and automate reporting—transparent, operator-led.",
      icon: <Rocket className="w-4 h-4 text-white" />
    },
    {
      step: 4,
      title: "Handover or Ongoing",
      description: "Keep us as your operators or take full ownership with docs, dashboards, and support.",
      icon: <Users className="w-4 h-4 text-white" />
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
            Plug In. Scale Up. Own It.
          </h2>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {workflowSteps.map((step, index) => (
            <WorkflowStep
              key={index}
              step={step.step}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>

        {/* Connecting Lines (Desktop Only) */}
        <div className="hidden lg:block relative mt-16">
          <div className="absolute top-8 left-1/4 w-1/2 h-0.5 bg-cyan/30"></div>
          <div className="absolute top-8 left-3/4 w-1/2 h-0.5 bg-cyan/30"></div>
          <div className="absolute top-8 left-1/2 w-1/2 h-0.5 bg-cyan/30 transform -translate-x-full"></div>
        </div>
      </div>
    </section>
  );
} 