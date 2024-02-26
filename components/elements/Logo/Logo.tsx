import Link from 'next/link'
import React from 'react'

const Logo = () => (
  <Link className='logo' href='/'>
    <img src='/img/logo.svg' alt='Rostelecom Logo' className='logo__img' />
  </Link>
)

export default Logo
