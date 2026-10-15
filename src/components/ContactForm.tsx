import { useState, type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '../config'

type EnquiryFields = {
  name: string
  email: string
  business: string
  description: string
}

const initialFields: EnquiryFields = { name: '', email: '', business: '', description: '' }

export function ContactForm() {
  const [fields, setFields] = useState(initialFields)
  const [feedback, setFeedback] = useState('')

  function updateField(field: keyof EnquiryFields, value: string) {
    setFields((current) => ({ ...current, [field]: value }))
    if (feedback) setFeedback('')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const subject = `Website enquiry from ${fields.name.trim()}`
    const body = [
      `Name: ${fields.name.trim()}`,
      `Email: ${fields.email.trim()}`,
      `Business: ${fields.business.trim() || 'Not provided'}`,
      '',
      'Project details:',
      fields.description.trim(),
    ].join('\n')
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setFeedback('Your email app should open with your enquiry ready. If it does not, email me directly using the address shown here.')
    window.location.assign(mailto)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Your name <span aria-hidden="true">*</span>
          <input
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={(event) => updateField('name', event.target.value)}
            placeholder="e.g. Priya Sharma"
            required
          />
        </label>
        <label>
          Email address <span aria-hidden="true">*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) => updateField('email', event.target.value)}
            placeholder="you@example.com"
            required
          />
        </label>
      </div>
      <label>
        Business or organisation
        <input
          name="business"
          autoComplete="organization"
          value={fields.business}
          onChange={(event) => updateField('business', event.target.value)}
          placeholder="Your business name (optional)"
        />
      </label>
      <label>
        Tell me about your project <span aria-hidden="true">*</span>
        <textarea
          name="description"
          value={fields.description}
          onChange={(event) => updateField('description', event.target.value)}
          placeholder="What does your business do, and what would you like your website to help with?"
          rows={5}
          required
        />
      </label>
      <button className="button button-primary form-submit" type="submit">
        Prepare email enquiry <ArrowUpRight size={17} aria-hidden="true" />
      </button>
      <p className="form-note" aria-live="polite">
        Your default email app will open with these details filled in. This form does not send or store data on a server.
        {feedback && <span className="form-feedback"> {feedback}</span>}
      </p>
    </form>
  )
}
