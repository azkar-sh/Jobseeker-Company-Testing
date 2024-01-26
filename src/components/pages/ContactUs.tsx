import React, { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Container from '@/components/Container'
import { Input, Select, Textarea } from '@/components/Forms'
import Landing from '@/assets/landing.png'
import Logo from '@/assets/footerlogo.svg'
import { FiArrowRightCircle } from 'react-icons/fi'
import useLanguage from '@/lib/lang-switcher'

const ContactUs: React.FC = () => {
  const { tl } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/

  const imAOptions = [
    { value: 'Enterprise', label: tl['im-a-options']['Enterprise'] },
    { value: 'Candidate', label: tl['im-a-options']['Candidate'] },
    { value: 'SME', label: tl['im-a-options']['SME'] },
    { value: 'Media', label: tl['im-a-options']['Media'] },
  ]

  const validationSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    phone: z.string().regex(phoneNumberRegex, 'Phone number is invalid'),
    im_a: z.string().refine((v) => imAOptions.map((option) => option.value).includes(v), 'I am is invalid'),
    message: z.string().min(1),
  })

  type ValidationSchema = z.infer<typeof validationSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      setErrorMessage('')
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulating a 2-second delay
      setIsSuccess(true)
    } catch (error: any) {
      setErrorMessage(error.message)
    } finally {
      setIsLoading(false)
    }
  })

  return (
    <section className="pb-12 pt-24">
      <Container>
        <div className="shadow-custom flex flex-col overflow-hidden rounded-lg bg-white md:flex-row-reverse">
          <div
            className="flex w-full items-center justify-center  md:w-2/5"
            style={{
              background: `url('${Landing.src}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="py-8">
              <Image alt="" src={Logo} className="block h-24 w-24" />
            </div>
          </div>
          <form className="flex-1 p-6" onSubmit={onSubmit}>
            <h2 className="text-3xl font-bold text-secondary">{tl.inquiry}</h2>
            <p className="text-textdefault mb-6">{tl['inquiry-desc']}</p>

            {isSuccess && <div className="mb-4 rounded-lg bg-green-600/10 px-3 py-4 text-green-600">{tl['inquiry-success']}</div>}
            {!!errorMessage && <div className="mb-4 rounded-lg bg-red-600/10 px-3 py-4 text-red-600">{errorMessage}</div>}

            <Input className="mb-4" label={tl['full-name']} {...register('name')} error={errors.name?.message} />
            <Input className="mb-4" label={tl['email-address']} {...register('email')} error={errors.email?.message} />
            <Input className="mb-4" label={tl['phone-number']} {...register('phone')} error={errors.phone?.message} />
            <Select className="mb-4" label={tl['im-a']} options={imAOptions} {...register('im_a')} error={errors.im_a?.message} />
            <Textarea className="mb-4" rows={4} label={tl.tell} {...register('message')} error={errors.message?.message} />

            <button
              className="my-6 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-10 font-semibold text-white transition-colors hover:bg-blue-500 disabled:cursor-wait disabled:opacity-80 hover:disabled:bg-blue-600"
              disabled={isLoading || isSuccess}
            >
              <span className="block uppercase">{tl['inquiry-cta']}</span>
              <FiArrowRightCircle className="block" size={22} />
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default ContactUs
