import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'
import HomepageImage2 from '@/assets/Homepage 2.jpg'

const WhatWeDo: React.FC = () => {
  const { tl } = useLanguage()

  return (
    <section className="container py-12 md:py-24 flex">
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-secondary md:text-4xl">{tl['trusted']}</h2>
        <p className="md:text-lg">
          <br />
          {tl['trusted-detail']}
        </p>
      </div>
      <div className="md:flex md:items-center justify-center items-center">
        <div className="">
          <Image src={HomepageImage2} width={700} alt="Software Demo" />
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
