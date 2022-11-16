import React from 'react'

export const Features = () => {
  return (
    <section className='w-full flex justify-center items-center bg-primary-200 lg:h-screen'>
        <div className='w-5/6 grid grid-cols-1 h-max gap-16 font-raleway md:grid-cols-2 lg:px-32'>
            <article className='flex items-center flex-col text-center  '>
                <img className='inline h-16 mb-6' src="images/icon-access-anywhere.svg" alt="Logo" />
                <h2 className=' font-bold mb-2 text-lg' >Access your files, anywhere</h2>
                <p className=' text-sm leading-6'>The ability to use a smartphone, tablet or computer to acces your account means your files fellow you everywhere.</p>
            </article >
            <article className='flex items-center flex-col text-center '>
                <img className='inline h-16 mb-6' src="images/icon-security.svg" alt="Logo" />
                <h2 className=' font-bold mb-2 text-lg' >Security you can trust</h2>
                <p className=' text-sm leading-6'>2-factor authentication and user-controlled encryption are just a couple of the security features we allos to help secure yor files</p>
            </article>
            <article className='flex items-center flex-col text-center '>
                <img className='inline h-16 mb-6' src="images/icon-collaboration.svg" alt="Logo" />
                <h2 className=' font-bold mb-2 text-lg' >Real-Time collaboration</h2>
                <p className=' text-sm leading-6'>Securely share files and folders with friends, family and colleagues for live collavorations. No email attachments required</p>
            </article>
            <article className='flex items-center flex-col text-center '>
                <img className='inline h-16 h mb-6' src="images/icon-any-file.svg" alt="Logo" />
                <h2 className=' font-bold mb-2 text-lg' >Store any type of file</h2>
                <p className=' text-sm leading-6'>Whether you're sharing holidays photos or work documents. Fylo has you covered allowing for all file types to be securely stored and shared</p>
            </article>
        </div>        
    </section>
  )
}
