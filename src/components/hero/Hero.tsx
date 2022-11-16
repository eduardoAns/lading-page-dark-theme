import React from 'react'

export const Hero = () => {
  return (
    <section className="h-screen w-full flex items-center bg-primary-100 md:pt-10">
        <div className="w-full h-full bg-[url('/images/bg-curvy-mobile.svg')] bg-no-repeat bg-center bg-cover flex justify-center">
            <div className='w-5/6'>
                <article className=' w-full flex justify-center'>
                    <div className='h-64 md:h-80' >
                        <img src='images/illustration-intro.png' className='h-full'/>
                    </div>
                </article>
                <article className='w-full flex items-center font-raleway flex-col mt-6 xl:px-72'>
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold xl:text-4xl'>All your files in one secure location, accessible anywhere.</h2>
                        <p className='mt-5 font-normal text-sm leading-6 md:text-xl'>
                            Fylo stores all your most important files in one secure location.
                            Acces them wherever you need, share and collaborate with friends family, and co-workers
                        </p>
                    </div>
                    <button className=' rounded-3xl text-sm mt-6 p-4 w-64 font-bold text-center text-white-100 bg-gradient-to-r from-cyan-100 to-blue-100 md:text-xl'>
                        Get Started
                    </button>

                </article>
            </div>
        </div>
        
        
    </section>
  )
}
