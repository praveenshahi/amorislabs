import { motion } from 'framer-motion';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import BrandMark from '../components/BrandMark.jsx';
import AmbientBackground from '../components/AmbientBackground.jsx';

const EXPERIMENTS = [
  { tag: '01 / Interaction intelligence', title: 'Sales Echo', text: 'Learning from the patterns that make human sales conversations work.', status: 'Enterprise pilot', muted: false, href: 'products.html', linkText: 'View product' },
  { tag: '02 / Trust systems', title: 'Intel Echo', text: 'Making AI decisions more accountable, explainable and auditable.', status: 'Live prototype', muted: false, href: 'products.html', linkText: 'View product' },
  { tag: '03 / Adaptive organizations', title: 'Memory Graph', text: 'Mapping how interaction evidence becomes reusable organizational memory.', status: 'In research', muted: true, href: 'research.html', linkText: 'Explore research' },
];

const METHOD = [
  { n: '01', title: 'Ask better questions', text: "Start with a real interaction problem—not technology for its own sake." },
  { n: '02', title: 'Build to learn', text: 'Make working prototypes early, in the context where nuance actually lives.' },
  { n: '03', title: 'Observe the evidence', text: 'Study what changes for humans, agents and the organization.' },
  { n: '04', title: 'Turn learning into systems', text: 'Codify what works into durable interaction infrastructure.' },
];

const NOTES = [
  { tag: 'Working paper / 01', title: 'What should an AI system remember?', text: 'Memory is not storage. It is a design decision about what helps a future interaction become better.' },
  { tag: 'Field note / 04', title: 'Why transcripts are not organizational learning', text: 'Recording a conversation preserves words. Learning requires patterns, evidence and feedback loops.' },
  { tag: 'Model / 02', title: 'The mutual adaptation loop', text: 'Human-in-the-loop systems become useful when the loop changes both sides—not when it only watches one.' },
];

export default function Labs() {
  return (
    <>
      <AmbientBackground />
      <Header active="labs" />
      <main>
        <section className="labs-hero shell">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow"><span /> AMORIS AI Labs</p>
            <h1>Where questions become <em>working systems.</em></h1>
            <p>We move from research questions to testable interaction models, prototypes and enterprise learning systems.</p>
            <a className="button button-primary" href="#experiments">Explore the lab <span>→</span></a>
          </motion.div>
          <motion.div className="lab-apparatus" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} aria-label="AMORIS research process diagram">
            <svg viewBox="0 0 650 440" aria-hidden="true">
              <path className="apparatus-orbit" d="M325 48c146 0 264 83 264 186S471 420 325 420 61 337 61 234 179 48 325 48Z" />
              <path className="apparatus-orbit soft" d="M325 86c105 0 190 66 190 148s-85 148-190 148-190-66-190-148S220 86 325 86Z" />
              <path className="apparatus-path" d="M325 92C452 92 530 153 530 234S452 376 325 376 120 315 120 234 198 92 325 92Z" />
              <path className="apparatus-link" d="M325 124v64M434 234h-64M325 344v-64M216 234h64" />
              <circle className="apparatus-dot" cx="325" cy="92" r="4" /><circle className="apparatus-dot" cx="530" cy="234" r="4" /><circle className="apparatus-dot" cx="325" cy="376" r="4" /><circle className="apparatus-dot" cx="120" cy="234" r="4" />
              <path className="apparatus-arrow" d="m494 144 16 6-9 13M360 367l-8 15-13-9M156 324l-16-6 9-13M290 101l8-15 13 9" />
            </svg>
            <div className="apparatus-center"><BrandMark className="apparatus-mark" /><b>AMORIS<br />LABS</b><span>Research → evidence → systems</span></div>
            <div className="apparatus-label label-question"><i>01</i><b>Research questions</b><span>Where should intelligence adapt?</span></div>
            <div className="apparatus-label label-prototype"><i>02</i><b>Working prototypes</b><span>Build in the context that matters.</span></div>
            <div className="apparatus-label label-evidence"><i>03</i><b>Evidence &amp; insights</b><span>Observe what changes.</span></div>
            <div className="apparatus-label label-system"><i>04</i><b>Better systems</b><span>Make the learning durable.</span></div>
            <p className="apparatus-caption">Each loop turns a real interaction into a better future interaction.</p>
          </motion.div>
        </section>

        <Reveal as="section" className="lab-manifesto">
          <div className="shell"><p>We believe the future of AI will be decided less by model capability—and more by the quality of the interactions that shape it.</p></div>
        </Reveal>

        <section id="experiments" className="light-section experiments">
          <div className="shell">
            <Reveal as="p" className="eyebrow centered">Current experiments</Reveal>
            <Reveal as="h2" className="section-title">Building the interaction layer in public.</Reveal>
            <div className="experiment-grid">
              {EXPERIMENTS.map((e, i) => (
                <Reveal as="article" key={e.title} delay={i * 0.06}>
                  <span>{e.tag}</span>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                  <div className={`experiment-status${e.muted ? ' muted-status' : ''}`}><i />{e.status}</div>
                  <a href={e.href}>{e.linkText} <b>→</b></a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="method-section">
          <div className="shell">
            <Reveal as="p" className="eyebrow centered">The lab method</Reveal>
            <div className="method-grid">
              {METHOD.map((m, i) => (
                <Reveal as="article" key={m.n} delay={i * 0.05}>
                  <b>{m.n}</b><h3>{m.title}</h3><p>{m.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="light-section lab-notes">
          <div className="shell">
            <div><p className="eyebrow">Lab notes</p><h2>Research without<br />the theatre.</h2></div>
            <div className="notes-list">
              {NOTES.map((n, i) => (
                <Reveal as="article" key={n.title} delay={i * 0.05}>
                  <span>{n.tag}</span><b>{n.title}</b><p>{n.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Reveal as="section" id="contact" className="labs-contact">
          <div className="shell">
            <div className="constellation big-constellation"><Icon name="spark" size={56} /></div>
            <div><p className="eyebrow">Work with the lab</p><h2>Have a difficult interaction problem?</h2><p>We partner with teams who want to turn high-value experience into systems that learn.</p></div>
            <a className="button button-primary" href="mailto:hello@amoris.ai">Talk to the lab <span>→</span></a>
          </div>
        </Reveal>
      </main>
      <Footer tagline="We publish, we learn, we share." />
    </>
  );
}
