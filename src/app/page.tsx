'use client'
import React from 'react';

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import InnerBox from '@/components/InnerBox/InnerBox';
import SponsorsBox from '@/components/SponsorsBox/SponsorsBox';
import InstructionsBox from '@/components/InstructionsBox/InstructionsBox';
import ExamplesBox from '@/components/ExamplesBox/ExamplesBox';
import SubscribeBox from '@/components/SubscribeBox/SubscribeBox'
import QABox from '@/components/QABox/QABox'

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <Header/>
      <InnerBox/>
      <SponsorsBox/>
      <InstructionsBox/>
      <ExamplesBox/>
      <SubscribeBox/>
      <QABox/>
      <Footer/>
    </main>
  )
}
