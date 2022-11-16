import React from 'react'

export const Team = () => {
  return (
    <section className='w-full h-screen flex flex-col justify-center bg-primary-200 items-center md:h-screen-1/2'>
        <article className='w-4/6 flex justify-start pl-1'>
                <div className='h-4' >
                    <img src='images/bg-quotes.png' className='h-full '/>
                </div>
        </article>
        <div className='w-4/6  h-full'>
            <article className='h-full w-full flex gap-6 font-raleway flex-col md:flex-row  '>
                <div className='w-full bg-primary-400 p-6 rounded-lg sm:h-max' >
                    <p className=' text-xs leading-6 text-left '>
                        Fylo has improved our team productivity by an order of magnitude. 
                        Since making the switch our team has become a well-oiled collaboration machine
                    </p>
                    <article className='flex items-center gap-2 pt-3'>
                        <div className='h-9 '>
                            <img src='images/profile-1.jpg' className='h-full rounded-full'/>
                        </div>
                        <div>
                            <h2 className='text-xs font-bold font pb-1'>
                                Satish Patel
                            </h2>
                            <p className=' text-[10px]'>
                                Founder & CEO, Huddle
                            </p>
                        </div>
                    </article>
                </div>
                <div className='w-full bg-primary-400 p-6 rounded-lg sm:h-max' >
                    <p className=' text-xs leading-6 text-left '>
                        Fylo has improved our team productivity by an order of magnitude. 
                        Since making the switch our team has become a well-oiled collaboration machine
                    </p>
                    <article className=' flex items-center gap-2 pt-3'>
                        <div className='h-9 '>
                            <img src='images/profile-2.jpg' className='h-full rounded-full'/>
                        </div>
                        <div>
                            <h2 className='text-xs font-bold font pb-1'>
                                Bruce McKenzie
                            </h2>
                            <p className=' text-[10px]'>
                                Founder & CEO, Huddle
                            </p>
                        </div>
                    </article>
                </div>
                <div className='w-full bg-primary-400 p-6 rounded-lg sm:h-max' >
                    <p className=' text-xs leading-6 text-left '>
                        Fylo has improved our team productivity by an order of magnitude. 
                        Since making the switch our team has become a well-oiled collaboration machine
                    </p>
                    <article className=' flex items-center gap-2 pt-3'>
                        <div className='h-9 '>
                            <img src='images/profile-3.jpg' className='h-full rounded-full'/>
                        </div>
                        <div>
                            <h2 className='text-xs font-bold font pb-1'>
                                Iva Boyd
                            </h2>
                            <p className=' text-[10px]'>
                                Founder & CEO, Huddle
                            </p>
                        </div>
                    </article>
                </div>
            </article>
        </div>
    </section>
  )
}
