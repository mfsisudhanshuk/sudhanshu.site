import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sudhanshu Resume',
  description: 'This is resume website for sudhanshu profile.',
  icons: {
    icon: [
      { url: '../public/favicon.png'},
      { url: '../public/icons-96.png', sizes: '96x96', type: 'image/png' },
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
