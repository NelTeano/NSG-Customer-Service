'use client'
import React, { Component } from 'react'
import { SignIn } from '@clerk/nextjs'


export default class page extends Component {
  render() {
    return (
        <div className='flex h-[500px] justify-center items-center bg-white'>
          <SignIn fallbackRedirectUrl="/Home" />
        </div>
    )
  }
}
