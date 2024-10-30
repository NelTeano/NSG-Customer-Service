import React from 'react'
import Loader from "@/components/loader/Loader";

export default function Loading() {
  return (
        <div className="min-h-[1000px] w-full flex flex-col justify-center items-center">
            <Loader />  
        </div>
    )
}
