import { motion } from 'framer-motion';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import AmbientBackground from '../components/AmbientBackground.jsx';

const THEMES = [
  { icon: 'delegation', title: 'Human State', text: 'How human knowledge, cognition, emotion and context influence interaction outcomes.' },
  { icon: 'explanation', title: 'Interaction Dynamics', text: 'What happens in the moment of interaction and what drives better collaboration.' },
  { icon: 'trust', title: 'Agent Behaviour', text: 'How AI systems interpret, reason, decide and adapt within complex human contexts.' },
  { icon: 'memory', title: 'Organizational Learning', text: 'How experiences become institutional knowledge that compounds over time.' },
  { icon: 'accountability', title: 'Accountability', text: 'How we design for responsibility, transparency and trustworthy autonomy.' },
];

const QA = [
  { q: 'What interaction patterns consistently lead to better outcomes?', a: 'Patterns built on calibrated trust — where confidence is earned by evidence, not assumed. Outcomes track more closely with the quality of exchange (context given, corrections made, rationale shared) than with model capability alone.' },
  { q: 'How should AI adapt to different human expertise and context?', a: 'By adjusting its role, not just its output. A novice needs more explanation and slower autonomy; an expert needs faster delegation and sharper signal. We treat this as something the interaction layer tracks continuously, not a one-time setting.' },
  { q: 'What can tacit knowledge become when made reusable at scale?', a: 'Institutional judgment. The "why" behind a winning conversation or a sound decision, captured as pattern and rationale rather than a raw transcript, so it compounds into playbooks and coaching instead of disappearing after one interaction.' },
  { q: 'What metrics best capture learning and adaptation?', a: 'Trust, judgment, calibration, coherence and adaptation — not just accuracy or speed. We measure whether the human-AI pair gets better at the decision, not only whether a single output was right.' },
  { q: 'How do trust and accountability emerge over time?', a: 'Through explainable decisions and consistent mandate-following, not declared confidence. Trust compounds when an AI system’s reasoning is auditable and its authority stays within scope — accountability infrastructure is foundational, not optional.' },
  { q: 'How should organizations design for continuous learning?', a: 'Around a loop, not a launch: observe real interactions, extract patterns, feed them back into coaching and system behavior, and repeat. Treating AI deployment as a one-time rollout misses the compounding value entirely.' },
];

export default function Research() {
  return (
    <>
      <AmbientBackground />
      <Header active="research" />
      <main>
        <section className="research-hero shell">
          <motion.div className="research-copy" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow"><span /> Our research</p>
            <h1>Understanding how intelligence <em>changes intelligence.</em></h1>
            <p>We study the dynamics of human–AI interaction to design systems where both humans and AI continuously learn and improve.</p>
          </motion.div>
          <motion.div className="research-loop" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} aria-label="Human and AI interaction diagram">
            <div className="loop-side loop-human"><b>Human</b><span>Knowledge<br />Expertise<br />Intent<br />State<br />History</span></div>
            <div className="loop-center">
              <svg viewBox="0 0 440 280" aria-hidden="true">
                <path d="M126 73c-48 48-48 96 0 144" /><path d="M314 73c48 48 48 96 0 144" /><path d="M128 76c53-45 130-45 184 0" /><path d="M128 214c53 45 130 45 184 0" />
                <path className="tiny-arrow" d="m304 74 11 3-7 9M137 214l-11-3 7-9" />
              </svg>
              <div className="loop-person"><Icon name="human" size={20} /></div>
              <div className="loop-ai"><Icon name="cube" size={18} /></div>
              <div className="loop-word"><b>Interaction</b><span>Every interaction<br />changes both systems</span></div>
            </div>
            <div className="loop-side loop-machine"><b>AI system</b><span>Model<br />Memory<br />Confidence<br />Planning<br />Context</span></div>
            <p className="loop-informs">Informs</p>
            <p className="loop-influences">Influences</p>
          </motion.div>
        </section>

        <Reveal as="section" className="research-signals shell">
          <span><Icon name="trust" size={16} /> Trust</span>
          <span><Icon name="delegation" size={16} /> Delegation</span>
          <span><Icon name="correction" size={16} /> Correction</span>
          <span><Icon name="explanation" size={16} /> Explanation</span>
          <span><Icon name="disagreement" size={16} /> Disagreement</span>
          <span><Icon name="learn" size={16} /> Learning</span>
        </Reveal>

        <section className="light-section research-themes">
          <div className="shell">
            <Reveal as="p" className="eyebrow centered">Our research themes</Reveal>
            <Reveal as="h2" className="section-title small-title">Exploring the building blocks of adaptive human–AI systems.</Reveal>
            <div className="theme-grid">
              {THEMES.map((t, i) => (
                <Reveal as="article" key={t.title} delay={i * 0.05}>
                  <Icon name={t.icon} size={28} />
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                  <a href="#questions">Explore <span>→</span></a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="light-section models-section">
          <div className="shell">
            <Reveal as="p" className="eyebrow centered">Canonical models</Reveal>
            <Reveal as="h2" className="section-title small-title">Our working models for studying adaptive intelligence.</Reveal>
            <div className="model-grid">
              <Reveal as="article">
                <span>01</span><h3>The interaction model</h3>
                <div className="mini-loop"><i>Human</i><b>⇄</b><i>AI</i></div>
                <p>Human-in-the-loop is not supervision. It is continuous mutual adaptation.</p>
              </Reveal>
              <Reveal as="article" delay={0.05}>
                <span>02</span><h3>The research pipeline</h3>
                <ol>
                  <li>Research questions</li><li>Working prototypes</li><li>Evidence &amp; insights</li><li>Design principles</li><li>Better systems</li>
                </ol>
              </Reveal>
              <Reveal as="article" delay={0.1}>
                <span>03</span><h3>The adaptive loop</h3>
                <div className="state-loop"><b>Model state</b><i>↑</i><span>Interaction</span><i>↓</i><b>Human state</b></div>
                <p>Every interaction updates model state, human state, relationship and future decisions.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="questions" className="questions-section">
          <div className="shell">
            <Reveal as="p" className="eyebrow">Open research questions</Reveal>
            <div className="questions-layout">
              <Reveal as="h2">Six questions shaping adaptive AI<br /><em>— and our working thesis on each.</em></Reveal>
              <div className="question-list">
                {QA.map((item, i) => (
                  <Reveal as="div" key={item.q} delay={i * 0.04} className="qa">
                    <p className="q">{item.q}</p>
                    <p className="a">{item.a}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Reveal as="section" id="contact" className="research-footer">
          <div className="shell research-footer-inner">
            <div className="constellation"><Icon name="spark" size={40} /></div>
            <p>This is an ongoing research program.<br />We publish, we learn, we share.</p>
            <a href="/labs">See our work in Labs <span>→</span></a>
            <div className="research-stats">
              <b>12<sup>+</sup><small>Active research projects</small></b>
              <b>7<small>Working prototypes</small></b>
              <b>3<small>Enterprise pilots</small></b>
            </div>
          </div>
        </Reveal>
      </main>
      <Footer tagline="We design how intelligence changes intelligence." />
    </>
  );
}
