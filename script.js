* {
  box-sizing: border-box;
}

:root {
  --bg: #0b1020;
  --bg-alt: #101a2e;
  --panel: rgba(18, 28, 45, 0.8);
  --panel-strong: #111b2d;
  --card: #ffffff;
  --text: #edf3ff;
  --text-soft: #b6c3d9;
  --muted: #8698ba;
  --primary: #7c5cff;
  --primary-2: #4fd1c5;
  --accent: #ff8a5b;
  --line: rgba(255, 255, 255, 0.08);
  --shadow: 0 20px 50px rgba(7, 11, 20, 0.24);
  --radius: 22px;
  --container: 1180px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 92, 255, 0.2), transparent 28%),
    radial-gradient(circle at top right, rgba(79, 209, 197, 0.18), transparent 24%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea,
select {
  font: inherit;
}

.container {
  width: min(var(--container), calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: 6rem 0;
}

.alt-bg {
  background: rgba(255, 255, 255, 0.02);
  border-block: 1px solid var(--line);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
  background: rgba(11, 16, 32, 0.66);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 1rem;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.logo-mark {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.7rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: white;
  font-size: 1rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.4rem;
  color: var(--text-soft);
  font-size: 0.96rem;
}

.main-nav a:hover {
  color: var(--text);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  border: 1px solid transparent;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
  font-weight: 600;
}

.button:hover {
  transform: translateY(-1px);
}

.button-primary {
  background: linear-gradient(135deg, var(--primary), #5c8dff);
  color: white;
  box-shadow: 0 14px 26px rgba(124, 92, 255, 0.3);
}

.button-secondary {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

.hero {
  padding: 5rem 0 4rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  align-items: center;
}

.eyebrow {
  margin: 0 0 0.8rem;
  color: var(--primary-2);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.76rem;
  font-weight: 700;
}

.hero-copy h1,
.section-heading h2,
.contact-wrap h2 {
  margin: 0;
  letter-spacing: -0.06em;
  line-height: 1.05;
}

.hero-copy h1 {
  font-size: clamp(2.6rem, 5vw, 5rem);
  max-width: 680px;
}

.lead {
  margin-top: 1.2rem;
  max-width: 620px;
  font-size: 1.08rem;
  color: var(--text-soft);
}

.lead.small {
  font-size: 1rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.trust-points {
  margin: 2rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1.8rem;
  padding: 0;
  list-style: none;
  color: var(--text-soft);
  font-size: 0.95rem;
}

.trust-points li::before {
  content: "✓";
  color: var(--primary-2);
  margin-right: 0.5rem;
}

.hero-panel {
  display: grid;
  gap: 1rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.stat-card.highlight {
  background: linear-gradient(135deg, rgba(124, 92, 255, 0.2), rgba(79, 209, 197, 0.12));
}

.label {
  display: block;
  color: var(--text-soft);
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
}

.stat-card strong {
  display: block;
  font-size: clamp(1.3rem, 2vw, 2rem);
  letter-spacing: -0.05em;
  margin-bottom: 0.3rem;
}

.stat-card small,
.mini-metrics small {
  color: var(--text-soft);
}

.mini-metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.mini-metrics > div {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1rem;
}

.mini-metrics span {
  display: block;
  font-weight: 800;
  letter-spacing: -0.05em;
  font-size: 1.4rem;
}

.brands-strip {
  padding: 1.1rem 0 0;
}

.brands-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
}

.brands-inner > span {
  color: var(--text-soft);
  font-size: 0.86rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.brand-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.75rem;
}

.brand-tags span {
  padding: 0.55rem 0.8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  color: var(--text-soft);
  font-size: 0.8rem;
}

.section-heading {
  margin-bottom: 2.5rem;
  max-width: 720px;
}

.section-heading.narrow {
  max-width: 560px;
}

.section-heading h2,
.contact-wrap h2 {
  font-size: clamp(2.1rem, 3vw, 3.2rem);
}

.services-grid,
.process-grid,
.pricing-grid,
.checklist-grid {
  display: grid;
  gap: 1.4rem;
}

.services-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.service-card .icon {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(124, 92, 255, 0.2), rgba(79, 209, 197, 0.2));
  color: var(--primary-2);
  font-weight: 800;
}

.service-card h3,
.price-card h3,
.process-step h3 {
  margin: 0 0 0.8rem;
  font-size: 1.35rem;
  letter-spacing: -0.05em;
}

.service-card p,
.process-step p,
.price-card li,
.check-list li,
.contact-points li,
.contact-card label {
  color: var(--text-soft);
}

.pricing-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.price-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.price-card.featured {
  border-color: rgba(124, 92, 255, 0.5);
  background: linear-gradient(180deg, rgba(124, 92, 255, 0.08), rgba(255, 255, 255, 0.03));
}

.badge {
  display: inline-flex;
  width: fit-content;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-soft);
  border: 1px solid var(--line);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.featured-badge {
  background: rgba(79, 209, 197, 0.12);
  color: var(--primary-2);
  border-color: rgba(79, 209, 197, 0.3);
}

.price {
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1;
  letter-spacing: -0.06em;
  font-weight: 800;
}

.price-card ul,
.check-list,
.contact-points {
  margin: 0;
  padding-left: 1.1rem;
}

.price-card li + li,
.check-list li + li,
.contact-points li + li {
  margin-top: 0.5rem;
}

.price-card .button {
  margin-top: auto;
}

.process-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.process-step {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 1.5rem;
}

.process-step span {
  display: inline-flex;
  width: 2.4rem;
  height: 2.4rem;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(124, 92, 255, 0.12);
  color: #d8d0ff;
  font-weight: 800;
  margin-bottom: 1.2rem;
}

.checklist-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.checklist-col {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 1.6rem;
}

.checklist-col h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  letter-spacing: -0.04em;
}

.check-list {
  list-style: disc;
}

.schedule-box {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  padding: 2rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
}

.schedule-item {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1rem;
}

.schedule-item span {
  display: block;
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  margin-bottom: 0.3rem;
}

.schedule-item p {
  margin: 0;
  color: var(--text-soft);
}

.contact-wrap {
  padding-bottom: 5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 0.95fr;
  gap: 2rem;
  align-items: center;
}

.contact-points {
  margin-top: 1.5rem;
  list-style: disc;
}

.contact-card {
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
}

.contact-card label {
  display: grid;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
}

.contact-card input,
.contact-card textarea,
.contact-card select {
  width: 100%;
  min-height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.8rem 0.9rem;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

.contact-card textarea {
  resize: vertical;
  min-height: 120px;
}

.form-status {
  min-height: 1.4em;
  margin: 0;
  color: var(--primary-2);
  font-size: 0.92rem;
}

.site-footer {
  border-top: 1px solid var(--line);
  background: rgba(0, 0, 0, 0.1);
}

.footer-wrap {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem 0;
  color: var(--text-soft);
  font-size: 0.92rem;
}

@media (max-width: 900px) {
  .hero-grid,
  .services-grid,
  .pricing-grid,
  .process-grid,
  .checklist-grid,
  .contact-grid,
  .schedule-box {
    grid-template-columns: 1fr;
  }

  .nav-wrap {
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem 0;
  }

  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .brands-inner,
  .footer-wrap {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 540px) {
  .hero {
    padding-top: 4rem;
  }

  .button {
    width: 100%;
  }

  .hero-actions {
    flex-direction: column;
  }

  .nav-cta {
    width: auto;
  }
}

code {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  color: #cfd9ff;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 6px;
  padding: 0.1rem 0.35rem;
}













































































