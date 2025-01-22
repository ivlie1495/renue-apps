import AboutUs from '@/components/about-us'
import Community from '@/components/community'
import FAQ from '@/components/faq'
import Masthead from '@/components/masthead'
import OurPillar from '@/components/our-pillar'
import OurValues from '@/components/our-values'

export default function Home() {
  return (
    <>
      <Masthead />
      <AboutUs />
      <OurPillar />
      <OurValues />
      <FAQ />
      <Community />
    </>
  )
}
