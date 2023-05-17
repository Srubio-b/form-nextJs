'use client'

import { Button } from "./Button"
import { Input } from "./Input"
import { toast } from "sonner";
import confetti from 'canvas-confetti'

export const Form = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)
        const { email, name, message } = Object.fromEntries(formData.entries())

    // llamada de nuestra api
    fetch('/api/postgre-send-message', {
        method: 'POST',
        body: JSON.stringify({ email, name, message }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
        toast.success('Mensaje enviado')
        form.reset()
        void confetti()
    }).catch(() => {
        toast.error('Error al enviar mensaje')
    })
}


    return(
        <form onSubmit={handleSubmit} className='space-y-8 p-8 border rounded border-white/10 min-w-[400px]'>
        
        <Input
        name='email'
        id='email'
        label='Tu Email'
        type='email'
        placeholder='example@gmail.com'
        />

        <Input
        name='name'
        id='text'
        label='Tu Nombre'
        type='text'
        placeholder='Pedrito Pérez'
        />

        <Input
        name='message'
        id='message'
        label='Tu Mensaje'
        type='text'
        placeholder='Mensaje a enviar'
        />

        <Button>Enviar Mensaje</Button>
        </form>
    )
}