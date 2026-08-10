export function Contact() {
  return (
    <>
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
                <a href="tel:+12465550365">(246) 234-9692</a>
              </p>
            </div>
            {/* <div class="contact-info-block">
              <h4>Email</h4>
              <p>
                <a href="mailto:thomas.clarke@sidereal365.com">
                  thomas.clarke@sidereal365.com
                </a>
              </p>
            </div> */}
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
    </>
  );
}
