import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PlaybookCTASection() {
  return (
    <section className="py-16 md:py-24 bg-slate">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-graphite mb-6"
              style={{
                fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
                letterSpacing: '-0.01em',
              }}
            >
              Get the Real Playbook—Steal Our Lead Gen Systems
            </h2>
            
            <p 
              className="text-lg md:text-xl text-gunmetal max-w-3xl mx-auto leading-relaxed"
              style={{
                fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
              }}
            >
              Every week, we break down the exact systems, workflows, and campaigns that drive real results for UK & EU businesses. No recycled "growth hacks," no theory—just step-by-step teardowns, live data, and templates you can use now.
            </p>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-start space-x-3 text-left">
              <div className="flex-shrink-0 w-2 h-2 bg-pink rounded-full mt-2"></div>
              <p 
                className="text-gunmetal"
                style={{
                  fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                  fontSize: '16px',
                }}
              >
                Behind-the-scenes automations, dashboards, and AI workflows
              </p>
            </div>
            
            <div className="flex items-start space-x-3 text-left">
              <div className="flex-shrink-0 w-2 h-2 bg-pink rounded-full mt-2"></div>
              <p 
                className="text-gunmetal"
                style={{
                  fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                  fontSize: '16px',
                }}
              >
                Real metrics, not marketing fairy tales
              </p>
            </div>
            
            <div className="flex items-start space-x-3 text-left">
              <div className="flex-shrink-0 w-2 h-2 bg-pink rounded-full mt-2"></div>
              <p 
                className="text-gunmetal"
                style={{
                  fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                  fontSize: '16px',
                }}
              >
                Templates, SOPs, and proven cold outreach scripts
              </p>
            </div>
            
            <div className="flex items-start space-x-3 text-left">
              <div className="flex-shrink-0 w-2 h-2 bg-pink rounded-full mt-2"></div>
              <p 
                className="text-gunmetal"
                style={{
                  fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                  fontSize: '16px',
                }}
              >
                Zero sales fluff—just actionable, operator-level value
              </p>
            </div>
          </div>

          {/* CTA Form */}
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
            <div className="mb-8">
              <p 
                className="text-xl font-bold text-graphite mb-4"
                style={{
                  fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
                }}
              >
                Want in? Get the Playbook—free.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                required
              />
              <Button 
                type="submit"
                className="bg-pink hover:bg-pink/90 text-white font-bold px-8 py-2"
                style={{
                  fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
                  fontSize: '18px',
                  letterSpacing: '0.02em',
                }}
              >
                Send Me the Next Playbook
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 