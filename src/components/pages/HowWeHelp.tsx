import Image from 'next/image'
import jobseekerAppIcon from '@/assets/home-page/jobseeker.app-icon.png'
import jobseekerAppDemo from '@/assets/home-page/jobseeker.app-demo.png'
import jobseekerPartnersIcon from '@/assets/home-page/jobseeker.partners-icon.png'
import jobseekerPartnersDemo from '@/assets/home-page/jobseeker.partners-demo.png'
import jobseekerLifeDemo from '@/assets/home-page/jobseeker.life-demo.png'
import jobseekerServicesDemo from '@/assets/home-page/jobseeker.services-demo.png'
import playstoreImg from '@/assets/playstore.png'
import appstoreImg from '@/assets/appstore.png'
import hrmsDemo from '@/assets/home-page/hrms-demo.png'
import hrisIcon from '@/assets/home-page/icon-hris.png'
import atsIcon from '@/assets/home-page/icon-ats.png'
import hrcIcon from '@/assets/home-page/icon-hrc.png'
import esIcon from '@/assets/home-page/icon-es.png'
import itaSdaIcon from '@/assets/home-page/icon-ita-sda.png'
import itaIcon from '@/assets/home-page/icon-ita.png'
import { useLanguage } from '@/contexts/LanguageContext'

const HowWeHelp: React.FC = () => {
  const { tl } = useLanguage()

  const goto = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <section className="container py-12 md:py-24">
      <div className="grid grid-cols-1 gap-8">
        <h2 className="mb-6 text-center text-4xl font-bold text-secondary md:text-6xl">{tl['how-we-help']}</h2>

        <div>
          <h3 className="mb-3 text-center text-2xl font-semibold text-primary before:h-1 before:flex-1 before:bg-gray-100 after:h-1 after:flex-1 after:bg-gray-100 md:flex md:items-center md:gap-3 md:before:block md:before:content-['_'] md:after:block md:after:content-['_']">
            <span className="block">{tl['how-we-help-h3-1']}</span>
          </h3>
          <p className="mb-8 text-center text-lg md:mx-auto md:max-w-3xl">{tl['how-we-help-line-1']}</p>
        </div>

        <div className="rounded-lg bg-primary p-4 transition-shadow hover:shadow-lg hover:shadow-primary md:py-12">
          <div className="mb-4 flex justify-center p-4">
            <a
              href="https://jobseeker.app"
              target="_blank"
              className="block items-center justify-center rounded-full bg-white px-4 py-1 text-center text-xs font-bold text-primary md:px-6 md:py-2 md:text-base"
            >
              JOBSEEKER APP
            </a>
          </div>

          <div className="flex items-center justify-center md:mx-auto md:w-3/4">
            <div className="w-[40%] md:w-[30%]">
              <Image className="block h-auto w-full" src={jobseekerAppDemo} alt="" />
            </div>
            <div className="w-[60%] md:w-[70%]">
              <Image className="mb-3 block h-10 w-10 md:mb-6 md:h-20 md:w-20" src={jobseekerAppIcon} alt="" />
              <h2 className="mb-3 font-bold text-white md:mb-6 md:text-2xl">#CaraBaruCariKerja</h2>
              <p className="mb-3 text-xs text-white md:mb-6 md:text-lg" dangerouslySetInnerHTML={{ __html: tl['how-we-help-app-desc'] }} />

              <div className="flex gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.jobseeker.app"
                  target="_blank"
                  className="block overflow-hidden rounded-lg ring-1 ring-white/20 hover:ring"
                >
                  <Image src={playstoreImg} alt="" className="block h-10 w-auto" />
                </a>
                <a
                  href="https://apps.apple.com/id/app/jobseeker-app-job-search-app/id6447329057"
                  target="_blank"
                  className="block overflow-hidden rounded-lg ring-1 ring-white/20 hover:ring"
                >
                  <Image src={appstoreImg} alt="" className="block h-10 w-auto rounded-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12">
          <h3 className="mb-3 text-center text-2xl font-semibold text-secondary before:h-1 before:flex-1 before:bg-gray-100 after:h-1 after:flex-1 after:bg-gray-100 md:flex md:items-center md:gap-3 md:before:block md:before:content-['_'] md:after:block md:after:content-['_']">
            <span className="block">{tl['how-we-help-h3-2']}</span>
          </h3>
          <p className="mb-8 text-center text-lg md:mx-auto md:max-w-3xl">{tl['how-we-help-line-2']}</p>
        </div>

        <a href="https://jobseeker.software" className="rounded-lg border bg-white p-4 transition-shadow hover:shadow-lg  md:py-12">
          <div className="mb-4 flex justify-center p-4">
            <span className="block items-center justify-center rounded-full bg-secondary px-4 py-1 text-center text-xs font-bold text-white md:px-6 md:py-2 md:text-base">
              JOBSEEKER SOFTWARE
            </span>
          </div>

          <div className="grid grid-cols-1 items-center md:grid-cols-3">
            <div className="p-4">
              <Image alt="" src={hrmsDemo} className="block w-full" />
            </div>
            <div className="p-4">
              <Image alt="" src={jobseekerLifeDemo} className="block w-full" />
            </div>
            <div className="grid grid-cols-1 gap-4 p-4">
              <div>
                <Image alt="" src={atsIcon} className="mx-auto block w-24" />
                <h4 className="font-semibold text-secondary md:text-lg">{tl['how-we-help-software-t-1']}</h4>
                <p className="text-xs md:text-sm">{tl['how-we-help-software-d-1']} </p>
              </div>
              <div>
                <Image alt="" src={hrisIcon} className="mx-auto block w-24" />
                <h4 className="font-semibold text-secondary md:text-lg">{tl['how-we-help-software-t-2']}</h4>
                <p className="text-xs md:text-sm">{tl['how-we-help-software-d-2']} </p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://jobseeker.services" className="rounded-lg border bg-white p-4 transition-shadow hover:shadow-lg  md:py-12">
          <div className="mb-4 flex justify-center p-4">
            <span className="block items-center justify-center rounded-full bg-secondary px-4 py-1 text-center text-xs font-bold text-white md:px-6 md:py-2 md:text-base">
              JOBSEEKER SERVICES
            </span>
          </div>

          <div className="grid grid-cols-1 items-center md:grid-cols-3">
            <div className="p-4 md:hidden">
              <Image alt="" src={jobseekerServicesDemo} className="block w-full" />
            </div>
            <div className="grid grid-cols-1 gap-4 p-4">
              <div>
                <Image alt="" src={itaIcon} className="mx-auto block w-24" />
                <h4 className="font-semibold text-secondary md:text-lg">{tl['how-we-help-services-t-1']}</h4>
                <p className="text-xs md:text-sm">{tl['how-we-help-services-d-1']}</p>
              </div>
              <div>
                <Image alt="" src={esIcon} className="mx-auto block w-24" />
                <h4 className="font-semibold text-secondary md:text-lg">{tl['how-we-help-services-t-2']}</h4>
                <p className="text-xs md:text-sm">{tl['how-we-help-services-d-2']}</p>
              </div>
            </div>
            <div className="hidden p-4 md:block">
              <Image alt="" src={jobseekerServicesDemo} className="block w-full" />
            </div>
            <div className="grid grid-cols-1 gap-4 p-4">
              <div>
                <Image alt="" src={itaSdaIcon} className="mx-auto block w-24" />
                <h4 className="font-semibold text-secondary md:text-lg">{tl['how-we-help-services-t-3']}</h4>
                <p className="text-xs md:text-sm">{tl['how-we-help-services-d-3']}</p>
              </div>
              <div>
                <Image alt="" src={hrcIcon} className="mx-auto block w-24" />
                <h4 className="font-semibold text-secondary md:text-lg">{tl['how-we-help-services-t-4']}</h4>
                <p className="text-xs md:text-sm">{tl['how-we-help-services-d-4']}</p>
              </div>
            </div>
          </div>
        </a>

        <div className="block rounded-lg bg-secondary p-4 transition-shadow hover:shadow-lg hover:shadow-secondary  md:py-12">
          <div className="mb-4 flex justify-center p-4">
            <a
              href="https://jobseeker.partners"
              target="_blank"
              className="block items-center justify-center rounded-full bg-white px-4 py-1 text-center text-xs font-bold text-secondary md:px-6 md:py-2 md:text-base"
            >
              JOBSEEKER PARTNERS
            </a>
          </div>

          <div className="flex items-center justify-center md:mx-auto md:w-3/4">
            <div className="w-[40%] md:w-[30%]">
              <Image className="block h-auto w-full" src={jobseekerPartnersDemo} alt="" />
            </div>
            <div className="w-[60%] md:w-[70%]">
              <Image className="mb-3 block h-10 w-10 md:mb-6 md:h-20 md:w-20" src={jobseekerPartnersIcon} alt="" />
              <h2 className="mb-3 font-bold text-white md:mb-6 md:text-2xl">#CaraBaruCariKaryawan</h2>
              <p
                className="mb-3 text-xs text-white md:mb-6 md:text-lg"
                dangerouslySetInnerHTML={{ __html: tl['how-we-help-partners-desc'] }}
              />

              <div className="flex gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.jobseeker.partners"
                  target="_blank"
                  className="block overflow-hidden rounded-lg ring-1 ring-white/20 hover:ring"
                >
                  <Image src={playstoreImg} alt="" className="block h-10 w-auto" />
                </a>
                <a
                  href="https://apps.apple.com/id/app/jobseeker-partners-find-staff/id6447542188"
                  target="_blank"
                  className="block overflow-hidden rounded-lg ring-1 ring-white/20 hover:ring"
                >
                  <Image src={appstoreImg} alt="" className="block h-10 w-auto rounded-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeHelp
