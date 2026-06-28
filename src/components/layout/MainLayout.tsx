import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col max-lg:overflow-x-hidden">
      <Header />
      <main className="w-full max-w-full flex-1 max-lg:overflow-x-hidden">{children}</main>
      {/* <Footer /> */}
    </div>
  )
}
