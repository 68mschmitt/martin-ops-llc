"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setStatus("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json().catch(() => ({})) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Something went wrong. Please try again.");
      setStatus(result.message || "Thanks. Your note has been sent.");
      window.plausible?.("fit_call_form_submit", { props: { form: "operations_fit_call" } });
      form.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Your message could not be sent. Please try again.");
    } finally { setBusy(false); }
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="field"><label htmlFor="name">Name <span aria-hidden="true">*</span></label><input id="name" name="name" autoComplete="name" required maxLength={120} /></div>
    <div className="field"><label htmlFor="email">Work email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} /></div>
    <div className="field"><label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" maxLength={160} /></div>
    <div className="field"><label htmlFor="teamSize">Team size</label><select id="teamSize" name="teamSize" defaultValue=""><option value="">Select a range</option><option>1–9</option><option>10–25</option><option>26–50</option><option>51–75</option><option>76+</option></select></div>
    <div className="field field--full"><label htmlFor="challenge">What’s creating the most operational drag right now? <span aria-hidden="true">*</span></label><textarea id="challenge" name="challenge" required maxLength={3000} /><span className="field-hint">A few sentences are enough. No preparation needed.</span></div>
    <div className="honeypot" aria-hidden="true"><label htmlFor="website">Leave this field blank</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <div className="field field--full"><label htmlFor="timing">What prompted you to look for help now?</label><input id="timing" name="timing" maxLength={1000} /></div>
    {status ? <p className="form-status" role="status" aria-live="polite">{status}</p> : null}
    <button className="button form-submit" type="submit" disabled={busy}>{busy ? "Sending…" : "Request an Operations Fit Call"}<span aria-hidden="true">↗</span></button>
    <p className="field-hint field--full">30 minutes. We’ll discuss what’s creating operational drag, what you want to change, and whether fractional operating leadership is a fit. Your information is used only to respond to this inquiry.</p>
  </form>;
}
