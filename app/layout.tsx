import './globals.css'
import { Theme } from '@radix-ui/themes'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Theme className='transition-colors duration-300'>
          <ThemeProvider attribute='class'>{children}</ThemeProvider>
        </Theme>
      </body>
    </html>
  )
}
