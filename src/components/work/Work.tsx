import React from 'react'

export const Work = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center bg-primary-200 lg:h-screen-3/4'>
        <div className='w-5/6 flex flex-col gap-4 sm:flex-row'>
            <article className=' w-full flex justify-center sm:w-1/2'>
                <div className='h-64 sm:h-96' >
                    <img src='images/illustration-stay-productive.png' className='h-full '/>
                </div>
            </article>
            <article className='w-full flex font-raleway flex-col mt-10 sm:w-1/2 justify-center'>
                <div className=' text-left'>
                    <h2 className='text-lg font-bold lg:text-4xl lg:w-1/2'>
                        Stay productive, wherever you are
                    </h2>
                    <p className='mt-4 font-normal text-sm leading-6 lg:text-base'>
                        Never let location be and issue when accessing your files. 
                        Fylo has you covered for all of your file storage needs.
                    </p>
                    <p className='mt-4 font-normal text-sm leading-6 lg:text-base'>
                        Securely share files and folders with friends, family and colleagues for live collaboration.
                        No email attachments required.
                    </p>
                </div>
                <div className='text-xs text-cyan-100 h-12 w-full flex items-center'>
                    <div className=' w-auto border-b pb-1 border-cyan-100'>
                        <a href='#' className='pr-1'>See how fylo works</a>
                        <img className='inline h-4 ' src="images/icon-arrow.svg" alt="Logo" />
                    </div>
                </div>
            </article>
        </div>
    </section>
  )
}
