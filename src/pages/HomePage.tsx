import { AboutShowcase } from '../components/about'

import { MainLayout } from '../components/layout'

import {

  ContactSection,

  HeroSection,

  DnaSection,
  HomeSections,
  ProjectsSection,
} from '../components/sections'



export function HomePage() {

  return (

    <MainLayout>

      <HeroSection />

      <AboutShowcase />

      <ProjectsSection />

      <DnaSection />

      <HomeSections />

      <ContactSection />

    </MainLayout>

  )

}


