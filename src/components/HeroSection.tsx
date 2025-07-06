'use client';
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import dashboardImg from "@/img/Sales-Dashboard.webp";

interface HeroSectionProps {
  children?: React.ReactNode; // For DashboardVisual component
}

export function HeroSection({ children }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient bg-[length:200%_200%] bg-gradient-to-br from-[#0A7BAE] to-[#2D333A]" />
      {/* Gunmetal Overlay for Contrast */}
      <div className="absolute inset-0" style={{ background: 'rgba(45,51,58,0.45)' }} />
      {/* Optional: Subtle white vignette overlay for depth */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />
      <section className="relative z-10 w-full flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 py-24 grid lg:grid-cols-5 gap-4 items-center relative">
          {/* Left: Headline & CTA in Frosted Glass Card */}
          <div className="relative flex items-center justify-center lg:col-span-2 z-20">
            <div
              className="rounded-xl p-8 max-w-[520px] w-full bg-white/60 backdrop-blur-lg border border-white/30 shadow-2xl"
            >
              <div className="space-y-8">
                <h1
                  className="text-[48px] font-bold"
                  style={{
                    fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
                    letterSpacing: '-0.01em',
                    color: '#181A1B',
                    lineHeight: 1.15,
                  }}
                >
                  Generate More<br />
                  <span>
                    <span className="text-[#10B8EC]">
                      <Typewriter
                        words={["Leads.", "Meetings.", "Calls."]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={90}
                        deleteSpeed={60}
                        delaySpeed={1200}
                      />
                    </span>
                  </span>
                  <br />
                  <span>
                    <span style={{ color: '#181A1B' }}>Close More </span>
                    <span className="text-[#10B8EC]">Deals.</span>
                  </span>
                </h1>
                <div
                  className="text-xl"
                  style={{
                    fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                    color: '#2D333A',
                    fontSize: '20px',
                    lineHeight: 1.4,
                    fontWeight: 400,
                  }}
                >
                  Lead generation designed to scale your business. With hands-on experience across multiple sectors, we adapt, optimise, and deliver leads that result in deals.
                </div>
                <div className="space-y-2 flex flex-col items-center">
                  <Button
                    className="shadow-lg px-8 py-4 text-lg font-bold w-full max-w-xs bg-[#10B8EC] hover:bg-[#0A7BAE]"
                    style={{
                      fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      color: '#FFF',
                      fontSize: '18px',
                      boxShadow: '0 4px 24px 0 rgba(16, 184, 236, 0.18)',
                    }}
                  >
                    Book a Growth Call
                  </Button>
                  <div
                    className="text-center"
                    style={{
                      fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                      fontSize: '14px',
                      color: '#181A1B',
                      fontWeight: 400,
                    }}
                  >
                    15 min growth call
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Dashboard Visual Image Only */}
          <div className="relative flex items-center justify-center lg:col-span-3 -ml-12 z-10">
            <Image
              src={dashboardImg}
              alt="Sales Dashboard Preview"
              width={600}
              height={370}
              style={{ objectFit: 'contain', borderRadius: '0.75rem', transform: 'perspective(1200px) rotateY(-18deg) rotateX(2deg) scale(1.08)' }}
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Tailwind CSS animation for gradient
// Add this to your global CSS:
// @keyframes gradient {
//   0%, 100% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
// }
// .animate-gradient { animation: gradient 16s ease-in-out infinite; } 