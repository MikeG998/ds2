import { Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-graphite text-body-dark py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 
              className="text-2xl font-bold mb-4"
              style={{
                fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
              }}
            >
              DealSurge.co
            </h3>
            <p 
              className="text-body-dark/80 mb-6 max-w-md"
              style={{
                fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                fontSize: '16px',
                lineHeight: '1.6',
              }}
            >
              Lead generation, engineered for growth. Proven systems, real partnership, and leads that actually close.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/dealsurge" 
                className="text-body-dark/70 hover:text-body-dark transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/dealsurge" 
                className="text-body-dark/70 hover:text-body-dark transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hello@dealsurge.co" 
                className="text-body-dark/70 hover:text-body-dark transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-lg font-bold mb-4"
              style={{
                fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
              }}
            >
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/services/pay-per-lead" 
                  className="text-body-dark/70 hover:text-body-dark transition-colors"
                  style={{
                    fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                    fontSize: '14px',
                  }}
                >
                  Pay-Per-Lead
                </a>
              </li>
              <li>
                <a 
                  href="/services/revenue-share" 
                  className="text-body-dark/70 hover:text-body-dark transition-colors"
                  style={{
                    fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                    fontSize: '14px',
                  }}
                >
                  Revenue Share
                </a>
              </li>
              <li>
                <a 
                  href="/services/fully-managed" 
                  className="text-body-dark/70 hover:text-body-dark transition-colors"
                  style={{
                    fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                    fontSize: '14px',
                  }}
                >
                  Fully Managed
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 
              className="text-lg font-bold mb-4"
              style={{
                fontFamily: 'Montserrat, system-ui, Arial, sans-serif',
              }}
            >
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/about" 
                  className="text-body-dark/70 hover:text-body-dark transition-colors"
                  style={{
                    fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                    fontSize: '14px',
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-body-dark/70 hover:text-body-dark transition-colors"
                  style={{
                    fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                    fontSize: '14px',
                  }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  className="text-body-dark/70 hover:text-body-dark transition-colors"
                  style={{
                    fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                    fontSize: '14px',
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="text-body-dark/70 hover:text-body-dark transition-colors"
                  style={{
                    fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
                    fontSize: '14px',
                  }}
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gunmetal mt-8 pt-8 text-center">
          <p 
            className="text-body-dark/60"
            style={{
              fontFamily: 'IBM Plex Sans, Montserrat, system-ui, Arial, sans-serif',
              fontSize: '14px',
            }}
          >
            © {currentYear} DealSurge.co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 