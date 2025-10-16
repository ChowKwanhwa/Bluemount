import { Facebook, Instagram, Twitter, Github, Mail, MapPin, Globe } from "lucide-react"

// Custom Medium icon component
const MediumIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
)

const data = {
  websiteLink: "https://bluemount.xyz",
  twitterLink: "https://x.com/BMFxyz",
  mediumLink: "https://bluemountholdings.medium.com/",
  services: {
    assetManagement: "/asset-management",
    securities: "/securities-trading",
    creditServices: "/credit-services",
    digitalAssets: "/digital-asset-treasury",
  },
  about: {
    story: "/about-us",
    team: "/our-team",
    licenses: "/licenses-compliance",
    careers: "/careers",
  },
  help: {
    faqs: "/faqs",
    support: "/support",
    forms: "/client-forms",
  },
  contact: {
    email: "cs@bluemount.xyz",
    address: "1875 Century Park East, Suite 1200, Los Angeles, CA 90067, United States",
  },
  company: {
    name: "Bluemount Holdings",
    description:
      "Pioneering digital asset treasury solutions and comprehensive financial services for the next generation of wealth management across Asia-Pacific markets.",
  },
}

const socialLinks = [
  { icon: Twitter, label: "X (Twitter)", href: data.twitterLink },
  { icon: Globe, label: "Website", href: data.websiteLink },
  { icon: MediumIcon, label: "Medium", href: data.mediumLink },
]

const aboutLinks = [
  { text: "About Us", href: data.about.story },
  { text: "Our Team", href: data.about.team },
  { text: "Licenses & Compliance", href: data.about.licenses },
  { text: "Careers", href: data.about.careers },
]

const serviceLinks = [
  { text: "Asset Management", href: data.services.assetManagement },
  { text: "Securities Trading", href: data.services.securities },
  { text: "Credit Services", href: data.services.creditServices },
  { text: "Digital Asset Treasury", href: data.services.digitalAssets },
]

const helpfulLinks = [
  { text: "FAQs", href: data.help.faqs },
  { text: "Support", href: data.help.support },
  { text: "Client Forms", href: data.help.forms },
]

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: MapPin, text: data.contact.address, isAddress: true },
]

export default function Footer() {
  return (
    <>
      <style>{`
        .ai-footer {
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .ai-footer::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #4846BE;
          filter: blur(140px);
          height: 60%;
          width: 50%;
          position: absolute;
          top: 20%;
          left: -25%;
          z-index: 0;
        }

        .ai-footer::after {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.2;
          background: #cb4b16;
          filter: blur(120px);
          height: 40%;
          width: 40%;
          position: absolute;
          bottom: 10%;
          right: -20%;
          z-index: 0;
        }

        .footer-container {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 30px 30px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 160px;
          margin-bottom: 60px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        .brand-icon {
          width: 50px;
          height: 50px;
          background: #4846BE;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: #002b36;
        }

        .brand-name {
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: 28px;
          color: #ffffff;
          text-transform: uppercase;
        }

        .brand-description {
          font-family: "Lexend";
          font-size: 16px;
          line-height: 1.8;
          color: #aaa;
          margin-bottom: 40px;
          max-width: 400px;
        }

        .social-links {
          display: flex;
          gap: 30px;
        }

        .social-link-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .social-link {
          width: 45px;
          height: 45px;
          background: rgba(211, 54, 130, 0.1);
          border: 1px solid #333;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4846BE;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #4846BE;
          color: #002b36;
          transform: translateY(-2px);
        }

        .social-label {
          font-family: "Lexend";
          font-size: 12px;
          color: #aaa;
          text-align: center;
          white-space: nowrap;
        }

        .footer-links {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          justify-items: center;
        }

        .link-column h3 {
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #4846BE;
          text-transform: uppercase;
          margin: 0 0 25px;
          letter-spacing: 1px;
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-item {
          margin-bottom: 15px;
        }

        .link-item a {
          font-family: "Lexend";
          font-size: 14px;
          color: #aaa;
          text-decoration: none;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .link-item a:hover {
          color: #ffffff;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-icon {
          width: 20px;
          height: 20px;
          color: #4846BE;
          flex-shrink: 0;
        }

        .live-indicator {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .pulse-dot {
          position: relative;
          width: 8px;
          height: 8px;
        }

        .pulse-dot::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #4846BE;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .pulse-dot::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #4846BE;
          border-radius: 50%;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(211, 54, 130, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(211, 54, 130, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(211, 54, 130, 0);
          }
        }

        .footer-bottom {
          border-top: 1px solid #333;
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright {
          font-family: "lexend";
          font-size: 14px;
          color: #aaa;
        }

        .copyright a {
          color: #4846BE;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .copyright a:hover {
          color: #ffffff;
        }

        .footer-legal {
          display: flex;
          gap: 30px;
        }

        .footer-legal a {
          font-family: "Lexend";
          font-size: 14px;
          color: #aaa;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-legal a:hover {
          color: #ffffff;
        }

        /* Responsive Design */
        @media screen and (max-width: 1199px) {
          .footer-container {
            padding: 60px 20px 20px;
          }
          
          .footer-grid {
            gap: 100px;
          }
          
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        @media screen and (max-width: 767px) {
          .footer-container {
            padding: 40px 16px 16px;
          }
          
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          
          .footer-links {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          
          .brand-name {
            font-size: 24px;
          }
          
          .brand-description {
            font-size: 14px;
          }
          
          .social-links {
            gap: 15px;
          }
          
          .social-link {
            width: 40px;
            height: 40px;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
          
          .footer-legal {
            gap: 20px;
          }
        }
      `}</style>

      <footer className="ai-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand-logo">
                <div className="brand-icon">BM</div>
                <span className="brand-name">{data.company.name}</span>
              </div>
              <p className="brand-description">{data.company.description}</p>
              <div className="social-links">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <div key={label} className="social-link-wrapper">
                    <a href={href} className="social-link" aria-label={label} target="_blank" rel="noopener noreferrer">
                      <Icon size={20} />
                    </a>
                    <span className="social-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <div className="link-column">
                <h3>Contact Us</h3>
                <ul className="link-list">
                  {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                    <li key={text} className="link-item">
                      <a href="#" className="contact-item">
                        <Icon className="contact-icon" size={20} />
                        {isAddress ? <address style={{ fontStyle: "normal" }}>{text}</address> : <span>{text}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              &copy; 2025 Bluemount Holdings Inc. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
