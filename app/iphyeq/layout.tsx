import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function IphyeqLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/iphyeq/support"
            className="text-lg font-bold tracking-tight text-white"
          >
            iPhyEq
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/iphyeq/support"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
            >
              Support
            </Link>
            <Link
              href="/iphyeq/privacy"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {children}
      </main>

      <footer className="border-t border-gray-800 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            prabasiva.ai
          </Link>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Praba Siva. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
