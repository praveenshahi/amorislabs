import { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';

const TABS = [
  { label: 'All products', filter: 'all' },
  { label: 'Live', filter: 'live' },
  { label: 'Coming soon', filter: 'coming-soon' },
  { label: 'Research', filter: 'research' },
];

const NEXT = [
  { icon: 'trust', title: 'Healthcare Echo', status: 'In research', text: 'Clinical decision support through adaptive learning.' },
  { icon: 'explanation', title: 'Support Echo', status: 'In research', text: "Customer support that gets better with every call." },
  { icon: 'delegation', title: 'Hiring Echo', status: 'In design', text: 'Capture expertise in talent evaluation.' },
  { icon: 'accountability', title: 'Leadership Echo', status: 'Exploring', text: 'Better strategic decisions through interaction intelligence.' },
];

const COMPOUND = [
  { n: '01', icon: 'observe', title: 'Observe', text: 'Capture human-AI interactions in real time' },
  { n: '02', icon: 'explanation', title: 'Understand', text: 'Extract intent, context, emotion and outcomes' },
  { n: '03', icon: 'memory', title: 'Learn', text: 'Transform interactions into reusable intelligence' },
  { n: '04', icon: 'improve', title: 'Guide', text: 'Provide real-time support and coaching' },
  { n: '05', icon: 'trust', title: 'Improve', text: 'Humans and AI both evolve with every loop' },
];

export default function Products() {
  const [filter, setFilter] = useState('all');
  const show = (cat) => filter === 'all' || filter === cat;

  return (
    <>
      <Header active="products" />
      <main>
        <section className="products-hero shell">
          <motion.div className="products-intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow"><span /> Our products</p>
            <h1>From intelligence to intelligent <em>collaboration.</em></h1>
            <p>Practical systems that make humans and AI learn, adapt and win together.</p>
          </motion.div>
          <motion.div className="convergence" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }} aria-label="Human and artificial intelligence collaboration">
            <picture>
              <source srcSet="/assets/product-collaboration-hero.webp" type="image/webp" />
              <img src="/assets/product-collaboration-hero.jpg" alt="Human and AI hands meeting at a point of light, representing AMORIS AI Labs' human-AI interaction infrastructure" loading="lazy" width="1440" height="768" />
            </picture>
            <div className="human-values"><b>Human</b><span>Judgment<br />Creativity<br />Experience<br />Values</span></div>
            <div className="ai-values"><b>AI</b><span>Memory<br />Reasoning<br />Speed<br />Scalability</span></div>
            <p>"Not AI vs Humans. <em>AI × Humans.</em>"</p>
          </motion.div>
        </section>

        <section className="product-stage light-section">
          <div className="shell">
            <div className="product-tabs">
              {TABS.map((t) => (
                <button key={t.filter} className={filter === t.filter ? 'active' : ''} onClick={() => setFilter(t.filter)}>
                  {t.label}
                </button>
              ))}
            </div>
            <div className="product-cards">
              <AnimatePresence>
                {show('live') && (
                  <motion.article layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="intel-card">
                    <div className="product-card-copy">
                      <p className="product-title"><Icon name="trust" size={18} /> Intel Echo <span>● Live prototype</span></p>
                      <h2>Accountability Layer for AI Systems</h2>
                      <p>Keeps AI within its mandate. Detects authority drift, measures confidence, and explains decisions.</p>
                      <ul>
                        <li>Mandate &amp; scope monitoring</li><li>Confidence vs evidence checks</li><li>Decision rationale capture</li><li>Audit-ready interaction logs</li>
                      </ul>
                      <div>
                        <a className="button dark-button" href="/intel-echo/">Explore Intel Echo <span>→</span></a>
                        <a className="text-link" href="/intel-echo-gtm/">Product GTM ↗</a>
                      </div>
                    </div>
                    <div className="intel-ui">
                      <p><span>▲ Authority drift detected</span> "This recommendation exceeds the given mandate."</p>
                      <div><b>92<sup>%</sup><small>Confidence</small></b><b>2/6<small>Evidence</small></b></div>
                      <i />
                      <small>Interaction timeline</small>
                    </div>
                  </motion.article>
                )}
                {show('coming-soon') && (
                  <motion.article layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="sales-card">
                    <div className="product-card-copy">
                      <p className="product-title"><Icon name="soon" size={18} /> Sales Echo <span>◉ Coming soon</span></p>
                      <h2>Enterprise Sales Learning Layer</h2>
                      <p>Learns from winning conversations. Guides reps in real-time. Builds organizational sales intelligence.</p>
                      <ul>
                        <li>Real-time sales copilot</li><li>Win pattern extraction</li><li>Tribal knowledge capture</li><li>Faster onboarding</li>
                      </ul>
                      <div className="waitlist"><b>Be the first to try our Sales Pilot</b><span>Work email <em>Join waitlist →</em></span></div>
                    </div>
                    <div className="sales-ui">
                      <p>Up to <b>3.4×</b> win rate improvement<sup>*</sup></p>
                      <i />
                      <div>"Buyer sentiment shifting.<br />Try value reframing with cost-of-inaction."</div>
                    </div>
                  </motion.article>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section className="compound-section">
          <div className="shell">
            <Reveal as="p" className="eyebrow centered">How our products create compounding intelligence</Reveal>
            <div className="compound-flow">
              {COMPOUND.map((c, i) => (
                <Fragment key={c.title}>
                  <Reveal as="article" delay={i * 0.06}>
                    <b>{c.n}</b>
                    <Icon name={c.icon} size={20} />
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </Reveal>
                  {i < COMPOUND.length - 1 && <span>→</span>}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        <Reveal as="section" className="outcome-strip light-section">
          <div className="shell">
            <p className="eyebrow centered">Why enterprises work with AMORIS</p>
            <div>
              <b>3–5×<small>Faster onboarding</small></b>
              <b>40–60%<small>Reduced training time</small></b>
              <b>2–4×<small>Higher agent performance</small></b>
              <b>∞<small>Continuous organizational memory</small></b>
              <b><Icon name="cube" size={20} /><small>Model agnostic</small></b>
            </div>
          </div>
        </Reveal>

        <section className="next-section light-section">
          <div className="shell">
            <Reveal as="p" className="eyebrow centered">What's next</Reveal>
            <div className="next-grid">
              {NEXT.map((n, i) => (
                <Reveal as="article" key={n.title} delay={i * 0.05}>
                  <Icon name={n.icon} size={20} />
                  <b>{n.title}</b>
                  <span>{n.status}</span>
                  <p>{n.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Reveal as="section" id="contact" className="products-cta shell">
          <h2>Let's build the next generation<br />of <em>human-AI collaboration.</em></h2>
          <div>
            <p>Partner with us to make your organization learn faster, decide better and scale smarter.</p>
            <a className="button dark-button" href="mailto:hello@amoris.ai">Start a conversation <span>→</span></a>
          </div>
        </Reveal>
      </main>
      <Footer tagline="We design how intelligence changes intelligence." />
    </>
  );
}
