import BrandMark from './BrandMark.jsx';

export default function Footer({ tagline, showMark = false, homeHref = 'index.html', withContactId = false }) {
  return (
    <footer id={withContactId ? 'contact' : undefined} className="footer">
      <div className="shell footer-inner">
        <a className="brand" href={homeHref} aria-label="AMORIS AI Labs home">
          {showMark && <BrandMark />}
          <span>
            <strong>AMORIS</strong>
            <small>AI LABS</small>
          </span>
        </a>
        <p>{tagline}</p>
        <a className="footer-contact" href="mailto:shahi@amoris.in">
          shahi@amoris.in <span>↗</span>
        </a>
      </div>
    </footer>
  );
}
