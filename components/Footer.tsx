export function Footer() {
  return (
    <>
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
    </>
  );
}
