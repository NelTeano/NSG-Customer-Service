'use client'
import Image from "next/image";
import Script from 'next/script';

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { NextPage } from 'next'
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


async function getOrders() {
	const orders = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API_DOMAIN}/api/orders`);
  return orders.data;
}



interface Props {}



const Page: NextPage<Props> = ({}) => {
  const { setTheme } = useTheme()

  const { data, error, isLoading } = useQuery({
      queryKey: ['orders'],  
      queryFn: getOrders, 
  });



  if(isLoading){
    console.log("wait still loading");
  }

  if(!isLoading){
    console.log("heres the data", data)
  }
 
  {/* <Script
    id="chatling-embed-script"
    strategy="afterInteractive"
    src="https://chatling.ai/js/embed.js"
    async
    data-id="8414771916"
  /> */}


  return (
    <div className="h-10">
      <p>asd</p>
    </div>
  )
}

export default Page