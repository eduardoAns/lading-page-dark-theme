import React from 'react'

const Header = () => {
  return (
    <section className='flex justify-between items-center  bg-primary-100 h-24 w-full lg:items-end lg:px-10'>
      <article className='w-2/5 h-8 flex items-center pl-6 lg:h-12'>
        <img className='inline h-full' src="images/logo.svg" alt="Logo" />
      </article>
      <nav className='flex font-raleway font-normal text-sm w-3/5 justify-around lg:w-1/4'>
          <a href='#'>Features</a>
          <a href='#'>Team</a>
          <a href='#'>Sign In</a>
      </nav>
    </section>
  )
}

export default Header
