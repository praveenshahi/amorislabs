import { useState } from 'react';

const WEB3FORMS_ACCESS_KEY = '063a3623-5cd3-4b84-9c60-7a5d5163413b';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'Sales Echo waitlist signup',
          from_name: 'AMORIS AI Labs — Sales Echo waitlist',
          email,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="waitlist">
        <b>You're on the list.</b>
        <span>We'll reach out when the Sales Pilot opens up.</span>
      </div>
    );
  }

  return (
    <form className="waitlist" onSubmit={handleSubmit}>
      <b>Be the first to try our Sales Pilot</b>
      <div className="waitlist-row">
        <input
          type="email"
          required
          placeholder="Work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Work email"
        />
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Joining…' : 'Join waitlist →'}
        </button>
      </div>
      {status === 'error' && <span className="waitlist-error">Something went wrong — try again.</span>}
    </form>
  );
}
