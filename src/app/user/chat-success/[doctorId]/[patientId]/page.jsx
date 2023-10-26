'use client'
import React from 'react'
import Layout from '../../../Layout'
import { MdiClockTimeFive } from '@/components/icon'
import Link from 'next/link'

const page = ({params}) => {
  console.log(params)
  return (
    <Layout>
      <div className='flex gap-10 h-[80vh] justify-center items-center flex-col'><div className=' text-center bg-green-500 inline-block p-5 rounded-full'><MdiClockTimeFive/></div>
      <h1 className=' text-zinc-800 text-lg text-center font-semibold md:text-2xl'>Thank you, The Appointment Session has ended<p className='text-zinc-600 mt-2 text-base font-medium '>Have a great day</p></h1>
      
      <Link href={'/user'} className='bg-green-500 py-2 px-4 text-base font-medium rounded-xl text-white'>Back to Home</Link>
      
      </div>

      
    </Layout>
  )
}

export default page