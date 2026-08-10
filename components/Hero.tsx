export function Hero() {
  return (
    <>
      {/* HERO */}
      <section class="hero">
        <svg
          class="stars"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* sparse starfield */}
          <g fill="#F4F1E8">
            <circle cx="80" cy="60" r="1" opacity="0.5" />
            <circle cx="220" cy="140" r="1.2" opacity="0.4" />
            <circle cx="360" cy="40" r="0.9" opacity="0.5" />
            <circle cx="500" cy="200" r="1" opacity="0.3" />
            <circle cx="140" cy="320" r="1.1" opacity="0.4" />
            <circle cx="60" cy="480" r="0.9" opacity="0.5" />
            <circle cx="300" cy="560" r="1" opacity="0.3" />
            <circle cx="900" cy="80" r="1.2" opacity="0.5" />
            <circle cx="1050" cy="180" r="0.9" opacity="0.4" />
            <circle cx="1200" cy="60" r="1" opacity="0.3" />
            <circle cx="1300" cy="260" r="1.1" opacity="0.5" />
            <circle cx="1380" cy="420" r="0.9" opacity="0.4" />
            <circle cx="1150" cy="480" r="1" opacity="0.3" />
            <circle cx="980" cy="600" r="1.1" opacity="0.4" />
            <circle cx="700" cy="700" r="0.9" opacity="0.3" />
            <circle cx="450" cy="780" r="1" opacity="0.4" />
            <circle cx="60" cy="700" r="1" opacity="0.35" />
            <circle cx="1250" cy="700" r="1.2" opacity="0.4" />
          </g>
        </svg>

        <div class="wrap hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">NETWORK DESIGN &amp; SUPPORT</p>
            <h1>
              Infrastructure that runs<br />
              <em>every single day</em> of the year.
            </h1>
            <p>
              Sidereal 365 designs, builds, and repairs the copper, fiber, and
              wireless networks that keep your business connected — plus the
              phone systems and security cameras that run on top of them.
            </p>
            <div class="hero-actions">
              <a href="#contact" class="btn btn-primary">Request a Quote</a>
              <a href="#services" class="btn btn-outline">View Services</a>
            </div>
            <div class="hero-stats">
              <div class="hero-stat">
                <b>24/7</b>
                <span>Emergency Repair</span>
              </div>
              <div class="hero-stat">
                <b>3</b>
                <span>Cable Technologies</span>
              </div>
              <div class="hero-stat">
                <b>365</b>
                <span>Days of Uptime Focus</span>
              </div>
            </div>
          </div>

          <div class="constellation-wrap">
            <svg
              viewBox="0 0 560 560"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Diagram of a network hub connecting fiber, copper, wireless, telephone, and security camera services"
            >
              {/* connecting lines (base) */}
              <line class="link-line" x1="280" y1="280" x2="120" y2="110" />
              <line class="link-line" x1="280" y1="280" x2="440" y2="90" />
              <line class="link-line" x1="280" y1="280" x2="470" y2="300" />
              <line class="link-line" x1="280" y1="280" x2="400" y2="470" />
              <line class="link-line" x1="280" y1="280" x2="130" y2="450" />
              <line class="link-line" x1="280" y1="280" x2="90" y2="290" />

              {/* animated pulses */}
              <line class="pulse-line" x1="280" y1="280" x2="120" y2="110" />
              <line
                class="pulse-line copperline"
                x1="280"
                y1="280"
                x2="440"
                y2="90"
              />
              <line class="pulse-line" x1="280" y1="280" x2="470" y2="300" />
              <line
                class="pulse-line copperline"
                x1="280"
                y1="280"
                x2="400"
                y2="470"
              />
              <line class="pulse-line" x1="280" y1="280" x2="130" y2="450" />
              <line
                class="pulse-line copperline"
                x1="280"
                y1="280"
                x2="90"
                y2="290"
              />

              {/* hub */}
              <circle class="hub-pulse" cx="280" cy="280" r="30" />
              <circle class="hub-core" cx="280" cy="280" r="26" />
              <text
                x="280"
                y="285"
                text-anchor="middle"
                class="node-label"
                fill="#4FD8E0"
                font-size="10"
              >
                HUB
              </text>

              {/* node: fiber */}
              <circle class="node-dot" cx="120" cy="110" r="22" />
              <path
                class="node-icon"
                d="M111 110 Q120 96 129 110 Q120 124 111 110"
                transform="translate(0,0)"
              />
              <text x="120" y="145" text-anchor="middle" class="node-label">
                Fiber
              </text>

              {/* node: copper/ethernet */}
              <circle class="node-dot" cx="440" cy="90" r="22" />
              <path
                class="node-icon"
                d="M431 90 h6 v-6 h6 v6 h6 v6 h-6 v6 h-6 v-6 h-6z"
              />
              <text x="440" y="125" text-anchor="middle" class="node-label">
                Copper
              </text>

              {/* node: wifi */}
              <circle class="node-dot" cx="470" cy="300" r="22" />
              <path
                class="node-icon"
                d="M460 305 a14 14 0 0 1 20 0 M464 300 a8 8 0 0 1 12 0 M470 297 v6"
              />
              <text x="470" y="335" text-anchor="middle" class="node-label">
                Wireless
              </text>

              {/* node: PBX phone */}
              <circle class="node-dot" cx="400" cy="470" r="22" />
              <path
                class="node-icon"
                d="M392 462c2 8 8 14 16 16l3-5c1-2 3-2 5-1l6 3c2 1 3 3 2 5l-2 4c-1 2-3 3-5 3-16-1-29-14-30-30 0-2 1-4 3-5l4-2c2-1 4 0 5 2l3 6c1 2 1 4-1 5z"
              />
              <text x="400" y="505" text-anchor="middle" class="node-label">
                PBX
              </text>

              {/* node: camera */}
              <circle class="node-dot" cx="130" cy="450" r="22" />
              <path
                class="node-icon"
                d="M118 445h9l3-4h8l3 4h4v14h-27z M132 452a5 5 0 1 0 0.1 0"
              />
              <text x="130" y="485" text-anchor="middle" class="node-label">
                Cameras
              </text>

              {/* node: design/support */}
              <circle class="node-dot" cx="90" cy="290" r="22" />
              <path
                class="node-icon"
                d="M83 297l14-14 M91 289l4 4-2 2-4-4z M96 283l4-4"
              />
              <text x="90" y="325" text-anchor="middle" class="node-label">
                Design
              </text>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
