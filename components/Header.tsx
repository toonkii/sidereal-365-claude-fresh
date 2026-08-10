export function Header() {
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
                {/* <li>
                  <a href="#testimonials">Testimonials</a>
                </li> */}
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
    </>
  );
}
