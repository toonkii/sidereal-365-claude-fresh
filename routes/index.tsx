import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Home(ctx) {
  return (
    <>
      <header id="siteHeader">
        <div class="wrap nav-row">
          <a href="#top" class="logo">
            <svg class="logo-mark" viewBox="0 0 26 26" fill="none">
              <circle cx="13" cy="13" r="2.4" fill="#4FD8E0" />
              <circle cx="4" cy="6" r="1.6" fill="#C87941" />
              <circle cx="22" cy="5" r="1.6" fill="#C87941" />
              <circle cx="22" cy="21" r="1.6" fill="#C87941" />
              <circle cx="3" cy="20" r="1.6" fill="#C87941" />
              <line
                x1="13"
                y1="13"
                x2="4"
                y2="6"
                stroke="#8A93A6"
                stroke-width="1"
              />
              <line
                x1="13"
                y1="13"
                x2="22"
                y2="5"
                stroke="#8A93A6"
                stroke-width="1"
              />
              <line
                x1="13"
                y1="13"
                x2="22"
                y2="21"
                stroke="#8A93A6"
                stroke-width="1"
              />
              <line
                x1="13"
                y1="13"
                x2="3"
                y2="20"
                stroke="#8A93A6"
                stroke-width="1"
              />
            </svg>
            SIDEREAL 365
          </a>
          <div class="nav-links">
            <nav>
              <ul>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#capability">Approach</a>
                </li>
                <li>
                  <a href="#expertise">Expertise</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            <a href="#contact" class="btn btn-primary">Get a Quote</a>
          </div>
          <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main id="top">
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

        {/* SERVICES */}
        <section class="services" id="services">
          <div class="wrap">
            <div class="section-head">
              <p class="eyebrow">WHAT WE BUILD</p>
              <h2>Every layer of your network, one team.</h2>
              <p>
                From the cable in the wall to the camera on the ceiling, we
                design, install, and support the physical and wireless
                infrastructure your business depends on.
              </p>
            </div>

            <div class="service-grid">
              <div class="service-card">
                <svg class="service-icon" viewBox="0 0 24 24">
                  <path d="M2 12c4-4 16-4 20 0" />
                  <path d="M5 15c3-3 11-3 14 0" />
                  <path d="M9 18c1.5-1.5 4.5-1.5 6 0" />
                  <circle cx="12" cy="21" r="1" />
                </svg>
                <h3>Fiber Optic Networks</h3>
                <p>
                  Single-mode and multi-mode fiber runs, splicing, and
                  termination for high-bandwidth, long-distance, and
                  future-proof connections.
                </p>
                <span class="service-tag">Design · Install · Splice</span>
              </div>
              <div class="service-card">
                <svg class="service-icon" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="6" rx="1" />
                  <rect x="4" y="14" width="16" height="6" rx="1" />
                  <line x1="8" y1="10" x2="8" y2="14" />
                  <line x1="16" y1="10" x2="16" y2="14" />
                </svg>
                <h3>Copper &amp; Ethernet</h3>
                <p>
                  Structured cabling, patch panels, and Cat5e/6/6a runs built to
                  spec for reliable, everyday wired connectivity.
                </p>
                <span class="service-tag">Cat5e · Cat6 · Cat6a</span>
              </div>
              <div class="service-card">
                <svg class="service-icon" viewBox="0 0 24 24">
                  <path d="M2 8c6-6 14-6 20 0" />
                  <path d="M5.5 11.5c4-4 9-4 13 0" />
                  <path d="M9 15c2-2 4-2 6 0" />
                  <circle cx="12" cy="19" r="1.2" />
                </svg>
                <h3>Wi-Fi &amp; Wireless</h3>
                <p>
                  Access point placement, channel planning, and site surveys
                  that eliminate dead zones and interference.
                </p>
                <span class="service-tag">Site Survey · Coverage Mapping</span>
              </div>
              <div class="service-card">
                <svg class="service-icon" viewBox="0 0 24 24">
                  <path d="M6 3h4l1 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 1v4a2 2 0 0 1-2 2C10 20 4 14 4 5a2 2 0 0 1 2-2z" />
                </svg>
                <h3>Telephone (PBX) Systems</h3>
                <p>
                  On-premise and hybrid PBX installation with extension setup,
                  voicemail, and call routing configured to how you work.
                </p>
                <span class="service-tag">VoIP · Analog · Hybrid</span>
              </div>
              <div class="service-card">
                <svg class="service-icon" viewBox="0 0 24 24">
                  <path d="M3 8h6l2-3h2l2 3h6v11H3z" />
                  <circle cx="12" cy="13.5" r="3.2" />
                </svg>
                <h3>Security Cameras</h3>
                <p>
                  IP camera design, cabling, and NVR setup for coverage that's
                  placed with intent, not guesswork.
                </p>
                <span class="service-tag">
                  IP Cameras · NVR · Remote Viewing
                </span>
              </div>
              <div class="service-card">
                <svg class="service-icon" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3.5 2" />
                </svg>
                <h3>Network Design &amp; Support</h3>
                <p>
                  Topology planning, capacity forecasting, and ongoing support
                  for networks that are built to scale with you.
                </p>
                <span class="service-tag">Design · Improve · Repair</span>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITY / APPROACH */}
        <section id="capability">
          <div class="wrap">
            <div class="section-head">
              <p class="eyebrow">HOW WE WORK</p>
              <h2>Whatever state your network is in, we meet it there.</h2>
              <p>
                Whether you're starting from nothing, growing out of what you
                have, or dealing with a network that's currently down, our
                approach starts with what's actually in front of us.
              </p>
            </div>

            <div class="capability-grid">
              <div class="capability-card">
                <span class="capability-mark">NEW BUILD</span>
                <h3>Design New Networks</h3>
                <p>
                  We plan topology, cabling paths, and equipment specs from the
                  ground up — sized for what you need today and where you're
                  headed next.
                </p>
              </div>
              <div class="capability-card">
                <span class="capability-mark">UPGRADE</span>
                <h3>Improve Existing Networks</h3>
                <p>
                  Slow, unreliable, or outgrown networks get audited,
                  re-engineered, and upgraded without disrupting the operations
                  running on them.
                </p>
              </div>
              <div class="capability-card">
                <span class="capability-mark">RESTORE</span>
                <h3>Repair When Damaged</h3>
                <p>
                  Cut cables, failed hardware, storm damage, or dropped
                  connections — we diagnose the fault and get you back online
                  fast.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section class="expertise" id="expertise">
          <div class="wrap">
            <div class="section-head">
              <p class="eyebrow">CREDENTIALS</p>
              <h2>Licensed, certified, and hands in the conduit.</h2>
            </div>

            <div class="expertise-layout">
              <div class="expertise-copy">
                <p>
                  Every technician we send on-site is trained on the standards
                  that govern structured cabling, fiber splicing, and
                  low-voltage work — not just familiar with them. That's what
                  keeps installs passing inspection and staying reliable years
                  later.
                </p>
                <div class="expertise-years">
                  <b>12+</b>
                  <span>
                    Years designing &amp; repairing commercial networks
                  </span>
                </div>
              </div>

              <div class="credential-grid">
                <div class="credential-card">
                  <svg class="credential-icon" viewBox="0 0 24 24">
                    <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
                    <polyline points="8.5 12 11 14.5 15.5 9.5" />
                  </svg>
                  <div>
                    <h4>BICSI Certified Installers</h4>
                    <p>
                      Structured cabling design and installation held to
                      industry standard.
                    </p>
                  </div>
                </div>
                <div class="credential-card">
                  <svg class="credential-icon" viewBox="0 0 24 24">
                    <path d="M4 3h13l3 3v15H4z" />
                    <path d="M9 3v6h7V3" />
                  </svg>
                  <div>
                    <h4>Licensed &amp; Bonded Contractor</h4>
                    <p>
                      Low-voltage licensing for every jurisdiction we operate
                      in.
                    </p>
                  </div>
                </div>
                <div class="credential-card">
                  <svg class="credential-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                  </svg>
                  <div>
                    <h4>Fusion Splicing Certified</h4>
                    <p>
                      In-house fiber splicing and termination, tested and
                      documented.
                    </p>
                  </div>
                </div>
                <div class="credential-card">
                  <svg class="credential-icon" viewBox="0 0 24 24">
                    <path d="M4 4h16v12H4z" />
                    <path d="M2 20h20" />
                    <path d="M9 8h6M9 11h4" />
                  </svg>
                  <div>
                    <h4>Multi-Vendor Trained</h4>
                    <p>
                      Certified across Cisco, Ubiquiti, and Fortinet equipment
                      lines.
                    </p>
                  </div>
                </div>
                <div class="credential-card">
                  <svg class="credential-icon" viewBox="0 0 24 24">
                    <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
                    <path d="M12 8v4l3 2" />
                  </svg>
                  <div>
                    <h4>OSHA 10 Safety Certified</h4>
                    <p>
                      Every field tech trained on active-jobsite safety
                      protocol.
                    </p>
                  </div>
                </div>
                <div class="credential-card">
                  <svg class="credential-icon" viewBox="0 0 24 24">
                    <path d="M3 12l3-3 4 4 8-8 3 3" />
                    <path d="M3 19h18" />
                  </svg>
                  <div>
                    <h4>Fully Insured</h4>
                    <p>
                      $2M general liability coverage on every job we take on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team">
          <div class="wrap">
            <div class="section-head">
              <p class="eyebrow">THE CREW</p>
              <h2>The people who show up at your site.</h2>
              <p>
                A small, senior team — not a rotating cast of subcontractors.
                You'll know who's coming before the van pulls up.
              </p>
            </div>

            <div class="team-grid">
              <div class="team-card">
                <div class="team-avatar">EV</div>
                <h3>Elena Vasquez</h3>
                <span class="team-role">
                  Founder &amp; Lead Network Engineer
                </span>
                <p>
                  Designs topology and capacity plans for every new build and
                  multi-site rollout.
                </p>
              </div>
              <div class="team-card">
                <div class="team-avatar">TO</div>
                <h3>Tomas Okafor</h3>
                <span class="team-role">Field Operations Manager</span>
                <p>
                  Runs job-site logistics and keeps installs on schedule without
                  disrupting your team.
                </p>
              </div>
              <div class="team-card">
                <div class="team-avatar">SL</div>
                <h3>Priya Sharma-Lund</h3>
                <span class="team-role">Fiber Splicing Lead</span>
                <p>
                  Owns every fusion splice and termination, from backbone runs
                  to final testing.
                </p>
              </div>
              <div class="team-card">
                <div class="team-avatar">RB</div>
                <h3>Rico Bertrand</h3>
                <span class="team-role">Emergency Repair Technician</span>
                <p>
                  First call on the 24/7 line — diagnoses faults and gets sites
                  back online fast.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section class="pricing" id="pricing">
          <div class="wrap">
            <div class="section-head">
              <p class="eyebrow">PRICING</p>
              <h2>Straightforward packages, honest quotes.</h2>
              <p>
                Every site is different, so these are starting points. Final
                pricing depends on square footage, cable runs, and equipment —
                confirmed with a free on-site assessment.
              </p>
            </div>

            <div class="price-grid">
              <div class="price-card">
                <div class="price-name">Essential</div>
                <div class="price-amount">
                  $1,200<span>&nbsp;starting</span>
                </div>
                <p class="price-desc">
                  Small offices getting reliable wired and wireless coverage in
                  place.
                </p>
                <ul class="price-features">
                  <li>
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>Up to 10 drops (copper or ethernet)
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>1–2 Wi-Fi access points
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>Basic network testing &amp; documentation
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>30-day workmanship warranty
                  </li>
                </ul>
                <a href="#contact" class="btn btn-outline">Get This Quote</a>
              </div>

              <div class="price-card featured">
                <div class="price-name">Professional</div>
                <div class="price-amount">
                  $3,800<span>&nbsp;starting</span>
                </div>
                <p class="price-desc">
                  Growing businesses combining fiber, structured cabling, and
                  phone systems.
                </p>
                <ul class="price-features">
                  <li>
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>Fiber or copper backbone install
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>Full-floor Wi-Fi coverage plan
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>PBX system with up to 15 extensions
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>4–8 camera security package
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>1-year workmanship warranty
                  </li>
                </ul>
                <a href="#contact" class="btn btn-primary">Get This Quote</a>
              </div>

              <div class="price-card">
                <div class="price-name">Enterprise</div>
                <div class="price-amount">Custom</div>
                <p class="price-desc">
                  Multi-site or high-complexity builds with dedicated project
                  management.
                </p>
                <ul class="price-features">
                  <li>
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>Multi-site network design
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>Redundant fiber &amp; failover planning
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>Full PBX &amp; camera deployment
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>Priority 24/7 support tier
                  </li>
                </ul>
                <a href="#contact" class="btn btn-outline">Talk to Us</a>
              </div>
            </div>

            <p class="price-note">
              All quotes include a free on-site assessment. Emergency repair
              calls are billed separately at our standard hourly rate.
            </p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials">
          <div class="wrap">
            <div class="section-head">
              <p class="eyebrow">TESTIMONIALS</p>
              <h2>What clients say after the install.</h2>
            </div>

            <div class="testimonial-grid">
              <div class="testimonial-card">
                <div>
                  <div class="stars-row">
                    <svg viewBox="0 0 20 20">
                      <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
                    </svg>
                    <svg viewBox="0 0 20 20">
                      <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
                    </svg>
                    <svg viewBox="0 0 20 20">
                      <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
                    </svg>
                    <svg viewBox="0 0 20 20">
                      <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
                    </svg>
                    <svg viewBox="0 0 20 20">
                      <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
                    </svg>
                  </div>
                  <p>
                    "They re-cabled our whole warehouse over a weekend so we
                    didn't lose a single shift. Everything was labeled and
                    documented better than what we started with."
                  </p>
                </div>
                <div class="testimonial-person">
                  <div class="avatar">MR</div>
                  <div>
                    <b>Marcus Reyes</b>
                    <span>Operations Manager, Coastline Freight</span>
                  </div>
                </div>
              </div>

              <div class="testimonial-card">
                <div>
                  <div class="stars-row">
                    <svg viewBox="0 0 20 20">
                      <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
                    </svg>
                    <svg viewBox="0 0 20 20">
                      <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
                    </svg>
                    <svg viewBox="0 0 20 20">
                      <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
                    </svg>
                    <svg viewBox="0 0 20 20">
                      <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
                    </svg>
                    <svg viewBox="0 0 20 20">
                      <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
                    </svg>
                  </div>
                  <p>
                    "Our old wireless had dead spots in half the building.
                    Sidereal did a proper site survey and now coverage is even
                    everywhere, including the back stockroom."
                  </p>
                </div>
                <div class="testimonial-person">
                  <div class="avatar">JT</div>
                  <div>
                    <b>Janelle Torres</b>
                    <span>Owner, Pressed &amp; Co.</span>
                  </div>
                </div>
              </div>

              <div class="testimonial-card">
                <div>
                  <div class="stars-row">
                    <svg viewBox="0 0 20 20">
                      <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
                    </svg>
                    <svg viewBox="0 0 20 20">
                      <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
                    </svg>
                    <svg viewBox="0 0 20 20">
                      <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
                    </svg>
                    <svg viewBox="0 0 20 20">
                      <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
                    </svg>
                    <svg viewBox="0 0 20 20">
                      <polygon points="10,1 12.6,7 19,7.6 14,12 15.5,18.5 10,15 4.5,18.5 6,12 1,7.6 7.4,7" />
                    </svg>
                  </div>
                  <p>
                    "A backhoe cut our fiber line on a Friday afternoon. They
                    had us spliced and back online before end of day. That kind
                    of response is why we keep calling them."
                  </p>
                </div>
                <div class="testimonial-person">
                  <div class="avatar">DK</div>
                  <div>
                    <b>David Kwan</b>
                    <span>IT Lead, Harborview Clinic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section class="contact" id="contact">
          <div class="wrap contact-grid">
            <div>
              <p class="eyebrow">CONTACT US</p>
              <h2 style="margin-top:14px; font-size:clamp(26px,3vw,34px);">
                Tell us what your network needs.
              </h2>
              <p style="color:var(--muted); margin-top:14px; font-size:15px; max-width:400px;">
                Send us a few details and we'll follow up with next steps —
                usually within one business day.
              </p>

              <div class="contact-info-block">
                <h4>Phone</h4>
                <p>
                  <a href="tel:+12465550365">(246) 555-0365</a>
                </p>
              </div>
              <div class="contact-info-block">
                <h4>Email</h4>
                <p>
                  <a href="mailto:hello@sidereal365.com">
                    hello@sidereal365.com
                  </a>
                </p>
              </div>
              <div class="contact-info-block">
                <h4>Hours</h4>
                <p>Mon–Fri, 7:00 AM – 6:00 PM</p>
              </div>

              <div class="emergency-badge">
                <span class="emergency-dot"></span>
                24/7 emergency repair line for active outages
              </div>
            </div>

            <div class="form-panel">
              <form id="contactForm">
                <div class="form-row">
                  <div class="field">
                    <label for="fname">Full Name</label>
                    <input type="text" id="fname" name="fname" required />
                  </div>
                  <div class="field">
                    <label for="fphone">Phone</label>
                    <input type="tel" id="fphone" name="fphone" required />
                  </div>
                </div>
                <div class="field">
                  <label for="femail">Email</label>
                  <input type="email" id="femail" name="femail" required />
                </div>
                <div class="field">
                  <label for="fservice">Service Needed</label>
                  <select id="fservice" name="fservice">
                    <option>Fiber Optic Network</option>
                    <option>Copper / Ethernet Network</option>
                    <option>Wi-Fi / Wireless Design</option>
                    <option>Telephone (PBX) System</option>
                    <option>Security Cameras</option>
                    <option>Network Repair (Urgent)</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>
                <div class="field">
                  <label for="fmessage">Message</label>
                  <textarea
                    id="fmessage"
                    name="fmessage"
                    placeholder="Tell us about your site and what you're looking to do..."
                  >
                  </textarea>
                </div>
                <button type="submit" class="btn btn-primary form-submit">
                  Send Request
                </button>
                <div class="form-success" id="formSuccess">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4FD8E0"
                    stroke-width="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Thanks — we'll be in touch shortly.
                </div>
                <p class="form-note">
                  We reply within one business day. For active outages, call our
                  emergency line.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div class="wrap footer-row">
          <a href="#top" class="logo" style="font-size:15px;">
            <svg
              class="logo-mark"
              width="20"
              height="20"
              viewBox="0 0 26 26"
              fill="none"
            >
              <circle cx="13" cy="13" r="2.4" fill="#4FD8E0" />
              <circle cx="4" cy="6" r="1.6" fill="#C87941" />
              <circle cx="22" cy="5" r="1.6" fill="#C87941" />
              <circle cx="22" cy="21" r="1.6" fill="#C87941" />
              <circle cx="3" cy="20" r="1.6" fill="#C87941" />
              <line
                x1="13"
                y1="13"
                x2="4"
                y2="6"
                stroke="#8A93A6"
                stroke-width="1"
              />
              <line
                x1="13"
                y1="13"
                x2="22"
                y2="5"
                stroke="#8A93A6"
                stroke-width="1"
              />
              <line
                x1="13"
                y1="13"
                x2="22"
                y2="21"
                stroke="#8A93A6"
                stroke-width="1"
              />
              <line
                x1="13"
                y1="13"
                x2="3"
                y2="20"
                stroke="#8A93A6"
                stroke-width="1"
              />
            </svg>
            SIDEREAL 365
          </a>
          <div class="footer-links">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="footer-copy">© 2026 Sidereal 365 Inc.</div>
        </div>
      </footer>

      <script src="app.js" />
    </>
  );
});
