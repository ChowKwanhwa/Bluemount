"use client"

import type React from "react"
import { useState, useEffect } from "react"

const PhotographyBanner: React.FC = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isClient, setIsClient] = useState(false)

  const texts = ["EMPOWERS", "DELIVERS"]

  // Generate consistent particle data
  const particleData = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    width: 4 + (i * 7) % 8,
    height: 4 + (i * 5) % 8,
    left: (i * 13) % 100,
    top: (i * 17) % 100,
    duration: 15 + (i * 3) % 20,
    delay: (i * 2) % 10,
  }))

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100
    const currentFullText = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        } else {
          // Finished typing, start deleting after delay
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <>
      <style>{`
        /* Font faces */
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@700&family=Roboto:wght@400&display=swap');

        /* Company branding in hero section */
        .company-branding {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        .company-logo {
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .company-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .company-name {
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: 18px;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Component styles */
        .photography-banner,
        .photography-banner * {
          box-sizing: border-box;
        }
        
        .photography-banner {
          margin: 0;
          background-color: #002b36;
          
          background-image: url("https://www.yudiz.com/codepen/photography-banner/frame.png");
          background-size: cover;
          background-repeat: no-repeat;
          overflow-x: hidden;
          min-height: 100vh;
          width: 100%;
        }

        .photography-banner *::selection {
          background-color: rgba(241, 231, 40, 0.2);
          color: #ffffff;
        }

        .info-section {
          height: 100vh;
          min-height: 780px;
          padding: 0 0 0 30px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          z-index: 1;
          user-select: none;
          overflow: hidden;
        }

        .info-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #4846BE;
          filter: blur(162px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: -40%;
          left: -66%;
          transform: translate(50%, 50%);
          z-index: -1;
        }

        /* Left part */
        .left-part {
          padding: 20px 0 0;
          overflow: hidden;
        }

        .nasdaq-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #4846BE, #6366f1);
          color: #fff;
          padding: 8px 16px;
          border-radius: 25px;
          font-family: "Lexend", sans-serif;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(72, 70, 190, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .nasdaq-icon {
          width: 20px;
          height: 20px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          color: #4846BE;
        }

        .left-part h1 {
          margin: 0;
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(32px, 8vw, 100px);
          line-height: 0.8;
          font-style: normal;
          text-transform: uppercase;
        }

        .left-part h1 .text {
          color: #4846BE;
          display: block;
          height: clamp(70px, 10vw, 90px);
        }

        .left-part h1 .d-flex {
          display: flex;
          align-items: center;
        }

        .left-part h1 .char {
          transform: translateY(0);
          transition: transform 0.5s;
          animation: slideUp 0.3s ease-out forwards;
        }

        .typed-cursor {
          display: none !important;
        }

        @keyframes slideUp {
          from {
            transform: translateY(-515px);
          }
          to {
            transform: translateY(0);
          }
        }

        .left-part p {
          width: 72%;
          margin: 20px 0 0;
          color: #fff;
          font-size: 16px;
          font-style: normal;
          font-weight: normal;
          line-height: 2;
          font-family: "Lexend";
          opacity: 0.8;
        }

        /* Button */
        .book-link {
          margin: 40px 0 0;
          padding: 0;
          border: 0;
          font-size: 56px;
          line-height: 1;
          color: #f1f1f1;
          letter-spacing: 0.25px;
          text-transform: uppercase;
          font-family: "Lexend";
          font-weight: 300;
          font-style: normal;
          display: inline-flex;
          align-items: center;
          gap: 28px;
          position: relative;
          text-decoration: none;
          cursor: pointer;
        }

        .book-link .linktext {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .book-link .linktext::before {
          position: absolute;
          content: "";
          left: 0;
          bottom: 6px;
          width: 100%;
          height: 3px;
          background-color: #ffffff;
          transform: scaleX(1);
          transition: transform 250ms ease-in-out;
          transform-origin: 0 0;
        }

        .book-link:hover .linktext:before {
          transform: scaleX(0);
          transform-origin: 100% 100%;
        }

        .book-link .arrow {
          height: 36px;
          width: 36px;
          top: -5px;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .book-link .arrow::before,
        .book-link .arrow::after {
          position: absolute;
          content: "";
          background-color: #4846BE;
          transition: all ease-in-out 0.35s;
          transform-origin: 0 0;
          border-radius: 30px;
        }

        .book-link .arrow::before {
          height: 2px;
          width: 100%;
          top: 0;
          right: 0;
        }

        .book-link .arrow::after {
          width: 2px;
          height: 100%;
          top: 0;
          right: 0;
        }

        .book-link:hover .arrow::before {
          width: 65%;
        }

        .book-link:hover .arrow::after {
          height: 65%;
        }

        .book-link .arrow span {
          background-color: #4846BE;
          height: 2px;
          width: 100%;
          display: inline-block;
          transform: rotate(-45deg) translate(-3px, -1px);
          transform-origin: right top;
          border-radius: 30px;
          position: relative;
          transition: all ease-in-out 0.35s;
          position: absolute;
          top: 0;
          left: 0;
        }

        .book-link .arrow span::before {
          background-color: #4846BE;
          content: "";
          height: 100%;
          width: 15px;
          left: -15px;
          top: 0;
          position: absolute;
        }

        /* Right part */
        .right-part {
          background-color: transparent;
          height: 588px;
          width: 588px;
          margin: 0 0 0 auto;
          margin-right: -14px;
          display: block;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .right-part::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #4846BE;
          filter: blur(112px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: 50%;
          right: 33%;
          transform: translate(50%, -50%);
          z-index: -1;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .particle {
          position: absolute;
          background: rgba(211, 54, 130, 0.6);
          border-radius: 50%;
          pointer-events: none;
          animation: float linear infinite;
        }

        .particle:nth-child(odd) {
          background: rgba(203, 75, 22, 0.4);
        }

        .particle:nth-child(3n) {
          background: rgba(255, 255, 255, 0.2);
        }

        @keyframes float {
          0% {
            transform: translateX(-100px) translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .bg-line {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 85px;
          z-index: -1;
          overflow: hidden;
          display: flex;
          display: -webkit-flex;
          white-space: nowrap;
        }

        .bg-line img {
          position: relative;
          flex-shrink: 0;
          -webkit-flex-shrink: 0;
          animation: 26s linear infinite;
        }

        .bg-line img:nth-child(1) {
          animation-name: first-text;
        }

        .bg-line img:nth-child(2) {
          animation-name: second-text;
        }

        @keyframes first-text {
          50% {
            transform: translateX(-100%);
            opacity: 1;
          }
          50.05% {
            opacity: 0;
          }
          50.1% {
            transform: translateX(100%);
            opacity: 1;
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes second-text {
          50% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-200%);
          }
          0% {
            transform: translateX(0%);
          }
        }

        .bg-dash-circle {
          position: absolute;
          bottom: -35px;
          right: -13px;
          z-index: -1;
          width: 180px;
          aspect-ratio: 1/1;
        }

        .bg-dash-circle img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center center;
          animation: circle-rotate 18s linear infinite;
        }

        @keyframes circle-rotate {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .hero-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: auto;
          z-index: 2;
          border-radius: 12px;
          opacity: 0.9;
        }

        /* Responsive */
        @media screen and (min-width: 1500px) {
          .info-section {
            padding-left: 120px;
          }
        }

        @media screen and (min-width: 1400px) {
          .info-section {
            padding-left: 100px;
          }
        }

        @media screen and (max-width: 1199px) {
          .bg-line {
            height: 68px;
          }
          .right-part {
            height: 400px;
            width: 400px;
          }
          .right-part .d-flex {
            gap: 20px;
          }
          .bg-dash-circle {
            width: 130px;
          }
        }

        @media screen and (max-width: 767px) {
          .photography-banner {
            overflow-x: hidden;
          }
          
          .info-section {
            display: block;
            padding: 0;
            overflow: visible;
            min-height: auto;
            height: auto;
          }
          
          .bg-line {
            height: 52px;
          }
          
          .left-part {
            padding: 40px 16px 60px;
            overflow: visible;
          }
          
          .right-part {
            height: 334px;
            width: 334px;
            margin: 0 auto;
            margin-right: auto;
          }
          
          .left-part h1 .text {
            height: 88px;
          }
          
          .left-part p {
            font-size: 12px;
            width: 96%;
          }
          
          .bg-dash-circle {
            width: 80px;
          }
        }

        /* Features Section */
        .features-section {
          padding: 100px 30px;
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .features-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #4846BE;
          filter: blur(140px);
          height: 40%;
          width: 40%;
          position: absolute;
          top: 20%;
          right: -20%;
          z-index: -1;
        }

        .features-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 60px;
          align-items: center;
        }

        .features-content h2 {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(60px, 8vw, 120px);
          line-height: 0.9;
          margin: 0 0 30px;
          text-transform: uppercase;
        }

        .features-content h2 .highlight {
          color: #4846BE;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          padding: 25px 0;
          border-bottom: 1px solid #333;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: #4846BE;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          color: #002b36;
          flex-shrink: 0;
        }

        .feature-text h3 {
          color: #fff;
          font-family: "Lexend";
          font-size: 18px;
          margin: 0 0 8px;
          text-transform: uppercase;
        }

        .feature-text p {
          color: #aaa;
          font-family: "monument_extendedregular";
          font-size: 14px;
          margin: 0;
          line-height: 1.6;
        }

        /* Testimonials Section */
        .testimonials-section {
          padding: 100px 30px;
          background-color: #002b36;
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #4846BE;
          filter: blur(120px);
          height: 50%;
          width: 30%;
          position: absolute;
          top: 50%;
          left: -15%;
          transform: translateY(-50%);
          z-index: -1;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .testimonials-title {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(60px, 8vw, 100px);
          line-height: 0.9;
          margin: 0 0 80px;
          text-transform: uppercase;
        }

        /* Replaced grid with marquee scroller */
        .testimonials-marquee {
          display: flex;
          animation: scroll 30s linear infinite;
          gap: 40px;
          width: max-content;
        }

        .testimonials-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 20px;
          padding: 40px 30px;
          position: relative;
          backdrop-filter: blur(10px);
          width: 400px;
          flex-shrink: 0;
        }

        .testimonial-quote {
          color: #fff;
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.8;
          margin: 0 0 30px;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          font-family: "Roboto", sans-serif;
          align-items: center;
          gap: 15px;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #4846BE;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #002b36;
        }

        .author-info h4 {
          color: #cb4b16;
          font-family: "Roboto", sans-serif;
          font-size: 14px;
          margin: 0;
          text-transform: uppercase;
        }

        .author-info p {
          color: #aaa;
          font-family: "Roboto", sans-serif;
          font-size: 12px;
          margin: 5px 0 0;
        }

        /* CTA Section */
        .cta-section {
          padding: 120px 30px;
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.6;
          background: #4846BE;
          filter: blur(180px);
          height: 60%;
          width: 80%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(28px, 8vw, 80px);
          line-height: 1.1;
          margin: 0 0 30px;
          text-transform: uppercase;
          word-wrap: break-word;
          hyphens: auto;
          text-align: center;
        }

        .cta-subtitle {
          color: #4846BE;
          font-family: "lexend";
          font-size: clamp(16px, 4vw, 26px);
          line-height: 1.6;
          margin: 0 0 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          padding: 0 20px;
        }

        .cta-buttons {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 18px 40px;
          background: #4846BE;
          color: #002b36;
          text-decoration: none;
          font-family: "lexend";
          font-size: 16px;
          font-weight: bold;
          text-transform: uppercase;
          border-radius: 50px;
          transition: all 0.3s ease;
          border: 2px solid #4846BE;
        }

        .cta-button:hover {
          background: transparent;
          color: #4846BE;
        }

        .cta-button.secondary {
          background: transparent;
          color: #fff;
          border: 2px solid #fff;
        }

        .cta-button.secondary:hover {
          background: transparent;
          color: #4846BE;
          border: 2px solid #4846BE;
        }

        /* Services Section Styles */
        .services-section {
          background: #073642;
          padding: 100px 20px;
          color: #fff;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .services-title {
          font-family: "lexend";
          font-size: 48px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 60px;
          color: #fff;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(211, 54, 130, 0.3);
          border-radius: 15px;
          padding: 40px 30px;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          background: rgba(211, 54, 130, 0.1);
          border-color: #4846BE;
          transform: translateY(-5px);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          background: #4846BE;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .service-number {
          font-family: "lexend";
          font-size: 20px;
          font-weight: bold;
          color: #002b36;
        }

        .service-card h3 {
          font-family: "lexend";
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 15px;
          color: #fff;
        }

        .service-card p {
          font-family: "lexend";
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 20px;
          color: #93a1a1;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-features li {
          font-family: "lexend";
          font-size: 14px;
          color: #4846BE;
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }

        .service-features li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #4846BE;
          font-weight: bold;
        }

        /* Responsive adjustments for new sections */
        @media screen and (max-width: 1199px) {
          .features-section,
          .testimonials-section,
          .services-section,
          .cta-section {
            padding: 80px 20px;
          }
          .features-container {
            gap: 40px;
          }
          .services-grid {
            gap: 30px;
          }
          .testimonials-marquee {
            gap: 30px;
          }
          .cta-buttons {
            gap: 20px;
          }
        }

        @media screen and (max-width: 767px) {
          .features-section,
          .testimonials-section,
          .services-section,
          .cta-section {
            padding: 60px 16px;
          }
          .features-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .services-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          .service-card {
            padding: 30px 20px;
          }
          .testimonials-marquee {
            gap: 25px;
          }
          .testimonial-card {
            padding: 30px 20px;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

          <div className="photography-banner">
            <main>
              <section className="info-section">
                <div className="left-part">
                  <div className="company-branding">
                    <div className="company-logo"><img src="/Logo.svg" alt="Bluemount Holdings Logo" /></div>
                    <div className="company-name">Bluemount Holdings</div>
                  </div>
                  <div className="nasdaq-badge">
                    <div className="nasdaq-icon">$</div>
                    NASDAQ Listed
                  </div>
                  <h1>
                    <span className="d-flex">
                      {"BLUEMOUNT".split("").map((char, index) => (
                        <span key={index} className="char">
                          {char === " " ? "\u00A0" : char}
                        </span>
                      ))}
                    </span>
                    <span className="text tracking-tighter">{currentText}</span>
                  </h1>
              <p className="lexend tracking-widest">
                Pioneering digital asset treasury solutions and comprehensive financial services for the next generation of wealth management
              </p>
              <a href="https://bluemount.com" className="book-link">
                <span className="linktext tracking-tighter text-3xl">Explore Our Services</span>
                <span className="arrow">
                  <span></span>
                </span>
              </a>
            </div>
            <div className="right-part">
              <img src="/images/ai-startup.png" alt="AI Startup" className="hero-image" />
              <div className="particles-container">
                {isClient && particleData.map((particle) => (
                  <div
                    key={particle.id}
                    className="particle"
                    style={{
                      width: `${particle.width}px`,
                      height: `${particle.height}px`,
                      left: `${particle.left}%`,
                      top: `${particle.top}%`,
                      animationDuration: `${particle.duration}s`,
                      animationDelay: `${particle.delay}s`,
                    }}
                  />
                ))}
              </div>
              <div className="bg-line">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="Line"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="Line"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
              </div>
              <div className="bg-dash-circle">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
                  alt="dash-circle"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <div className="features-container">
              <div className="features-content" style={{ textAlign: 'left', marginRight: '2rem' }}>
                <h2>Why Choose <span className="highlight">Bluemount</span> Holdings?</h2>
              </div>
              <ul className="features-list" style={{ marginLeft: '3rem' }}>
                <li className="feature-item">
                  <div className="feature-icon">01</div>
                  <div className="feature-text">
                    <h3>Market Expertise</h3>
                    <p className="font-light tracking-wider">
                      Investment opportunities across listed stocks, bonds, and private equity with deep Asia-Pacific market knowledge
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">02</div>
                  <div className="feature-text">
                    <h3>Professional Excellence</h3>
                    <p className="tracking-wider">
                      Comprehensive experience in private enterprises, venture capital, investment research and fund management
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">03</div>
                  <div className="feature-text">
                    <h3>Extensive Network</h3>
                    <p className="tracking-wider">
                      Long-term relationships with institutional investors, family offices, high-net-worth individuals and underwriters
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">04</div>
                  <div className="feature-text">
                    <h3>Digital Asset Innovation</h3>
                    <p className="tracking-wider">
                      Pioneering Digital Asset Treasury (DAT) solutions with 24/7 liquidity management and innovative staking mechanisms
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="testimonials-section">
            <div className="testimonials-container">
              <h2 className="testimonials-title">Our IPO Track Record</h2>
              {/* Created marquee with duplicated testimonials */}
              <div className="testimonials-marquee">
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Served as Joint Global Coordinators and Joint Bookrunners for Fusen Pharmaceutical Company Limited, successfully raising HK$600 million in 2018."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">FP</div>
                    <div className="author-info">
                      <h4>Fusen Pharmaceutical</h4>
                      <p>HK$600M IPO</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Successfully acted as Placing Agent for Immuotech Biopharm IPO, raising HK$715 million with strong institutional support in 2020."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">IB</div>
                    <div className="author-info">
                      <h4>Immuotech Biopharm</h4>
                      <p>HK$715M IPO</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Acted as Placing Agent for Shinsun Holdings IPO, demonstrating our expertise in mid-cap offerings with HK$335 million raised."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">SH</div>
                    <div className="author-info">
                      <h4>Shinsun Holdings</h4>
                      <p>HK$335M IPO</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Served as Joint Lead Managers for Xinyuan Property Management Service IPO, raising HK$260 million in the competitive property sector."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">XP</div>
                    <div className="author-info">
                      <h4>Xinyuan Property</h4>
                      <p>HK$260M IPO</p>
                    </div>
                  </div>
                </div>
                {/* Duplicate cards for seamless loop */}
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Served as Joint Global Coordinators and Joint Bookrunners for Fusen Pharmaceutical Company Limited, successfully raising HK$600 million in 2018."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">FP</div>
                    <div className="author-info">
                      <h4>Fusen Pharmaceutical</h4>
                      <p>HK$600M IPO</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Successfully acted as Placing Agent for Immuotech Biopharm IPO, raising HK$715 million with strong institutional support in 2020."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">IB</div>
                    <div className="author-info">
                      <h4>Immuotech Biopharm</h4>
                      <p>HK$715M IPO</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Acted as Placing Agent for Shinsun Holdings IPO, demonstrating our expertise in mid-cap offerings with HK$335 million raised."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">SH</div>
                    <div className="author-info">
                      <h4>Shinsun Holdings</h4>
                      <p>HK$335M IPO</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Served as Joint Lead Managers for Xinyuan Property Management Service IPO, raising HK$260 million in the competitive property sector."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">XP</div>
                    <div className="author-info">
                      <h4>Xinyuan Property</h4>
                      <p>HK$260M IPO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Client Services Section */}
          <section className="services-section">
            <div className="services-container">
              <h2 className="services-title">Professional Client Services</h2>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">
                    <span className="service-number">01</span>
                  </div>
                  <h3>Account Opening</h3>
                  <p>Streamlined onboarding for individual, joint, and corporate accounts with comprehensive documentation support</p>
                  <ul className="service-features">
                    <li>Individual & Joint Accounts</li>
                    <li>Corporate Account Services</li>
                    <li>Professional Investor Status</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <span className="service-number">02</span>
                  </div>
                  <h3>Trading Services</h3>
                  <p>Competitive commission rates starting from 0.25% with transparent fee structure and comprehensive trading support</p>
                  <ul className="service-features">
                    <li>Commission: 0.25% Min. HK$100</li>
                    <li>Online Trading Platform</li>
                    <li>Real-time Quote Service</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <span className="service-number">03</span>
                  </div>
                  <h3>Fund Management</h3>
                  <p>Secure deposit and withdrawal services with multiple banking partners and same-day processing</p>
                  <ul className="service-features">
                    <li>Bank of China & Chong Hing Bank</li>
                    <li>Same-day Processing (before 15:30)</li>
                    <li>Multiple Currency Support</li>
                  </ul>
                </div>
                <div className="service-card">
                  <div className="service-icon">
                    <span className="service-number">04</span>
                  </div>
                  <h3>Corporate Actions</h3>
                  <p>Complete corporate action handling including dividend collection, rights issues, and warrant exercises</p>
                  <ul className="service-features">
                    <li>Dividend Collection (0.2% fee)</li>
                    <li>Rights & Warrant Exercise</li>
                    <li>Share Registration Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="cta-container">
              <h2 className="cta-title text-center">Complete Financial Solutions</h2>
              <p className="cta-subtitle">
                From asset management to credit services, securities trading to digital asset treasury - Bluemount Holdings provides comprehensive financial solutions across all business sectors.
              </p>
              <div className="cta-buttons">
                <a href="https://bluemount.com" className="cta-button">
                  Explore All Services
                </a>
                <a href="https://bluemount.com" className="cta-button secondary">
                  Contact Our Team
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

    </>
  )
}

export default PhotographyBanner
