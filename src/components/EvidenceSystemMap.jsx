import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const papers = [
  { id: 'dreyfus', track: 'grounding', year: 1972, label: 'Dreyfus', title: "What Computers Still Can't Do", authors: 'Hubert Dreyfus · MIT Press', maturity: 'Foundational work', finding: 'Skilled action depends on situated, tacit understanding—not rule-following alone.', implication: 'Design for context, correction and human expertise, not abstract task completion.', href: 'https://mitpress.mit.edu/9780262540674/what-computers-still-cant-do/' },
  { id: 'mind-over-machine', track: 'grounding', year: 1986, label: 'Dreyfus × 2', title: 'Mind Over Machine', authors: 'Hubert & Stuart Dreyfus', maturity: 'Foundational work', finding: 'Expertise develops through repeated practice in real situations, not by accumulating rules.', implication: 'Treat high-value interaction as a source of learning—not merely as input data.', href: null },
  { id: 'radiograph', track: 'ledger', year: 2019, label: 'Chest radiograph', title: 'Human–machine partnership for chest radiograph diagnosis', authors: 'Nature Medicine · 2019', maturity: 'Peer-reviewed', finding: 'A human collective and deep learning system outperformed either component on its own.', implication: 'Build for complementary judgment, with clear roles for people and systems.', href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6861262/' },
  { id: 'borgs', track: 'ledger', year: 2021, label: 'Borgs?', level: 'above', title: 'Will Humans-in-the-Loop Become Borgs?', authors: 'MIS Quarterly · 2021', maturity: 'Peer-reviewed', finding: 'Reliance on AI can improve individual accuracy while eroding distinctive human knowledge and judgment.', implication: 'Record the decision, evidence and dissent—not just the final answer.', href: 'https://misq.umn.edu/misq/article/45/3/1527/1891/Will-Humans-in-the-Loop-Become-Borgs-Merits-and' },
  { id: 'complementarity', track: 'ledger', year: 2021, label: 'Complementarity', level: 'below', title: 'Does the Whole Exceed its Parts?', authors: 'Bansal et al. · CHI 2021', maturity: 'Peer-reviewed', finding: 'Explanations alone did not reliably create complementary human–AI performance.', implication: 'Keep judgment, rationale and evidence in the loop—not confidence theatre.', href: 'https://arxiv.org/pdf/2006.14779' },
  { id: 'decision-teaming', track: 'ledger', year: 2025, label: 'Decision teaming', title: 'Toward a science of human–AI teaming for decision making', authors: 'PMC · 2025', maturity: 'Peer-reviewed synthesis', finding: 'Human–AI teaming works when the pair’s capabilities are deliberately complementary.', implication: 'Make the handoff between human judgment and machine assistance inspectable.', href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12983458/' },
  { id: 'oversight', track: 'evidence', year: 2025, label: 'Amplified oversight', title: 'Human–AI Complementarity: A Goal for Amplified Oversight', authors: 'Google DeepMind · 2025', maturity: 'Emerging evidence', finding: 'Explanations, confidence and labels can increase over-reliance; raw evidence can better calibrate trust.', implication: 'Intel Echo keeps underlying evidence visible at the point of judgment.', href: 'https://arxiv.org/pdf/2510.26518' },
  { id: 'sycon', track: 'drift', year: 2025, label: 'SYCON Bench', title: 'Measuring Sycophancy of Language Models in Multi-turn Dialogues', authors: 'Hong et al. · Findings of EMNLP 2025', maturity: 'Peer-reviewed', finding: 'Multi-turn sycophancy remains prevalent; models can conform under sustained user pressure.', implication: 'Track shifts in stance and authority across the whole conversation, not a single response.', href: 'https://arxiv.org/abs/2505.23840' },
  { id: 'slow-drift', track: 'drift', year: 2026, label: 'Boundary drift', offset: -26, title: 'The Slow Drift of Support', authors: 'Cheng, Kang, Jiang et al. · 2026', maturity: 'Emerging evidence', finding: 'Safety boundaries can erode gradually across long dialogues rather than fail at one obvious moment.', implication: 'Monitor mandate and role boundaries as an interaction evolves.', href: 'https://arxiv.org/abs/2601.14269' },
  { id: 'stop-listening', track: 'drift', year: 2026, label: 'Conversation tax', offset: 0, title: 'Stop Listening to Me!', authors: 'Guo et al. · arXiv 2026', maturity: 'Emerging evidence', finding: 'Multi-turn conversations can reduce accuracy and safe abstention relative to static evaluation.', implication: 'Evaluate decisions in their conversational context—not as isolated outputs.', href: 'https://arxiv.org/abs/2603.11394' },
  { id: 'token-drift', track: 'drift', year: 2026, label: 'Token drift', offset: 26, title: 'Token Statistics Reveal Conversational Drift', authors: 'Hafez & Nazeri · arXiv 2026', maturity: 'Emerging evidence', finding: 'Structural consistency can be monitored from the observable conversation stream in real time.', implication: 'Interaction telemetry can surface drift before it becomes a decision failure.', href: 'https://arxiv.org/abs/2604.13061' },
];

const tracks = [
  { id: 'grounding', title: 'Situated expertise', subtitle: 'Context and tacit skill' },
  { id: 'ledger', title: 'Human–AI complementarity', subtitle: 'Decision quality and judgment' },
  { id: 'evidence', title: 'Trust & evidence', subtitle: 'Calibrated reliance' },
  { id: 'drift', title: 'Conversational drift', subtitle: 'Reliability across turns' },
];

const eras = [
  { year: 1972, position: 0.03 }, { year: 1986, position: 0.24 }, { year: 2019, position: 0.43 },
  { year: 2021, position: 0.60 }, { year: 2025, position: 0.79 }, { year: 2026, position: 0.96 },
];

// This is an editorial chronology, not a literal scale: it preserves the real order
// while giving the recent research cluster enough room to be understood.
const visualPositions = {
  dreyfus: 0.03, 'mind-over-machine': 0.24,
  radiograph: 0.43, borgs: 0.57, complementarity: 0.64, 'decision-teaming': 0.80,
  oversight: 0.82, sycon: 0.76, 'slow-drift': 0.84, 'stop-listening': 0.90, 'token-drift': 0.96,
};

const nodePosition = (position) => `calc(${position * 100}% + ${(1 - position) * 150}px)`;

export default function EvidenceSystemMap() {
  const [selectedId, setSelectedId] = useState('complementarity');
  const reduceMotion = useReducedMotion();
  const selected = papers.find((paper) => paper.id === selectedId) ?? papers[0];

  return (
    <section className="evidence-section" aria-labelledby="evidence-map-title">
      <div className="shell">
        <div className="evidence-heading">
          <div>
            <p className="eyebrow"><span /> Research foundations</p>
            <h2 id="evidence-map-title">The evidence behind<br /><em>interaction infrastructure.</em></h2>
          </div>
          <p>Five decades of research show why strong AI systems need more than better outputs: they need better human–system interaction.</p>
        </div>

        <div className="evidence-map-scroll">
          <div className="evidence-map-canvas">
            <div className="evidence-timeline">
              <div className="evidence-years" aria-hidden="true">
                {eras.map((era) => <span key={era.year} style={{ left: `${era.position * 100}%` }}>{era.year}</span>)}
              </div>
              <div className="evidence-tracks">
                {tracks.map((track) => (
                  <div className="evidence-track" key={track.id}>
                    <div className="evidence-track-title"><b>{track.title}</b><span>{track.subtitle}</span></div>
                    <div className="evidence-track-line" />
                    {papers.filter((paper) => paper.track === track.id).map((paper, index) => (
                      <button type="button" key={paper.id} className={`evidence-node ${selectedId === paper.id ? 'is-selected' : ''} ${paper.level ? `is-${paper.level}` : ''} ${visualPositions[paper.id] >= 0.84 ? 'is-edge' : ''}`} style={{ left: nodePosition(visualPositions[paper.id]) }} onClick={() => setSelectedId(paper.id)} aria-pressed={selectedId === paper.id} aria-label={`${paper.year}: ${paper.title}`}>
                        <motion.i aria-hidden="true" animate={reduceMotion ? undefined : { scale: selectedId === paper.id ? [1, 1.45, 1] : [1, 1.16, 1], opacity: selectedId === paper.id ? [1, 0.55, 1] : [0.55, 1, 0.55] }} transition={reduceMotion ? undefined : { duration: selectedId === paper.id ? 1.9 : 3.4, delay: index * 0.18, repeat: Infinity, ease: 'easeInOut' }} />
                        <span>{paper.year}</span><b>{paper.label}</b>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <aside className="evidence-reading" aria-live="polite">
              <p>Evidence <span>{selected.maturity}</span></p>
              <h3>{selected.title}</h3><small>{selected.authors} · {selected.year}</small>
              <div><b>What it shows</b><p>{selected.finding}</p></div>
              <div><b>AMORIS implication</b><p>{selected.implication}</p></div>
              {selected.href ? <a href={selected.href} target="_blank" rel="noreferrer">Read source <span>↗</span></a> : <em>Primary book reference · no stable open-access source</em>}
            </aside>
          </div>
        </div>

        <div className="amoris-translation" aria-label="AMORIS AI Labs translates research evidence into interaction infrastructure">
          <div className="translation-intro"><i aria-hidden="true" /><div><b>AMORIS AI Labs</b><span>System translation layer</span><p>From evidence to interaction infrastructure.</p></div></div>
          <div className="translation-flow"><span aria-hidden="true">→</span><article><b>Sales Echo</b><span>Capture the nuance that makes expert conversations work.</span></article><span aria-hidden="true">→</span><article><b>Intel Echo</b><span>Keep mandate, evidence and judgment in view.</span></article><span aria-hidden="true">→</span><article><b>Memory Graph</b><span>Turn interaction evidence into reusable organizational memory.</span></article><span aria-hidden="true">→</span></div>
          <p className="translation-outcome">Better future<br />interactions.</p>
        </div>
      </div>
    </section>
  );
}
