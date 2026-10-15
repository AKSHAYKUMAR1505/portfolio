export const profile = {
  name: 'Akshay Kumar',
  initials: 'AK',
  role: 'Freelance Web Developer',
  location: 'Bengaluru, Karnataka, India',
  email: 'akshaykumarchilamakuru@gmail.com',
  whatsappNumber: '916303415086',
} as const

export const pricing = {
  starterName: 'Starter Business Website',
  starterAmount: 3000,
  starterCurrency: '₹',
  includedSections: '4–5 agreed sections or pages',
} as const

export const project = {
  name: 'Aarohan Academy Website Concept',
  type: 'Personal Demo Project',
  url: 'https://demoweb-five-silk.vercel.app/#home',
  description:
    'A coaching institute website I built as a portfolio reference, demonstrating course information, learning programs, a responsive layout, and student enquiry options.',
} as const

export const navigation = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faq' },
] as const

export const whatsappUrl = `https://wa.me/${profile.whatsappNumber}`
export const emailUrl = `mailto:${profile.email}`
