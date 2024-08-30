'use client'

import { Skeleton, Switch } from '@radix-ui/themes'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className='mb-20 flex items-center gap-4'>
      <p>Dark mode</p>
      {mounted ? (
        <Switch
          checked={resolvedTheme === 'dark'}
          onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        />
      ) : (
        <Skeleton width='35px' height='20px' className='rounded-full' />
      )}
    </div>
  )
}
