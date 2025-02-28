import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alex Bao',
  description: "Alex Bao's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
