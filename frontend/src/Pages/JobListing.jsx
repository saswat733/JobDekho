import React from 'react'
import DisclaimerBanner from '../components/common/DisclaimerBanner'
import MainJobSection from '../components/JobListing/MainJobSection'

const JobListing = () => {
  return (
    <div className='pt-14 bg-[#FFFFFF] h-screen'>
        <DisclaimerBanner/>
        <MainJobSection/>
    </div>
  )
}

export default JobListing