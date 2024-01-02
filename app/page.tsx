import { HomePage, NavBar } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <NavBar></NavBar>
      <HomePage/>  
    </main>
  )
}
