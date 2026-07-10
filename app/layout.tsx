import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zeepod — Cambia divisas con viajeros de todo el mundo',
  description:
    'Zeepod es la app que ayuda a viajeros a encontrar, cambiar y transferir divisas al mejor precio, en cualquier país, 24/7. Cambia dinero por experiencias con la comunidad Zeeper.',
  generator: 'v0.app',
  keywords: [
    'Zeepod',
    'cambio de divisas',
    'viajeros',
    'remesas',
    'transferencias de dinero',
    'economía colaborativa',
    'app de viajes',
  ],
  openGraph: {
    title: 'Zeepod — Cambia divisas con viajeros de todo el mundo',
    description:
      'Encuentra, cambia y transfiere divisas al mejor precio con la comunidad de viajeros Zeeper. Disponible en todos los países, 24/7.',
    type: 'website',
  },
  icons: {
    icon: '/Logos/zeepod-app-icon.png',
    apple: '/Logos/zeepod-app-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#6700f0',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
