import { useState } from 'react';
import BrandMark from './BrandMark.jsx';

const NAV = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'Research', href: '/research', key: 'research' },
  { label: 'Products', href: '/products', key: 'products' },
  { label: 'Labs', href: '/labs', key: 'labs' },
];

export default function Header({ active, homeHref = '/' }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header shell">
      <a className="brand" href={homeHref} aria-label="AMORIS AI Labs home">
        <BrandMark />
        <span>
          <strong>AMORIS</strong>
          <small>AI LABS</small>
        </span>
      </a>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>
      <nav id="primary-nav" className={`nav${open ? ' is-open' : ''}`} aria-label="Primary navigation">
        {NAV.map((item) => (
          <a
            key={item.key}
            href={item.key === 'home' ? homeHref : item.href}
            className={active === item.key ? 'is-active' : ''}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a className="button button-small button-ghost" href="#contact" onClick={() => setOpen(false)}>
          Contact <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
