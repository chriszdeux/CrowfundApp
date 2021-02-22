import React from 'react'
import { About } from './components/about/About';
import { Backed } from './components/backed/Backed'
import { Navbar } from './components/header/Navbar'
import { Hero } from './components/hero/Hero'
import { BackedModal } from './components/modals/BackedModal';
import { ThanksModal } from './components/modals/ThanksModal';

export const CrowdFund = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Backed />
      <About />
      <ThanksModal />
      <BackedModal />
    </>
  )
}
