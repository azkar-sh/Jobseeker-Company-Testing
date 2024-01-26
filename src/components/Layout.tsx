import React, { useEffect } from 'react'
import Head from 'next/head'
import LoadingBar from './LoadingBar'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLanguage } from '@/contexts/LanguageContext'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { setLang, tl } = useLanguage()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const getLang = localStorage.getItem('lang') ?? 'en'
      setLang(getLang as 'en' | 'id')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>{tl.seo.title}</title>
        <meta name="description" content={tl.seo.description} />
        <meta name="keywords" content={tl.seo.meta.tags} />
        <meta name="image" property="og:image" content="https://jobseeker.company/assets/image/jobseeker-company-featured.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={tl.seo.title} />
        <meta property="og:description" content={tl.seo.description} />
        <meta property="og:url" content="https://jobseeker.company" />
        <meta property="og:image" content="https://jobseeker.company/assets/image/jobseeker-company-featured.jpg" />
        <meta property="og:site_name" content={tl.seo.meta.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tl.seo.title} />
        <meta name="twitter:description" content={tl.seo.description} />
        <meta name="twitter:url" content="https://jobseeker.company" />
        <meta name="twitter:site" content="@jobseekerapp" />
        <meta name="twitter:image" content="https://jobseeker.company/assets/image/jobseeker-company-featured.jpg" />
      </Head>

      <LoadingBar />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
