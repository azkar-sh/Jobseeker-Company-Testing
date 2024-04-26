import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import JobseekerLogo from '@/assets/LogoJobseeker.svg'
import Link from '@/components/Link'
import { Transition } from '@headlessui/react'
import { useLanguage } from '@/contexts/LanguageContext'
import BurgerMenu from './BurgerMenu'
import LangSwicther from './LangSwitcher'
import LogoJobseeker from './svg/LogoJobseekerCompany'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { tl } = useLanguage()
  const router = useRouter()

  useEffect(() => {
    setIsOpen(false)
  }, [router.asPath])

  return (
    <header
      className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between py-4 shadow-sm backdrop-blur-md ${
        isOpen ? 'bg-white/100' : 'bg-white/70'
      }`}
    >
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Image src={JobseekerLogo} alt="Jobseeker Logo" height={36} />
        </Link>

        {/* desktop menu  */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-gray-900"
                nonActiveClassName="text-gray-600"
                activeClassName="text-gray-900"
              >
                {tl.menu['homepage']}
              </Link>
            </li>
            <li>
              <Link
                href="/vacancy"
                className="transition-colors hover:text-gray-900"
                nonActiveClassName="text-gray-600"
                activeClassName="text-gray-900"
              >
                {tl.menu['join-team']}
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="inline-block rounded-full px-6 py-2 leading-5 text-white transition-colors hover:bg-secondary-light/80"
                nonActiveClassName="bg-secondary-light"
                activeClassName="bg-secondary-light/80"
              >
                {tl.menu['contact-us']}
              </Link>
            </li>
            <li>
              <LangSwicther />
            </li>
          </ul>
        </div>

        {/* mobile menu  */}
        <div className="block md:hidden">
          <BurgerMenu isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
          <Transition
            show={isOpen}
            enter="transition-opacity ease-linear duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={`absolute left-0 z-50 h-screen w-full bg-white/100 p-5 backdrop-blur-md transition duration-300 ease-in-out`}
              style={{ marginTop: '22px' }}
            >
              <div className="mb-3 py-2">
                <Link
                  href="/"
                  className="text-xl transition-colors hover:text-gray-900"
                  nonActiveClassName="text-gray-600"
                  activeClassName="text-gray-900"
                >
                  {tl.menu['homepage']}
                </Link>
              </div>

              <div className="mb-3 py-2">
                <Link
                  href="/vacancy"
                  className="text-xl transition-colors hover:text-gray-900"
                  nonActiveClassName="text-gray-600"
                  activeClassName="text-gray-900"
                >
                  {tl.menu['join-team']}
                </Link>
              </div>

              <div className="mb-3 py-2">
                <Link
                  href="/contact-us"
                  className="block rounded-full py-2 text-center text-xl leading-8 text-white transition-colors hover:bg-secondary-light/80"
                  nonActiveClassName="bg-secondary-light"
                  activeClassName="bg-secondary-light/80"
                >
                  {tl.menu['contact-us']}
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center rounded-full py-2 text-center">
                <LangSwicther />
              </div>
            </div>
          </Transition>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
