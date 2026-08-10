export function TeamMembers() {
  return (
    <>
      {/* TEAM MEMBERS */}
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
              <div class="team-avatar">RR</div>
              <h3>Rene Ramdin</h3>
              <span class="team-role">
                Lead Network Engineer
              </span>
              <p>
                Designs topology and capacity plans for every new build and
                multi-site rollout.
              </p>
            </div>
            <div class="team-card">
              <div class="team-avatar">TC</div>
              <h3>Thomas Clarke</h3>
              <span class="team-role">Field Operations Manager</span>
              <p>
                Runs job-site logistics and keeps installs on schedule without
                disrupting your team.
              </p>
            </div>
            <div class="team-card">
              <div class="team-avatar">SL</div>
              <h3>Stevette Lopez</h3>
              <span class="team-role">Fiber Splicing Lead</span>
              <p>
                Owns every termination, from backbone runs to
                final testing.
              </p>
            </div>
            {/* <div class="team-card">
              <div class="team-avatar">RB</div>
              <h3>Rico Bertrand</h3>
              <span class="team-role">Emergency Repair Technician</span>
              <p>
                First call on the 24/7 line — diagnoses faults and gets sites
                back online fast.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
