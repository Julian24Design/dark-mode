import { Container, Section } from '@radix-ui/themes'
import dynamic from 'next/dynamic'
import { ThemeToggleSkeleton } from './ThemeToggle'
const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false,
  loading: () => <ThemeToggleSkeleton />,
})

export default function Home() {
  return (
    <Container size='2'>
      <Section size='4'>
        <div className='mb-20 flex items-center gap-4'>
          <p>Toggle theme</p>
          <ThemeToggle />
        </div>
        <div className='prose max-w-full'>
          <h1>Lorem Ipsum</h1>
          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </Section>
    </Container>
  )
}
