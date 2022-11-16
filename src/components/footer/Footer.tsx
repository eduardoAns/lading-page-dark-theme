import React from 'react'

export const Footer = () => {
  return (
    <section className=' h-screen w-full flex flex-col justify-center items-center bg-primary-300 lg:h-screen-1/2'>
        <article className='h-11 mb-10 pl-2 w-4/5'>
            <img className='inline h-full ' src="images/logo.svg" alt="Logo" />
        </article>
        <div className='w-4/5 flex flex-col font-raleway lg:flex-row'>
            <article className='flex flex-row text-sm mb-4 lg:w-2/6'>
                <div className='w-10 h-4'>
                    <img className='inline h-full' src="images/icon-location.svg" alt="ubication"/>
                </div>
                <p className='w-5/6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur assumenda, deleniti corrupti magnam incidunt architecto libero.</p>
            </article>
            <article className='text-sm mb-16 lg:w-1/6 '>
                <div className='flex flex-row mb-4'>
                    <div className=' w-10 h-4'>
                        <img className='inline h-full ' src="images/icon-phone.svg" />
                    </div>
                    <p className=''>1-535-123-4567</p>
                </div>
                <div className='flex flex-row'>
                    <div className='w-10 h-4'>
                        <img className='inline h-full' src="images/icon-email.svg" />
                    </div>
                    <p className='col-span-7'>example@fylo.com</p>
                </div>
            </article>
            <article className='flex flex-col gap-4 text-sm mb-14 lg:w-1/6 lg:items-end '>
                <a href='#' className=' w-20'>About Us</a>
                <a href='#' className=' w-20'>Jobs</a>
                <a href='#' className=' w-20'>Press</a>
                <a href='#' className=' w-20'>Blog</a>
            </article>
            <article className='flex flex-col gap-4 text-sm lg:w-1/6 lg:items-center '>
                <a href='#' className=' w-20'>Contact Us</a>
                <a href='#' className=' w-20'>Terms</a>
                <a href='#' className=' w-20'>Privacy</a>
            </article>
            {/* <article>
                <div className='w-10 h-4'>
                    <img className='inline h-full' src="/images/icon-email.svg" />
                </div>
                <div className='w-10 h-4'>
                    <img className='inline h-full' src="/images/icon-email.svg" />
                </div>
                <div className='w-10 h-4'>
                    <img className='inline h-full' src="/images/icon-email.svg" />
                </div>
            </article> */}
        </div>
    </section>
    
  )
}
