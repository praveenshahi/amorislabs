// Consistent 24x24 stroke line-icon set, replacing the old unicode-glyph icons.
const paths = {
  observe: 'M12 5c5 0 8.5 3.5 10 7-1.5 3.5-5 7-10 7S3.5 15.5 2 12c1.5-3.5 5-7 10-7Z M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z',
  learn: 'M12 3 13.6 8.4 19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z',
  improve: 'M4 20 20 4 M20 4h-6 M20 4v6',
  remember: 'M4 7a8 4 0 0 1 16 0 M4 7v10a8 4 0 0 0 16 0V7 M4 12a8 4 0 0 0 16 0',
  trust: 'M12 3 20 6.5v5.5c0 5-3.4 8.6-8 9.5-4.6-.9-8-4.5-8-9.5V6.5L12 3Z',
  delegation: 'M6 6h5v5H6V6Z M13 13h5v5h-5v-5Z M11 8.5H8.5V19h4.5',
  correction: 'M4 12a8 8 0 1 1 2.6 5.9 M4 12v5.5H9.5',
  explanation: 'M12 3a9 9 0 1 0 0 18 M12 8.5v5 M12 16.5h.01',
  disagreement: 'M6 4v9a3 3 0 0 0 3 3h2 M18 20v-9a3 3 0 0 0-3-3h-2 M11 12 8 15l3 3 M13 12l3-3-3-3',
  accountability: 'M12 3 20 6.5v5.5c0 5-3.4 8.6-8 9.5-4.6-.9-8-4.5-8-9.5V6.5L12 3Z M9 12l2 2 4-4',
  memory: 'M4 8a8 3 0 0 1 16 0v8a8 3 0 0 1-16 0V8Z M4 8a8 3 0 0 0 16 0',
  check: 'M4 12.5l5 5L20 6',
  arrow: 'M4 12h15 M13 6l6 6-6 6',
  live: 'M12 3v18 M5 8a10 10 0 0 0 0 8 M19 8a10 10 0 0 0 0 8',
  soon: 'M12 7v5l3.5 2 M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z',
  spark: 'M12 3 13.6 8.4 19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z',
  human: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8',
  cube: 'M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Z M4 7.5 12 12l8-4.5 M12 12v9',
};

export default function Icon({ name, size = 22, className = '' }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
