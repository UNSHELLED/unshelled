import { colors, fonts } from '../theme/tokens'
import usePageTitle from '../hooks/usePageTitle'
import Hero from '../components/sections/Hero'
import PainPoints from '../components/sections/PainPoints'
import WhatWeBuilt from '../components/sections/WhatWeBuilt'
import TheNineMinds from '../components/sections/TheNineMinds'
import Footer from '../components/sections/Footer'

export default function HomePage() {
  usePageTitle(null)
  
  return (
    <>
      <Hero />
      <PainPoints />
      <WhatWeBuilt />
      <TheNineMinds />
      <Footer />
    </>
  )
}
