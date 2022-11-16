import React from 'react'

const Header = () => {
  return (
    <section className='flex justify-between bg-primary-100 h-24 w-full pl-6 '>
      <article className='w-2/5 h-full flex items-center '>
        <img className='inline h-8 ' src="images/logo.svg" alt="Logo" />
      </article>
      <nav className='flex font-raleway font-normal text-sm w-3/5 justify-evenly items-center'>
          <a href='#'>Features</a>
          <a href='#'>Team</a>
          <a href='#'>Sign In</a>
      </nav>
    </section>
  )
}

export default Header
