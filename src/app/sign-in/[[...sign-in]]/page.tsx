'use client'
import React, { Component } from 'react'
import { SignIn } from '@clerk/nextjs'
import Script from 'next/script';


export default class page extends Component {
  render() {
    return (
        <div className='flex h-[500px] justify-center items-center bg-white'>
          <SignIn fallbackRedirectUrl="/Home" />
           <Script
              id="chatling-embed-script"
              strategy="afterInteractive"
              src="https://chatling.ai/js/embed.js"
              async
              data-id="4358988268"
            />
        </div>
    )
  }
}
