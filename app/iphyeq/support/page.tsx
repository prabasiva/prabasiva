import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'iPhyEq Support',
  description:
    'Support for iPhyEq, a reference of 160 physics and spacecraft-engineering equations with every symbol explained. Answers to common questions and how to get in touch.',
  alternates: {
    canonical: 'https://prabasiva.ai/iphyeq/support',
  },
  openGraph: {
    title: 'iPhyEq Support',
    description:
      'Answers to common questions about iPhyEq, and how to report an error in an equation.',
    url: 'https://prabasiva.ai/iphyeq/support',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const SUPPORT_EMAIL = 'mail@prabasiva.com'

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'Does it work offline?',
    answer:
      'Yes, entirely. The app has no networking code. Everything it shows is included in the download.',
  },
  {
    question: 'Why do some formulas scroll sideways?',
    answer:
      'A formula is set to fit the width of your screen at the text size you have chosen. Where it cannot fit without becoming too small to read, it scrolls instead of shrinking further.',
  },
  {
    question: 'Can I make the text larger?',
    answer:
      'Yes. The app follows the system text size, including the accessibility sizes, in Settings > Accessibility > Display & Text Size > Larger Text.',
  },
  {
    question: 'Does VoiceOver read the formulas?',
    answer:
      'Yes. A formula is spoken as a sentence - "F equals the fraction d p over d t" - rather than as its LaTeX source.',
  },
  {
    question: 'Can I switch to light appearance?',
    answer:
      'Yes. Settings > Display > Light, inside the app. It opens dark by default.',
  },
  {
    question: 'Is there an iPad version?',
    answer:
      'Not yet. The first release is iPhone only; an iPad layout is planned.',
  },
  {
    question: 'I found an error in an equation or an explanation.',
    answer: (
      <>
        Please report it - say which equation and what is wrong, and it will be
        corrected in the next update. Write to{' '}
        <a
          href={`mailto:${SUPPORT_EMAIL}?subject=iPhyEq%20-%20equation%20error`}
          className="text-white underline decoration-gray-600 underline-offset-4 transition-colors hover:decoration-white"
        >
          {SUPPORT_EMAIL}
        </a>
        .
      </>
    ),
  },
]

export default function IphyeqSupportPage() {
  return (
    <article>
      <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
        iPhyEq
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
        Support
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
        iPhyEq is a reference of 160 physics and spacecraft-engineering
        equations, typeset on your device, with every symbol in every formula
        explained.
      </p>

      <section aria-labelledby="faq" className="mt-14">
        <h2 id="faq" className="text-2xl font-semibold tracking-tight">
          Common questions
        </h2>
        <dl className="mt-6 divide-y divide-gray-800 border-y border-gray-800">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-6">
              <dt className="text-base font-semibold text-white">
                {faq.question}
              </dt>
              <dd className="mt-2 leading-relaxed text-gray-400">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="contact" className="mt-14">
        <h2 id="contact" className="text-2xl font-semibold tracking-tight">
          Contact
        </h2>
        <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900/40 p-6">
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=iPhyEq%20support`}
            className="inline-flex items-center gap-3 text-lg font-medium text-white transition-colors hover:text-gray-300"
          >
            <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
            {SUPPORT_EMAIL}
          </a>
          <p className="mt-3 text-sm text-gray-400">
            Replies usually within a few days.
          </p>
        </div>
      </section>

      <section aria-labelledby="privacy" className="mt-14">
        <h2 id="privacy" className="text-2xl font-semibold tracking-tight">
          Privacy
        </h2>
        <div className="mt-6 flex items-start gap-3 text-gray-400">
          <ShieldCheck
            className="mt-0.5 h-5 w-5 shrink-0 text-gray-500"
            aria-hidden="true"
          />
          <p className="leading-relaxed">
            The app collects no data of any kind. The full policy is at{' '}
            <Link
              href="/iphyeq/privacy"
              className="text-white underline decoration-gray-600 underline-offset-4 transition-colors hover:decoration-white"
            >
              prabasiva.ai/iphyeq/privacy
            </Link>
            .
          </p>
        </div>
      </section>
    </article>
  )
}
