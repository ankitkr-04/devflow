import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <p className='h2-bold'>At Home Page</p>
      <UserButton afterSignOutUrl='/' />

    </div>
  )
}

export default Home