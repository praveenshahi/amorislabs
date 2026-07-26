import { useEffect, useState } from 'react';

const WEB3FORMS_ACCESS_KEY = '063a3623-5cd3-4b84-9c60-7a5d5163413b';

export default function ContactCTA({ className = 'button button-ghost', label = 'Contact us' }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New lead from amoris.in — ${form.company || form.name}`,
          from_name: 'AMORIS AI Labs website',
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {label} <span>↗</span>
      </button>
      {open && (
        <div className="contact-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="contact-modal-close" onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
            {status === 'sent' ? (
              <div className="contact-modal-success">
                <h3>Thanks — message sent.</h3>
                <p>We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3>Talk to AMORIS</h3>
                <p>Tell us about your team and what you're working on.</p>
                <label>
                  Name
                  <input type="text" name="name" required value={form.name} onChange={handleChange} />
                </label>
                <label>
                  Work email
                  <input type="email" name="email" required value={form.email} onChange={handleChange} />
                </label>
                <label>
                  Company
                  <input type="text" name="company" value={form.company} onChange={handleChange} />
                </label>
                <label>
                  Message
                  <textarea name="message" rows="3" value={form.message} onChange={handleChange} />
                </label>
                {status === 'error' && (
                  <p className="contact-modal-error">Something went wrong — try again, or email shahi@amoris.in directly.</p>
                )}
                <button type="submit" className="button button-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
