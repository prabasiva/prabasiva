import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'iPhyEq Privacy Policy',
  description:
    'iPhyEq collects no data about you. No account, no analytics, no third-party SDKs, and no network connection - the full privacy policy for the iPhyEq iPhone app.',
  alternates: {
    canonical: 'https://prabasiva.ai/iphyeq/privacy',
  },
  openGraph: {
    title: 'iPhyEq Privacy Policy',
    description:
      'iPhyEq collects no data about you. No account, no analytics, no network connection.',
    url: 'https://prabasiva.ai/iphyeq/privacy',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = '13 November 2026'

export default function IphyeqPrivacyPage() {
  return (
    <article>
      <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
        iPhyEq
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
        Privacy policy
      </h1>
      <p className="mt-4 text-sm text-gray-500">
        Last updated: {LAST_UPDATED}
      </p>

      <p className="mt-10 rounded-xl border border-gray-800 bg-gray-900/40 p-6 text-xl font-semibold leading-relaxed text-white">
        iPhyEq collects no data about you.
      </p>

      <div className="mt-10 space-y-12">
        <p className="leading-relaxed text-gray-300">
          App Review checks a privacy policy for four things, so each is
          answered plainly below: what data is collected and how, what it is
          used for, who it is shared with, and how long it is kept and how to
          have it deleted.
        </p>

        <section aria-labelledby="collected">
          <h2
            id="collected"
            className="text-2xl font-semibold tracking-tight text-white"
          >
            What is collected, and how
          </h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            Nothing. The app has no account, no sign-in and no analytics. It
            asks for no permissions. It contains no third-party software
            development kits of any kind - no advertising network, no crash
            reporter, no usage measurement, no attribution service.
          </p>
        </section>

        <section aria-labelledby="used-for">
          <h2
            id="used-for"
            className="text-2xl font-semibold tracking-tight text-white"
          >
            What it is used for
          </h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            There is no collected data, so there is no use of it. The app shows
            you equations; it does not learn anything about you while doing so.
          </p>
        </section>

        <section aria-labelledby="shared-with">
          <h2
            id="shared-with"
            className="text-2xl font-semibold tracking-tight text-white"
          >
            Who it is shared with
          </h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            Nobody. No data is transmitted to the developer or to any third
            party, because no data leaves your device at all. There is no third
            party receiving data from this app, so there is no third party to
            hold to an equivalent standard of protection.
          </p>
        </section>

        <section aria-labelledby="no-internet">
          <h2
            id="no-internet"
            className="text-2xl font-semibold tracking-tight text-white"
          >
            The app does not connect to the internet
          </h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            There is no networking code in iPhyEq and it requests no network
            permission. The complete catalogue of equations, every explanation,
            and the mathematical typeface used to set the formulas are all
            included inside the app when you download it. It works identically
            with the device in airplane mode.
          </p>
          <p className="mt-4 leading-relaxed text-gray-300">
            The one exception is a link: tapping the creator&apos;s name in the
            About screen opens your web browser at an external site. That is
            your browser making a request, not the app, and nothing about you is
            passed to it.
          </p>
        </section>

        <section aria-labelledby="on-device">
          <h2
            id="on-device"
            className="text-2xl font-semibold tracking-tight text-white"
          >
            What is stored on your device
          </h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            The app saves, on your device only:
          </p>
          <ul className="mt-4 space-y-2 pl-5 text-gray-300">
            <li className="list-disc leading-relaxed">
              the equations you mark as favourites,
            </li>
            <li className="list-disc leading-relaxed">
              the equations you have recently opened,
            </li>
            <li className="list-disc leading-relaxed">
              your chosen appearance and language settings.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed text-gray-300">
            This is held inside the app&apos;s own storage area. It is never
            transmitted anywhere, and it is not readable by other apps.
          </p>
          <p className="mt-4 leading-relaxed text-gray-300">
            If you use iCloud device backup, this file may be included in that
            backup, under your own Apple account and subject to Apple&apos;s
            terms, in the same way as any other app&apos;s data.
          </p>
        </section>

        <section aria-labelledby="retention">
          <h2
            id="retention"
            className="text-2xl font-semibold tracking-tight text-white"
          >
            How long it is kept, and how to delete it
          </h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            It is kept until you delete it. Removing an individual favourite
            removes it immediately. Deleting the app removes all of it from the
            device.
          </p>
          <p className="mt-4 leading-relaxed text-gray-300">
            There is nothing to request from the developer and no consent to
            withdraw, because the developer never receives any of it. You do not
            need to contact anyone to have your data deleted: deleting the app
            is the deletion.
          </p>
        </section>

        <section aria-labelledby="children">
          <h2
            id="children"
            className="text-2xl font-semibold tracking-tight text-white"
          >
            Children
          </h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            The app collects nothing from anyone, including children.
          </p>
        </section>

        <section aria-labelledby="changes">
          <h2
            id="changes"
            className="text-2xl font-semibold tracking-tight text-white"
          >
            Changes
          </h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            If this policy changes, the updated version will be published here
            before the build it describes is released.
          </p>
        </section>

        <section aria-labelledby="contact">
          <h2
            id="contact"
            className="text-2xl font-semibold tracking-tight text-white"
          >
            Contact
          </h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            Questions about this policy can be sent to the support address
            listed on the app&apos;s App Store page, and on the{' '}
            <Link
              href="/iphyeq/support"
              className="text-white underline decoration-gray-600 underline-offset-4 transition-colors hover:decoration-white"
            >
              iPhyEq support page
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  )
}
