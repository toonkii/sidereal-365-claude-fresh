export function Pricing() {
  return (
    <>
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
                BBD$3,500<span>&nbsp;starting</span>
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
                BBD$25,000<span>&nbsp;starting</span>
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
            All quotes include a free on-site assessment. Emergency repair calls
            are billed separately at our standard hourly rate.
          </p>
        </div>
      </section>
    </>
  );
}
