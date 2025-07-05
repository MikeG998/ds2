import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  children?: React.ReactNode; // For DashboardVisual component
}

export function HeroSection({ children }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Brand Gradient: Process Cyan to Electric Teal at 135° */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #24D1C6 0%, #1BA3A0 100%)',
      }} />
      {/* 30% Gunmetal overlay for contrast */}
      <div className="absolute inset-0" style={{
        background: 'rgba(24, 26, 27, 0.3)',
      }} />
      <section className="relative z-10 w-full">
        <div className="container mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline & CTA */}
          <div className="space-y-8">
            <h1
              className="text-5xl md:text-6xl font-bold"
              style={{
                fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
                letterSpacing: '-0.01em',
                color: '#181A1B',
                lineHeight: 1.1,
              }}
            >
              Book More Meetings.<br />Win More Deals.
            </h1>
            <p
              className="text-xl"
              style={{
                fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                color: '#2D333A',
                fontSize: '20px',
                lineHeight: 1.3,
              }}
            >
              Proven systems, real partnership, and leads that actually close. With modular, transparent solutions and a partner-first approach, we deliver leads that convert.
            </p>
            <Button
              className="shadow-lg px-8 py-4 text-lg font-bold"
              style={{
                fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                background: '#24D1C6',
                color: '#FFF',
                fontSize: '18px',
              }}
            >
              Book a Growth Call
            </Button>
          </div>
          {/* Right: Dashboard Visual */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg border-4 border-[#FFD600] p-8 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4" style={{ color: '#6C47FF' }}>📊</div>
                <p className="text-lg font-bold" style={{ color: '#181A1B', fontFamily: 'Montserrat, system-ui, Arial, sans-serif' }}>Dashboard Visual</p>
                <p className="text-sm opacity-70 mt-2" style={{ color: '#2D333A', fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif' }}>
                  Live metrics, meeting bookings, or pipeline stats
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 