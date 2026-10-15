import { SectionHeading } from './SectionHeading'

const questions = [
  {
    question: 'What is included in the ₹3,000 package?',
    answer: 'The introductory package includes a responsive website with up to 4–5 agreed sections or pages, about/services/contact information, a WhatsApp contact button, basic testing, and deployment assistance. We will confirm the exact deliverables and scope before work begins.',
  },
  {
    question: 'Are domain and hosting costs included?',
    answer: 'No. Domain registration and paid hosting are separate costs, as are premium assets and services. I can discuss suitable options and deployment assistance; the precise scope and any extra costs are agreed before development.',
  },
  {
    question: 'How long does a website take?',
    answer: 'Timing depends on the agreed scope and how quickly content and feedback are ready. I will confirm a realistic timeline with you before development begins.',
  },
  {
    question: 'Can you create WhatsApp contact links?',
    answer: 'Yes. I can add a WhatsApp link or contact button that opens a chat with the number you provide. You will need to supply a valid WhatsApp number.',
  },
  {
    question: 'Can you implement an enquiry form?',
    answer: 'Yes. The right approach depends on the project. A form may open the visitor’s email app, or it can use a separately agreed form service or backend. The setup, any service fees, and what happens to submissions will be explained before implementation.',
  },
  {
    question: 'How do revisions and payments work?',
    answer: 'Revision limits, payment milestones, deliverables, and deadlines are confirmed in writing before development starts. Additional rounds or changes outside the agreed scope may affect the price and timeline.',
  },
]

export function FAQ() {
  return (
    <section className="section section-tint" id="faq">
      <div className="container faq-layout">
        <SectionHeading
          eyebrow="Good to know"
          title="A few common questions."
          description="If you have something else in mind, get in touch and ask."
        />
        <div className="faq-list">
          {questions.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}<span aria-hidden="true" /></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
