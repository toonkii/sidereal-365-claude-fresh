export function Services() {
  return (
    <>
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
                Single-mode and multi-mode fiber runs, splicing, and termination
                for high-bandwidth, long-distance, and future-proof connections.
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
                Access point placement, channel planning, and site surveys that
                eliminate dead zones and interference.
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
                Topology planning, capacity forecasting, and ongoing support for
                networks that are built to scale with you.
              </p>
              <span class="service-tag">Design · Improve · Repair</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
