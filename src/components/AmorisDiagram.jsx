// Hero interaction diagram: real image asset + real HTML text labels overlaid
// (not baked into the image) so the content is readable by search engines,
// screen readers, and text selection — not locked inside pixels.
export default function AmorisDiagram() {
  return (
    <div className="amoris-diagram" role="img" aria-label="Diagram showing AMORIS as the interaction layer between a human and AI systems: the human evolves through knowledge, judgment, expertise, context and intent, while AI systems evolve through behavior, confidence, planning, memory and tools — both feeding into better decisions.">
      <picture>
        <source srcSet="/assets/amoris-interaction-diagram.webp" type="image/webp" />
        <img
          src="/assets/amoris-interaction-diagram.jpg"
          alt=""
          width="1600"
          height="900"
          loading="eager"
        />
      </picture>
      <span className="diagram-label label-human">Human</span>
      <span className="diagram-label label-ai-systems">AI systems</span>
      <div className="label-core-pill">
        <span className="label-core-title">AMORIS<br />Interaction layer</span>
        <span className="label-core-sub">Observe · Learn · Improve</span>
      </div>
      <span className="diagram-label label-human-evolves">Human evolves</span>
      <span className="diagram-label label-ai-evolves">AI evolves</span>
      <span className="diagram-label label-decisions">Better decisions</span>
    </div>
  );
}
