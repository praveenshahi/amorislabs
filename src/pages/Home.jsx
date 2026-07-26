import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import BrandMark from '../components/BrandMark.jsx';
import AmbientBackground from '../components/AmbientBackground.jsx';

export default function Home() {
  const orbitRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: orbitRef, offset: ['start end', 'end start'] });
  const orbitY = useTransform(scrollYProgress, [0, 1], [-14, 14]);

  return (
    <>
      <AmbientBackground />
      <Header active="home" homeHref="#top" />

      <main id="top">
        <section className="hero shell">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1] }}
          >
            <p className="eyebrow"><span /> Interaction infrastructure for the AI era</p>
            <h1>Infrastructure that helps <em>organizations learn.</em></h1>
            <p className="lede">AMORIS is the interaction layer between humans and AI systems. We observe, learn and improve every interaction—so both people and AI get better over time.</p>
            <div className="actions">
              <a className="button button-primary" href="#architecture">Explore the architecture <span>→</span></a>
              <a className="button button-ghost" href="#products">See the products</a>
            </div>
            <div className="signal-row" aria-label="Trusted by forward-thinking teams">
              <span>Built for forward-thinking teams</span>
              <div className="wordmarks"><b>Vanta</b><b>ramp</b><b>Notion</b><b>Webflow</b><b>Brex</b></div>
            </div>
          </motion.div>

          <motion.div
            ref={orbitRef}
            className="interaction-orbit"
            style={{ y: orbitY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.7, 0.3, 1] }}
            aria-label="AMORIS interaction model diagram"
          >
            <svg className="orbit-lines" viewBox="0 0 650 580" aria-hidden="true">
              <path d="M185 147C255 53 390 53 476 147" /><path d="M492 170c88 85 90 207 2 300" /><path d="M466 475c-77 84-211 90-294 2" /><path d="M157 455c-83-86-79-214 3-300" />
              <path className="arrow" d="m463 145 18 4-10 15" /><path className="arrow" d="m493 445-5 18-16-10" /><path className="arrow" d="m191 474-18-4 10-15" /><path className="arrow" d="m156 165 5-18 16 10" />
            </svg>
            <div className="orbit-node node-human"><i><Icon name="human" size={26} /></i><b>Human</b><small>Intent · Expertise · Context<br />Feedback · Decisions</small></div>
            <div className="orbit-node node-ai"><i className="cube"><Icon name="cube" size={20} /></i><b>AI systems</b><small>Models · Tools · Memory<br />Planning · Confidence</small></div>
            <div className="core-card"><BrandMark className="core-mark" /><strong>AMORIS</strong><span>Interaction Layer</span><small>Observe · Learn · Improve</small></div>
            <div className="orbit-label human-label"><b>Human<br /><em>evolves</em></b><span>Knowledge<br />Judgment<br />Expertise<br />Context<br />Intent</span></div>
            <div className="orbit-label ai-label"><b><em>AI</em><br />evolves</b><span>Behavior<br />Confidence<br />Planning<br />Memory<br />Tools</span></div>
            <div className="outcomes">Outputs · Suggestions<br />Actions · Insights</div>
          </motion.div>
        </section>

        <Reveal as="section" className="principle shell">
          <div className="principle-icon"><Icon name="arrow" size={20} /></div>
          <p>Better decisions. Better people. <em>Better organizations.</em></p>
        </Reveal>

        <section id="research" className="light-section shift-section">
          <div className="shell">
            <Reveal as="p" className="eyebrow centered">The shift</Reveal>
            <Reveal as="h2" className="section-title">The bottleneck has changed.</Reveal>
            <div className="comparison-grid">
              <Reveal as="article" className="comparison-card">
                <p className="card-kicker">Today's AI paradigm</p><h3>Optimizes responses</h3>
                <div className="simple-flow"><span>Human</span><i>→</i><span>Prompt</span><i>→</i><span>Model</span><i>→</i><span>Output</span><i>→</i><span>Decision</span></div>
                <p className="measure"><b>Optimized for:</b> Intelligence · Speed · Cost · Accuracy</p>
              </Reveal>
              <div className="comparison-arrow"><Icon name="arrow" size={18} /></div>
              <Reveal as="article" delay={0.1} className="comparison-card amoris-card">
                <p className="card-kicker">The AMORIS paradigm</p><h3>Optimizes learning</h3>
                <div className="simple-flow amoris-flow"><span>Human</span><i>⇄</i><span>AMORIS<br />Interaction Layer</span><i>⇄</i><span>AI systems</span><i>→</i><span>Organizational<br />learning</span></div>
                <p className="measure"><b>Measured by:</b> Trust · Judgment · Calibration · Coherence · Adaptation</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="architecture" className="light-section architecture-section">
          <div className="shell">
            <Reveal as="p" className="eyebrow centered">The AMORIS interaction architecture</Reveal>
            <Reveal as="h2" className="section-title small-title">A new layer of infrastructure for the AI era.</Reveal>
            <div className="architecture-flow">
              <Reveal as="article" className="architecture-node"><Icon name="human" size={26} className="line-icon" /><h3>Humans</h3><p>Intent<br />Expertise<br />Context<br />Feedback</p></Reveal>
              <span className="flow-arrow"><Icon name="arrow" size={16} /></span>
              <Reveal as="article" delay={0.05} className="layer-node">
                <p className="card-kicker">AMORIS interaction layer</p>
                <div className="layer-functions">
                  <div><Icon name="observe" /><b>Observe</b><span>Capture what happens in real interactions</span></div>
                  <div><Icon name="learn" /><b>Learn</b><span>Extract patterns, insights and rationale</span></div>
                  <div><Icon name="improve" /><b>Improve</b><span>Guide actions and adapt in real time</span></div>
                  <div><Icon name="remember" /><b>Remember</b><span>Build organizational memory that compounds</span></div>
                </div>
              </Reveal>
              <span className="flow-arrow"><Icon name="arrow" size={16} /></span>
              <Reveal as="article" delay={0.1} className="architecture-node"><Icon name="cube" size={26} className="line-icon" /><h3>AI systems</h3><p>Models<br />Tools<br />Memory<br />Planning</p></Reveal>
              <span className="flow-arrow"><Icon name="arrow" size={16} /></span>
              <Reveal as="article" delay={0.15} className="architecture-node"><Icon name="memory" size={26} className="line-icon" /><h3>Organizational intelligence</h3><p>Patterns &amp; playbooks<br />Coaching &amp; training<br />Insights &amp; analytics<br />Decision support</p></Reveal>
            </div>
            <p className="architecture-note">Every interaction strengthens both sides.</p>
          </div>
        </section>

        <section id="products" className="proof-section">
          <div className="shell">
            <Reveal className="proof-heading">
              <div><p className="eyebrow">Our first proof of work</p><h2>Enterprise B2C Sales</h2><p>We're validating the architecture in one of the most complex human–AI environments: sales conversations.</p><a href="products.html">Learn more in Products <span>→</span></a></div>
              <p className="proof-why">Why? Because success depends on nuance, timing, emotion and experience—the very things AI cannot learn from documentation.</p>
            </Reveal>
            <Reveal className="proof-path" delay={0.1}>
              <div><strong>100</strong><span>Conversations<br />happen</span></div><i>→</i>
              <div><strong>1–3</strong><span>Conversations<br />close</span></div><i>→</i>
              <div className="wide-step"><b>AMORIS extracts what matters</b><span>Emotional triggers · objection handling · winning strategies · timing and sequence · language patterns</span></div><i>→</i>
              <div className="wide-step"><b>Knowledge compounds</b><span>Captured, refined and redistributed across the organization</span></div><i>→</i>
              <div className="wide-step"><b>Future interactions get better</b><span>Better coaching. Better guidance from AI. Better outcomes for the business.</span></div>
            </Reveal>
          </div>
        </section>

        <Reveal as="section" id="labs" className="lab-section shell">
          <div><p className="eyebrow">AMORIS AI Labs</p><h2>We don't build AI.<br />We build how intelligence <em>changes intelligence.</em></h2></div>
          <div className="lab-copy"><p>Our research studies the quality of interaction between people and intelligent systems—so organizations can preserve experience, learn faster, and adapt with care.</p><a className="button button-primary" href="#contact">Start a conversation <span>→</span></a></div>
        </Reveal>
      </main>

      <Footer withContactId showMark homeHref="#top" tagline="Interaction infrastructure for organizations that learn." />
    </>
  );
}
