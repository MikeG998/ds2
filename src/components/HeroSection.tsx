import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  children?: React.ReactNode; // For DashboardVisual component
}

export function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-graphite leading-tight"
                style={{
                  fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
                  letterSpacing: '-0.01em',
                }}
              >
                Book More Meetings.
                <br />
                Win More Deals.
              </h1>
              
              <p 
                className="text-lg md:text-xl text-gunmetal leading-relaxed max-w-2xl"
                style={{
                  fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                  fontSize: '20px',
                }}
              >
                Proven systems, real partnership, and leads that actually close. With modular, transparent solutions and a partner-first approach, we deliver leads that convert.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-teal hover:bg-teal/90 text-white font-bold px-8 py-4 text-lg"
                style={{
                  fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                }}
              >
                Book a Growth Call
              </Button>
            </div>
          </div>

          {/* Dashboard Visual Placeholder */}
          <div className="relative">
            {children || (
              <div className="bg-slate rounded-lg p-8 border-2 border-dashed border-gunmetal/20 min-h-[400px] flex items-center justify-center">
                <div className="text-center text-gunmetal">
                  <div className="text-4xl mb-4">📊</div>
                  <p className="text-lg font-medium">Dashboard Visual</p>
                  <p className="text-sm opacity-70 mt-2">
                    Live metrics, meeting bookings, or pipeline stats
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 