import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { KVViewContacts } from '@/components/KVViewContacts'
import { Inter } from 'next/font/google'
// import { Form } from '@/components/PostgreForm'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className={`${inter.className} flex  flex-col 
    min-h-screen p-24`}>
      <h2 className='text-4xl font-bold tracking-tight text-center mb-12 '>Contáctanos</h2>
      <div className='flex flex-col text-center items-center justify-center max-w-2xl mx-auto'>
      {/* <Form/> */}
      <Form/>
      <KVViewContacts/> 
      </div>
    </main>
  )
}
