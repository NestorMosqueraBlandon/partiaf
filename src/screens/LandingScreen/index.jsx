import React from 'react'
import FooterLanding from '../../components/landing/FooterLanding'
import HeaderLanding from '../../components/landing/HeaderLanding'
import "../../styles/landing/index.css"
import Contents from './Contents'


export default function Home() {
  return (
    <div>
      <HeaderLanding />
      <Contents />
      <FooterLanding />
    </div>
  )
}
